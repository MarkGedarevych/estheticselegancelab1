# Blog Images

This folder contains images for the blog posts.

## Image Naming Convention

Images follow this naming pattern: `{topic}-{description}.webp`

## Required Images

Each blog post needs 4-5 images:
1. Hero image (featured image) - `{topic}-hero.webp` - 1200x630px
2. Supporting images - `{topic}-{description}.webp` - 800x450px

## Downloading Images

To download images from Unsplash and convert to WebP:

```bash
# Install dependencies
npm install sharp

# Run the download script
node scripts/download-blog-images.js
```

## Image Optimization

All images should be:
- WebP format for best compression
- Properly sized (not larger than needed)
- Have descriptive alt text defined in blog data files

## Placeholder Images

During development, if images are missing, the blog will display gradient placeholders.


