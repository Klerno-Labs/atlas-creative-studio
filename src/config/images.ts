"use client";

import { motion } from "framer-motion";

export const images = {
  "hero": {
    src: "https://mfile.z.ai/1774397722224-bbf5612b421c4b7b89922b9bd3fa92d9.png?ufileattname=2026032508151447f88479a58644c4_watermark.png",
    alt: "Creative studio environment with glowing digital concept map on a conference table",
    width: 1200,
    height: 800,
  },
  "hero-alt": {
    src: "https://mfile.z.ai/1774397722815-08916ef9740f4895b3da20ce8c911d22.png?ufileattname=202603250815157e433d1dec9e4526_watermark.png",
    alt: "Floating abstract geometric glass sculpture with metallic accents",
    width: 1200,
    height: 800,
  },
  "about": {
    src: "https://mfile.z.ai/1774397722469-9f043bd2029842289875f1883901e2c0.png?ufileattname=20260325081515ab6ab28abb8842be_watermark.png",
    alt: "Creative professionals collaborating over a digital tablet in a bright office",
    width: 1200,
    height: 800,
  },
  "service-1": {
    src: "https://mfile.z.ai/1774397731092-bac34914914d4d2a8f3aebc573d54b43.png?ufileattname=20260325081523b019ad1d0fe143ff_watermark.png",
    alt: "Close-up of designer hand sketching geometric typography on paper",
    width: 1200,
    height: 800,
  },
  "service-2": {
    src: "https://mfile.z.ai/1774397731867-a97c7ad620a54c148fbb57f45b99e7ef.png?ufileattname=2026032508152358b6b4b6151243f4_watermark.png",
    alt: "Futuristic 3D render of glowing abstract sphere on dark background",
    width: 1200,
    height: 800,
  },
  "service-3": {
    src: "https://mfile.z.ai/1774397730671-034d6854be5d493494acf543ce5d389b.png?ufileattname=20260325081523eb818bc78ef44ad6_watermark.png",
    alt: "Architectural blueprints and models arranged on white background",
    width: 1200,
    height: 800,
  },
  "gallery-1": {
    src: "https://mfile.z.ai/1774397739812-b9ac8652cfd54c3b9e2512f85d954472.png?ufileattname=20260325081532d43251668c1147e5_watermark.png",
    alt: "Luxury leather notebook with minimalist gold foil logo",
    width: 1200,
    height: 800,
  },
  "gallery-2": {
    src: "https://mfile.z.ai/1774397739976-191091581ede4a64ab4aef87db77b61b.png?ufileattname=20260325081532061e9c635a9445a7_watermark.png",
    alt: "Tablet screen displaying vibrant app interface with motion graphics",
    width: 1200,
    height: 800,
  },
  "gallery-3": {
    src: "https://mfile.z.ai/1774397740967-0c6bf0187c2444a6ac69732ff92188ef.png?ufileattname=20260325081532dcd4d406c7e644cf_watermark.png",
    alt: "Avant-garde fashion magazine cover with bold typography",
    width: 1200,
    height: 800,
  },
  "gallery-4": {
    src: "https://mfile.z.ai/1774397750075-1071289333704e87a47ae6fb99d07fb0.png?ufileattname=2026032508154196ee62d4cc7248f7_watermark.png",
    alt: "Modern architectural space with distinct sculptural furniture piece",
    width: 1200,
    height: 800,
  },
  "cta": {
    src: "https://mfile.z.ai/1774397749291-999a87999c544d868cdeef93b28157e3.png?ufileattname=20260325081541570b48d0655c45d1_watermark.png",
    alt: "Glossy black wall with white artistic text brushstroke",
    width: 1200,
    height: 800,
  },
  "testimonial-bg": {
    src: "https://mfile.z.ai/1774397748644-eec4f1494caa48118e274b3e6ba6e739.png?ufileattname=202603250815413d3233af7c134a4d_watermark.png",
    alt: "Blurred abstract architectural lines and gradients in slate grey",
    width: 1200,
    height: 800,
  },
  "team-1": {
    src: "https://mfile.z.ai/1774397757602-0e4f01e63b6144788c9938c33f6105be.png?ufileattname=20260325081550d651bd10f0c4471d_watermark.png",
    alt: "Professional headshot of creative director with neutral background",
    width: 1200,
    height: 800,
  },
  "menu-1": {
    src: "https://mfile.z.ai/1774397758269-4b7387e4c6c848de9efb94c8cae2e287.png?ufileattname=2026032508155026cd0a3413824dd2_watermark.png",
    alt: "Conceptual glowing nodes on digital grid representing data",
    width: 1200,
    height: 800,
  },
  "menu-2": {
    src: "https://mfile.z.ai/1774397757859-8bb37860ec8e4c5c9c7d2416bc5427d1.png?ufileattname=20260325081550f185184144e6451c_watermark.png",
    alt: "Sleek minimalist black and white logo icon on pristine surface",
    width: 1200,
    height: 800,
  },
  "menu-3": {
    src: "https://mfile.z.ai/1774397767313-654dc97abb1c4f3bbf5ba5be44004367.png?ufileattname=20260325081558070069d5cad44f7b_watermark.png",
    alt: "Composition of smartphones displaying different mobile app layouts",
    width: 1200,
    height: 800,
  },
  "product-1": {
    src: "https://mfile.z.ai/1774397765786-8d062c4bace94570bcef7fcefd12c721.png?ufileattname=2026032508155894dd4baf66b4432a_watermark.png",
    alt: "White t-shirt with artistic graphic design on clothing rack",
    width: 1200,
    height: 800,
  },
  "product-2": {
    src: "https://mfile.z.ai/1774397766475-e0f5ece44d7a4297861bb221b7c46c6c.png?ufileattname=2026032508155881e616214f9b4d51_watermark.png",
    alt: "Flat lay of beanie hat with embroidered logo and accessories",
    width: 1200,
    height: 800,
  },
} as const;

export type ImageSlot = keyof typeof images;