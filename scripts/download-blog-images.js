/**
 * Blog Image Download Script
 * Downloads images from Unsplash and converts them to WebP format
 * 
 * Usage: node scripts/download-blog-images.js
 * 
 * Prerequisites:
 * npm install sharp node-fetch
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// Image configurations for each blog post
const blogImages = {
  // Blog 1: Complete Guide to Facials
  'facials-guide': {
    images: [
      { name: 'facials-guide-hero.webp', url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=80', alt: 'Professional facial treatment' },
      { name: 'facial-consultation.webp', url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80', alt: 'Skin analysis consultation' },
      { name: 'facial-steaming.webp', url: 'https://images.unsplash.com/photo-1552693673-1bf958298935?w=800&q=80', alt: 'Facial steaming treatment' },
      { name: 'facial-mask-application.webp', url: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&q=80', alt: 'Facial mask application' },
      { name: 'facial-massage.webp', url: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=800&q=80', alt: 'Facial massage' },
      { name: 'glowing-skin-results.webp', url: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80', alt: 'Glowing skin results' }
    ]
  },
  // Blog 2: Dermaplaning
  'dermaplaning': {
    images: [
      { name: 'dermaplaning-hero.webp', url: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1200&q=80', alt: 'Dermaplaning treatment' },
      { name: 'dermaplaning-blade.webp', url: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=80', alt: 'Dermaplaning blade' },
      { name: 'dermaplaning-process.webp', url: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=800&q=80', alt: 'Dermaplaning process' },
      { name: 'dermaplaning-results.webp', url: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&q=80', alt: 'Dermaplaning results' },
      { name: 'dermaplaning-skincare.webp', url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80', alt: 'Post-dermaplaning skincare' }
    ]
  },
  // Blog 3: Chemical Peels
  'chemical-peels': {
    images: [
      { name: 'chemical-peels-hero.webp', url: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1200&q=80', alt: 'Chemical peel treatment' },
      { name: 'peel-application.webp', url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80', alt: 'Peel application' },
      { name: 'peel-types.webp', url: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80', alt: 'Types of peels' },
      { name: 'peel-results.webp', url: 'https://images.unsplash.com/photo-1508243771214-6e95d137426b?w=800&q=80', alt: 'Peel results' },
      { name: 'peel-aftercare.webp', url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80', alt: 'Peel aftercare' }
    ]
  },
  // Blog 4: Microneedling
  'microneedling': {
    images: [
      { name: 'microneedling-hero.webp', url: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=1200&q=80', alt: 'Microneedling treatment' },
      { name: 'microneedling-device.webp', url: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=800&q=80', alt: 'Microneedling device' },
      { name: 'microneedling-process.webp', url: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80', alt: 'Microneedling process' },
      { name: 'microneedling-serum.webp', url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80', alt: 'Serum application' },
      { name: 'microneedling-results.webp', url: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&q=80', alt: 'Microneedling results' },
      { name: 'microneedling-aftercare.webp', url: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80', alt: 'Aftercare products' }
    ]
  },
  // Blog 5: Lash Lifts
  'lash-lift': {
    images: [
      { name: 'lash-lift-hero.webp', url: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=1200&q=80', alt: 'Beautiful lifted lashes' },
      { name: 'lash-lift-process.webp', url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80', alt: 'Lash lift process' },
      { name: 'lash-extensions.webp', url: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=800&q=80', alt: 'Lash extensions' },
      { name: 'lash-comparison.webp', url: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?w=800&q=80', alt: 'Lash comparison' },
      { name: 'lash-aftercare.webp', url: 'https://images.unsplash.com/photo-1526045478516-99145907023c?w=800&q=80', alt: 'Lash aftercare' }
    ]
  },
  // Blog 6: Skincare Routine
  'skincare-routine': {
    images: [
      { name: 'skincare-routine-hero.webp', url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&q=80', alt: 'Skincare products' },
      { name: 'skin-types.webp', url: 'https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?w=800&q=80', alt: 'Skin types' },
      { name: 'skincare-layering.webp', url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80', alt: 'Product layering' },
      { name: 'skincare-products.webp', url: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80', alt: 'Essential products' },
      { name: 'morning-routine.webp', url: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&q=80', alt: 'Morning routine' },
      { name: 'evening-routine.webp', url: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&q=80', alt: 'Evening routine' }
    ]
  },
  // Blog 7: Hyperpigmentation
  'hyperpigmentation': {
    images: [
      { name: 'hyperpigmentation-hero.webp', url: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=1200&q=80', alt: 'Clear skin after treatment' },
      { name: 'hyperpigmentation-types.webp', url: 'https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?w=800&q=80', alt: 'Types of hyperpigmentation' },
      { name: 'brightening-serums.webp', url: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&q=80', alt: 'Brightening serums' },
      { name: 'chemical-peel-pigmentation.webp', url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80', alt: 'Chemical peel for pigmentation' },
      { name: 'sunscreen-application.webp', url: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=800&q=80', alt: 'Sunscreen application' }
    ]
  },
  // Blog 8: Acne Treatment
  'acne-treatment': {
    images: [
      { name: 'acne-treatment-hero.webp', url: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1200&q=80', alt: 'Clear skin results' },
      { name: 'acne-types.webp', url: 'https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?w=800&q=80', alt: 'Types of acne' },
      { name: 'acne-extraction.webp', url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80', alt: 'Professional extraction' },
      { name: 'acne-facial.webp', url: 'https://images.unsplash.com/photo-1552693673-1bf958298935?w=800&q=80', alt: 'Acne facial treatment' },
      { name: 'acne-skincare.webp', url: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80', alt: 'Acne skincare products' }
    ]
  },
  // Blog 9: Anti-Aging
  'anti-aging': {
    images: [
      { name: 'anti-aging-hero.webp', url: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1200&q=80', alt: 'Mature woman with healthy skin' },
      { name: 'anti-aging-routine.webp', url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80', alt: 'Anti-aging products' },
      { name: 'sun-protection.webp', url: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=800&q=80', alt: 'Sun protection' },
      { name: 'facial-massage.webp', url: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=800&q=80', alt: 'Facial massage' },
      { name: 'collagen-skin.webp', url: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&q=80', alt: 'Healthy collagen skin' }
    ]
  },
  // Blog 10: Event Prep
  'event-prep': {
    images: [
      { name: 'event-prep-hero.webp', url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80', alt: 'Bride with glowing skin' },
      { name: 'bridal-facial.webp', url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80', alt: 'Bridal facial treatment' },
      { name: 'skincare-timeline.webp', url: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80', alt: 'Skincare timeline calendar' },
      { name: 'photo-ready-skin.webp', url: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80', alt: 'Photo ready skin' },
      { name: 'wedding-day-glow.webp', url: 'https://images.unsplash.com/photo-1537907510278-7fa7dc1f3fcc?w=800&q=80', alt: 'Wedding day glow' }
    ]
  }
};

// Create directories if they don't exist
const blogImageDir = path.join(__dirname, '..', 'public', 'images', 'blog');
if (!fs.existsSync(blogImageDir)) {
  fs.mkdirSync(blogImageDir, { recursive: true });
  console.log('Created directory:', blogImageDir);
}

// Download function
async function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        // Follow redirect
        https.get(response.headers.location, (redirectResponse) => {
          redirectResponse.pipe(file);
          file.on('finish', () => {
            file.close();
            resolve();
          });
        }).on('error', reject);
      } else {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      }
    }).on('error', reject);
  });
}

// Main function to download all images
async function downloadAllImages() {
  console.log('Starting blog image download...\n');
  
  for (const [blogKey, blog] of Object.entries(blogImages)) {
    console.log(`Processing: ${blogKey}`);
    
    for (const image of blog.images) {
      const filepath = path.join(blogImageDir, image.name);
      
      // Skip if file exists
      if (fs.existsSync(filepath)) {
        console.log(`  ✓ ${image.name} (already exists)`);
        continue;
      }
      
      try {
        // For now, download as jpg first
        const tempPath = filepath.replace('.webp', '.jpg');
        await downloadImage(image.url, tempPath);
        
        // Note: WebP conversion requires sharp module
        // For production, run: npm install sharp
        // Then uncomment the conversion code below:
        /*
        const sharp = require('sharp');
        await sharp(tempPath)
          .webp({ quality: 80 })
          .toFile(filepath);
        fs.unlinkSync(tempPath); // Remove temp jpg
        */
        
        // For now, just rename
        fs.renameSync(tempPath, filepath.replace('.webp', '.jpg'));
        console.log(`  ✓ ${image.name} downloaded`);
      } catch (error) {
        console.log(`  ✗ ${image.name} failed: ${error.message}`);
      }
    }
    console.log('');
  }
  
  console.log('Download complete!');
  console.log('\nTo convert to WebP format:');
  console.log('1. npm install sharp');
  console.log('2. Uncomment the sharp conversion code in this script');
  console.log('3. Run the script again');
}

// Run
downloadAllImages().catch(console.error);

