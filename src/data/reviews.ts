export interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  date: string;
  service: string;
  text: string;
  verified: boolean;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "Jennifer M.",
    location: "Roseville, CA",
    rating: 5,
    date: "2024-11-15",
    service: "Customized Facial",
    text: "Karina is absolutely amazing! I've been seeing her for facials for over a year now, and my skin has never looked better. She takes the time to understand your concerns and customizes every treatment. The studio is beautiful and so relaxing. Highly recommend Esthetics Elegance Lab to anyone in Roseville!",
    verified: true
  },
  {
    id: 2,
    name: "Sarah L.",
    location: "Rocklin, CA",
    rating: 5,
    date: "2024-11-08",
    service: "Dermaplaning",
    text: "Best dermaplaning experience I've ever had! Karina is so skilled and gentle. My skin was glowing for weeks afterward. The atmosphere is so calming and luxurious. Worth every penny!",
    verified: true
  },
  {
    id: 3,
    name: "Michelle K.",
    location: "Granite Bay, CA",
    rating: 5,
    date: "2024-10-28",
    service: "Chemical Peel",
    text: "I was nervous about getting my first chemical peel, but Karina made me feel so comfortable. She explained every step and checked in throughout the treatment. The results were incredible - my dark spots have faded significantly after just two sessions.",
    verified: true
  },
  {
    id: 4,
    name: "Amanda R.",
    location: "Lincoln, CA",
    rating: 5,
    date: "2024-10-20",
    service: "Lash Lift",
    text: "I'm obsessed with my lash lift! Karina did such a beautiful job. My lashes look long and curled naturally without mascara. This has become my go-to service every couple of months. The drive from Lincoln is so worth it!",
    verified: true
  },
  {
    id: 5,
    name: "Christina P.",
    location: "Folsom, CA",
    rating: 5,
    date: "2024-10-12",
    service: "Microneedling",
    text: "After three microneedling sessions with Karina, my acne scars have improved dramatically. She's incredibly knowledgeable and makes sure you're comfortable throughout. The studio is impeccably clean and welcoming. I recommend her to all my friends!",
    verified: true
  },
  {
    id: 6,
    name: "Rachel H.",
    location: "Citrus Heights, CA",
    rating: 5,
    date: "2024-09-30",
    service: "Customized Facial",
    text: "Finally found my esthetician! Karina truly listens and creates a personalized experience every time. My combination skin has never been more balanced. The products she uses are amazing and she gives great at-home care advice too.",
    verified: true
  },
  {
    id: 7,
    name: "Nicole T.",
    location: "Roseville, CA",
    rating: 5,
    date: "2024-09-22",
    service: "Brow Shaping",
    text: "Karina gave me the best brows I've ever had! She really takes time to understand the shape you want and works with your natural brow. So happy I found Esthetics Elegance Lab right here in Roseville!",
    verified: true
  },
  {
    id: 8,
    name: "Lauren D.",
    location: "Orangevale, CA",
    rating: 5,
    date: "2024-09-15",
    service: "Dermaplaning + Facial",
    text: "Got the dermaplaning and facial combo and wow! My skin felt like silk. Karina is so professional and the results speak for themselves. Already booked my next appointment. This place is a hidden gem!",
    verified: true
  },
  {
    id: 9,
    name: "Emily W.",
    location: "Auburn, CA",
    rating: 5,
    date: "2024-09-05",
    service: "Chemical Peel",
    text: "I drive from Auburn specifically to see Karina. Her expertise with chemical peels is unmatched. She knows exactly which strength and type to use for your skin. My hyperpigmentation has improved so much!",
    verified: true
  },
  {
    id: 10,
    name: "Jessica B.",
    location: "Loomis, CA",
    rating: 5,
    date: "2024-08-28",
    service: "Waxing",
    text: "Best waxing experience ever! Karina is fast, thorough, and makes you feel comfortable. The hard wax she uses is so much gentler than other places I've been. Highly recommend!",
    verified: true
  }
];

export const averageRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;
export const totalReviews = reviews.length;

