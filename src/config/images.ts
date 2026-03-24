// ── Image Configuration ──────────────────────────────────────────────
// ✏️  HOW TO CHANGE IMAGES:
// 1. Find the slot you want to change below (e.g. "hero", "about", "service-1")
// 2. Replace the "src" URL with your own image URL
// 3. Update the "alt" text to describe the new image
// 4. Save — every component on the site updates automatically
//
// All components import from this file. This is the ONLY file you need
// to edit to swap any image on the entire website.

export const images = {
  // Homepage hero banner — the first image visitors see [cogview]
  "hero": {
    src: "https://mfile.z.ai/1774356988974-7649c16cb4a6458ba29c52671b71e693.png?ufileattname=20260324205620dca57c9d71a749cb_watermark.png",
    alt: "Abstract geometric sculpture on a modern desk in a dimly lit studio",
    width: 1200,
    height: 800,
  },

  // Alternative hero image (used on inner pages or as fallback) [cogview]
  "hero-alt": {
    src: "https://mfile.z.ai/1774356989185-511fd160f7234966bb56187fa347d008.png?ufileattname=202603242056212debc8e9a501466a_watermark.png",
    alt: "Close up of an artist's hand sketching a digital wireframe on a tablet",
    width: 1200,
    height: 800,
  },

  // About page or About section on homepage [cogview]
  "about": {
    src: "https://mfile.z.ai/1774356988861-e963cbb573044239984f9be4d56c8396.png?ufileattname=2026032420562148c7515523a14423_watermark.png",
    alt: "Diverse team of designers collaborating around a large screen in an office",
    width: 1200,
    height: 800,
  },

  // First service card image [cogview]
  "service-1": {
    src: "https://mfile.z.ai/1774356997036-a7a7982f15d444248649a2b4aaf015da.png?ufileattname=2026032420562978fef08d4de345c1_watermark.png",
    alt: "Designer painting a vibrant logo on a canvas in a studio",
    width: 1200,
    height: 800,
  },

  // Second service card image [cogview]
  "service-2": {
    src: "https://mfile.z.ai/1774356997397-3c505868ccc84fdd9e227c05c9751581.png?ufileattname=2026032420562909a5e5c682484947_watermark.png",
    alt: "UX designer looking at a tablet showing a mobile app interface",
    width: 1200,
    height: 800,
  },

  // Third service card image [cogview]
  "service-3": {
    src: "https://mfile.z.ai/1774356997442-2d94195f899c40909044ca9acf695895.png?ufileattname=20260324205629c80bd3ccaccd43e8_watermark.png",
    alt: "Consultant presenting a 3D model on a tablet to a client",
    width: 1200,
    height: 800,
  },

  // Gallery image 1 [cogview]
  "gallery-1": {
    src: "https://mfile.z.ai/1774357004984-19c6d9263d3b42c8991a6ed24f859081.png?ufileattname=2026032420563733a03666e5d54857_watermark.png",
    alt: "Close up of luxury fashion brand packaging on a white background",
    width: 1200,
    height: 800,
  },

  // Gallery image 2 [cogview]
  "gallery-2": {
    src: "https://mfile.z.ai/1774357005597-8a1c36a30206415a8075d971d603352b.png?ufileattname=202603242056379ddc527627b84574_watermark.png",
    alt: "Restaurant menu design sheet placed on a wooden table",
    width: 1200,
    height: 800,
  },

  // Gallery image 3 [cogview]
  "gallery-3": {
    src: "https://mfile.z.ai/1774357006276-b311ee23cb044136bbd198595c462dbc.png?ufileattname=20260324205637e0d53b8a861a489d_watermark.png",
    alt: "Laptop displaying a modern tech startup website",
    width: 1200,
    height: 800,
  },

  // Gallery image 4 [cogview]
  "gallery-4": {
    src: "https://mfile.z.ai/1774357015057-1614308c5967447c80de3b2d30ed0286.png?ufileattname=2026032420564607b40ba79266495a_watermark.png",
    alt: "Abstract 3D rendering of a modern building",
    width: 1200,
    height: 800,
  },

  // Image used in the "process" section [cogview]
  "process": {
    src: "https://mfile.z.ai/1774357014653-1ee6a098d6d8441aabd17e911cc16ef7.png?ufileattname=2026032420564694da50a7d1b7496c_watermark.png",
    alt: "Abstract isometric illustration of brainstorming meeting",
    width: 1200,
    height: 800,
  },

  // Call-to-action section background [cogview]
  "cta": {
    src: "https://mfile.z.ai/1774357015024-e396e58a45544a1eb39289612034bae2.png?ufileattname=20260324205646d2399a939d3c4701_watermark.png",
    alt: "Empty premium chair facing a panoramic city window at sunset",
    width: 1200,
    height: 800,
  },

  // Testimonials section background or decoration [cogview]
  "testimonial-bg": {
    src: "https://mfile.z.ai/1774357022955-e91a2a5c553a49fe89ec75e1dc173ec9.png?ufileattname=202603242056552b3dcda6d85740dc_watermark.png",
    alt: "Abstract luxury interior design texture",
    width: 1200,
    height: 800,
  },
} as const;

export type ImageSlot = keyof typeof images;