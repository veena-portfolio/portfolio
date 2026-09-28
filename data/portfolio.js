// All copy for the site lives here so it can be edited without touching layout.

export const profile = {
  name: "Veena s",
  fullName: "Veena S",
  role: "Fashion and Apparel Designer",
  about:
    "I am a fashion and apparel designer driven by curiosity, craftsmanship, and storytelling. Inspired by nature, texture, and movement, I transform observations into contemporary garments through research, illustration, and garment construction. My work combines traditional textile techniques with modern design thinking to create collections that are both expressive and thoughtfully crafted.",
  contact: {
    location: "Bengaluru, Karnataka",
    email: "veenahhhhh@gmail.com",
    instagram: "notveenough",
  },
  education: [
    { title: "Post Diploma in Fashion & Apparel Design", place: "Idea World College | 2025-2026" },
    { title: "Bachelor of Computer Applications", place: "University of Mysore | 2023-2025" },
  ],
  projects: [
    {
      title: "Peacock-Inspired Couture Collection",
      lines: [
        "Designed and constructed a couture garment inspired by peacock using handcrafted macramé techniques.",
        "Developed mood boards, color palette, and garment construction from concept to final execution.",
        "Presented the collection at a fashion showcase.",
      ],
    },
    {
      title: "Motion-Inspired Kinetic Collection",
      lines: [
        "Designed an experimental garment inspired by the theme of motion and kinetic forms.",
        "Explored structural silhouettes, movement, and innovative design concepts through garment development.",
        "Created fashion illustrations, technical flats, and the final garment.",
      ],
    },
  ],
  software: ["Adobe Illustrator", "Adobe Photoshop", "Canva", "Procreate", "Microsoft Excel", "Microsoft PowerPoint"],
  skills: [
    "Fashion Illustration",
    "Textile Design",
    "Motif Development",
    "Pattern Making",
    "Colour Theory",
    "Photography",
    "Styling",
    "Mood & Concept Board Creation",
    "Surface Embellishment and manipulation",
    "Trend Forecasting",
    "Technical Design",
    "Garment Construction",
  ],
  softSkills: [
    "Creative Thinking",
    "Attention to Detail",
    "Leadership",
    "Problem solving",
    "Time management",
    "Research and Design development",
  ],
};

// `href` is omitted for collections that don't have pages yet.
export const contents = [
  { no: "01", title: "Flame in Bloom", href: "#flame-in-bloom" },
  { no: "02", title: "Endless Rhythm", href: "#endless-rhythm" },
  { no: "03", title: "Plumage", href: "#plumage" },
  { no: "04", title: "Glided Motion" },
];

// Positions (PDF points) come from the original slides so the laptop layout
// matches the document exactly.
export const collections = [
  {
    id: "flame-in-bloom",
    title: "Flame in bloom",
    accent: "var(--crimson)",
    description:
      "Flame in Bloom celebrates the striking beauty of Delonix Regia, a tree known for its fiery blossoms that transform ordinary landscapes into vibrant spectacles. The collection captures the flower's bold colour palette, flowing petals, and organic structure, translating them into contemporary silhouettes that express confidence, femininity, and natural elegance.",
    layout: { title: [113, 71], text: [100, 194, 262], art: [420, 75, 950] },
    moodboard: "flame-moodboard",
    sketches: { image: "flame-sketches", title: [70, 51] },
    lineup: { image: "flame-lineup", rect: [222, 52, 996], title: [81, 71] },
  },
  {
    id: "endless-rhythm",
    title: "Endless Rhythm",
    accent: "var(--brown)",
    description:
      "Spirals are among the most fascinating patterns found in nature, representing growth, continuity, rhythm, and evolution. Inspired by the geometry of the snail shell, this project investigates the relationship between mathematical curves and fashion, transforming spiral movement into sculptural silhouettes and flowing garment details.",
    layout: { title: [88, 71], text: [92, 180, 300], art: [405, 65, 965] },
    moodboard: "rhythm-moodboard",
    sketches: { image: "rhythm-sketches", title: [74, 45] },
    lineup: { image: "rhythm-lineup", rect: [258, 52, 964], title: [81, 71] },
  },
  {
    id: "plumage",
    title: "Plumage",
    accent: "var(--teal)",
    description:
      "Plumage is inspired by the majestic beauty of the peacock and reinterpreted through the intricate craft of macramé. The collection explores handcrafted knotting techniques to create texture, movement, and sculptural elegance while celebrating traditional craftsmanship in a contemporary context.",
    layout: { title: [81, 71], text: [88, 172, 322], art: [405, 60, 965] },
    moodboard: "plumage-moodboard",
    lineup: { image: "plumage-lineup", rect: [253, 86, 960], title: [91, 71] },
  },
];

export const techPack = {
  styleName: "MACRAME EVENING DRESS",
  styleNo: "HV - 2728",
  category: "WOMEN’S WEAR",
  season: "RESORT/SPRING SUMMER",
  date: "27/06/2026",
  designer: "VEENA S",
  description:
    "Handcrafted macrame dress featuring a high halter neckline, fully knotted bodice, open lattice skirt with beaded fringe detailing",
  fabric: ["100% Cotton Macrame Cord", "Color : Teal #008080", "Thickness : 3mm"],
  trims: ["Gold Metal Tube Beads", "Golden Round Beads", "Golden half Circle Beads", "Teardrop Charm Beads"],
  construction: [
    "Entire dress is handcrafted using macramé knotting technique.",
    "Bodice features tight diamond knot pattern for structure.",
    "Skirt uses open lattice knot for a semi-sheer effect.",
    "Asymmetric hem finished with fringe and bead detailing.",
    "Back opening secured with macrame tie at neck and adjustable gold tone chain drape.",
    "Gold beads hand-threaded and knotted at strategic points.",
  ],
  // [image, x, y, w, h] in PDF points
  details: [
    ["techpack-detail-1", 1077, 312, 109, 72],
    ["techpack-detail-2", 1202, 312, 78, 72],
    ["techpack-detail-3", 1077, 401, 109, 123],
    ["techpack-detail-4", 1203, 401, 89, 147],
    ["techpack-detail-5", 1077, 542, 110, 143],
  ],
};

// [image, x, y, w, h] in PDF points
export const lookbook = [
  ["lookbook-1", 183, 179, 260, 550],
  ["lookbook-2", 457, 81, 233, 648],
  ["lookbook-3", 705, 150, 231, 579],
  ["lookbook-4", 950, 81, 296, 648],
];
