export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  duration: string;
  priceRange: string;
  image: string;
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: "dermaplaning",
    title: "Dermaplaning",
    shortDescription: "Reveal smooth, radiant skin by gently exfoliating dead cells and peach fuzz for an instant glow.",
    fullDescription: "Dermaplaning is a highly effective exfoliation treatment that uses a sterile surgical blade to gently remove dead skin cells and fine vellus hair (peach fuzz) from the skin's surface. This treatment reveals a smoother, brighter complexion and allows for better product penetration. Perfect for preparing skin before special events or as part of a regular skincare routine.",
    benefits: [
      "Instantly smoother, brighter skin",
      "Removes fine facial hair (peach fuzz)",
      "Improves product absorption",
      "Safe for all skin types",
      "No downtime required",
      "Enhances makeup application"
    ],
    duration: "45-60 minutes",
    priceRange: "$85-$125",
    image: "/images/services/dermaplaning.jpg",
    faqs: [
      {
        question: "Does dermaplaning hurt?",
        answer: "Not at all! Dermaplaning is a gentle, painless treatment. Most clients find it relaxing and describe it as a light scraping sensation."
      },
      {
        question: "Will my hair grow back thicker?",
        answer: "No, this is a common myth. Dermaplaning removes vellus hair which will grow back at the same texture and rate as before."
      },
      {
        question: "How often should I get dermaplaning?",
        answer: "For best results, we recommend dermaplaning every 3-4 weeks to maintain smooth, glowing skin."
      }
    ]
  },
  {
    slug: "facials",
    title: "Customized Facials",
    shortDescription: "Personalized facial treatments tailored to your unique skin concerns for lasting radiance.",
    fullDescription: "Our customized facials are designed to address your specific skin concerns, whether you're dealing with acne, aging, hyperpigmentation, or simply want to maintain healthy, glowing skin. Karina will analyze your skin and create a personalized treatment plan using premium skincare products and advanced techniques.",
    benefits: [
      "Tailored to your skin type and concerns",
      "Deep cleansing and pore extraction",
      "Hydration and nourishment",
      "Relaxing massage techniques",
      "Premium skincare products",
      "Visible results after first treatment"
    ],
    duration: "60-90 minutes",
    priceRange: "$95-$175",
    image: "/images/services/facials.jpg",
    faqs: [
      {
        question: "What type of facial is best for me?",
        answer: "During your consultation, Karina will assess your skin type, concerns, and goals to recommend the perfect facial treatment for you."
      },
      {
        question: "How often should I get a facial?",
        answer: "We recommend monthly facials to maintain optimal skin health, though some concerns may require more frequent treatments initially."
      },
      {
        question: "Is there any downtime after a facial?",
        answer: "Most facials have no downtime. You may experience slight redness for a few hours, but you can return to normal activities immediately."
      }
    ]
  },
  {
    slug: "chemical-peels",
    title: "Chemical Peels",
    shortDescription: "Powerful exfoliation treatments that reveal fresh, renewed skin and address various concerns.",
    fullDescription: "Chemical peels use specially formulated solutions to remove damaged outer layers of skin, revealing fresher, more youthful skin beneath. We offer a range of peels from gentle enzyme peels to more intensive treatments, customized to your skin's needs and tolerance level. Perfect for treating acne, sun damage, fine lines, and uneven skin tone.",
    benefits: [
      "Reduces fine lines and wrinkles",
      "Improves acne and acne scars",
      "Evens out skin tone",
      "Minimizes pore appearance",
      "Stimulates collagen production",
      "Treats sun damage and age spots"
    ],
    duration: "30-60 minutes",
    priceRange: "$100-$200",
    image: "/images/services/chemical-peels.jpg",
    faqs: [
      {
        question: "Are chemical peels painful?",
        answer: "You may feel a mild tingling or warming sensation during the treatment. Deeper peels may cause more sensation, but we ensure your comfort throughout."
      },
      {
        question: "What is the recovery time?",
        answer: "Light peels have minimal recovery (1-3 days of mild flaking), while medium peels may require 5-7 days for full healing."
      },
      {
        question: "How many peels do I need?",
        answer: "A series of 3-6 peels, spaced 2-4 weeks apart, typically provides the best results for most concerns."
      }
    ]
  },
  {
    slug: "lashes-brows",
    title: "Lashes & Brows",
    shortDescription: "Enhance your natural beauty with expert lash lifts, tints, and brow shaping services.",
    fullDescription: "Frame your face and enhance your natural beauty with our professional lash and brow services. From lash lifts that give you that wide-awake look to perfectly shaped brows that complement your features, Karina's expert techniques will have you looking polished and put-together effortlessly.",
    benefits: [
      "Wake up looking refreshed",
      "Reduce daily makeup routine",
      "Natural-looking enhancement",
      "Long-lasting results",
      "Customized to your face shape",
      "Safe, professional application"
    ],
    duration: "30-75 minutes",
    priceRange: "$35-$150",
    image: "/images/services/lashes-brows.jpg",
    faqs: [
      {
        question: "How long does a lash lift last?",
        answer: "A lash lift typically lasts 6-8 weeks, following the natural growth cycle of your lashes."
      },
      {
        question: "Can I get a lash lift if I have sensitive eyes?",
        answer: "Yes! We use gentle, professional-grade products suitable for sensitive eyes. Let us know about any allergies during your consultation."
      },
      {
        question: "How should I prepare for a brow appointment?",
        answer: "Avoid tweezing or waxing for 2-3 weeks before your appointment so we have full growth to work with for the best shape."
      }
    ]
  },
  {
    slug: "microneedling",
    title: "Microneedling",
    shortDescription: "Advanced collagen-boosting treatment for firmer, smoother, more youthful-looking skin.",
    fullDescription: "Microneedling is a minimally invasive treatment that uses fine needles to create controlled micro-injuries in the skin, stimulating your body's natural healing response and collagen production. This treatment is excellent for reducing the appearance of scars, wrinkles, and large pores while improving overall skin texture and firmness.",
    benefits: [
      "Stimulates natural collagen production",
      "Reduces fine lines and wrinkles",
      "Improves acne scars",
      "Minimizes pore size",
      "Enhances skin firmness",
      "Improves product absorption"
    ],
    duration: "60-90 minutes",
    priceRange: "$200-$350",
    image: "/images/services/microneedling.jpg",
    faqs: [
      {
        question: "Is microneedling painful?",
        answer: "We apply a topical numbing cream before treatment to ensure your comfort. Most clients describe it as a mild scratching sensation."
      },
      {
        question: "What is the recovery time?",
        answer: "Expect 2-3 days of redness similar to a sunburn. Most clients can return to normal activities the next day with mineral makeup if desired."
      },
      {
        question: "How many sessions are needed?",
        answer: "We typically recommend a series of 3-6 treatments, spaced 4-6 weeks apart, for optimal results."
      }
    ]
  },
  {
    slug: "waxing",
    title: "Waxing Services",
    shortDescription: "Smooth, long-lasting hair removal with gentle techniques for sensitive skin.",
    fullDescription: "Experience comfortable, effective hair removal with our professional waxing services. Using premium hard and soft waxes, Karina provides thorough hair removal while minimizing discomfort. Our gentle techniques are suitable for all skin types, including sensitive skin, leaving you silky smooth for weeks.",
    benefits: [
      "Long-lasting smoothness (3-6 weeks)",
      "Hair grows back finer over time",
      "Exfoliates skin during treatment",
      "Suitable for sensitive skin",
      "Quick and efficient service",
      "Minimal irritation"
    ],
    duration: "15-60 minutes",
    priceRange: "$20-$85",
    image: "/images/services/waxing.jpg",
    faqs: [
      {
        question: "How long should my hair be for waxing?",
        answer: "Hair should be about 1/4 inch long (roughly 2-3 weeks of growth) for the wax to grip effectively."
      },
      {
        question: "How can I prevent ingrown hairs?",
        answer: "Exfoliate gently 2-3 times a week starting 48 hours after waxing, and keep the area moisturized."
      },
      {
        question: "Is waxing suitable for sensitive skin?",
        answer: "Yes! We use gentle, high-quality waxes specifically formulated for sensitive skin and take extra care during application."
      }
    ]
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

