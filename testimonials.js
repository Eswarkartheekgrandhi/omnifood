const testimonials = [
  {
    image: "img/customers/dave.jpg",
    text: "Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.",
    name: "Dave Bryson",
  },
  {
    image: "img/customers/ben.jpg",
    text: "The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!",
    name: "Ben Hadley",
  },
  {
    image: "img/customers/steve.jpg",
    text: "Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!",
    name: "Steve Miller",
  },
  {
    image: "img/customers/hannah.jpg",
    text: "I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.",
    name: "Hannah Smith",
  },
];

const addTestimonial = (testimonial) => {
  testimonials.push(testimonial);
};

module.exports = {
  testimonials,
  addTestimonial,
};
