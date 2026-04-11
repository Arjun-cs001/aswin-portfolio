import React from 'react';

const thumbnails = [
  "https://res.cloudinary.com/dcnz8e0nz/image/upload/v1775904199/final_2_ebqrxn.png",
  "https://res.cloudinary.com/dcnz8e0nz/image/upload/v1771342539/bachuu_tx8hvd.png",
  "https://res.cloudinary.com/dcnz8e0nz/image/upload/v1775904107/thumbnail_with_color_look_up_qxfpm0.jpg",
  "https://res.cloudinary.com/dcnz8e0nz/image/upload/v1775904107/f_t4nfa6.jpg",
  "https://res.cloudinary.com/dcnz8e0nz/image/upload/f_auto,q_auto,w_500/v1768840408/final_d4wnw2.png",
  "https://res.cloudinary.com/dcnz8e0nz/image/upload/f_auto,q_auto,w_500/v1768840385/1_S_xca4ez.jpg",
  "https://res.cloudinary.com/dcnz8e0nz/image/upload/f_auto,q_auto,w_500/v1768840371/11_nwfdsa.png",

  "https://res.cloudinary.com/dcnz8e0nz/image/upload/f_auto,q_auto,w_500/v1768840328/akshay_prankstar_rv4l8o.png",
  "https://res.cloudinary.com/dcnz8e0nz/image/upload/f_auto,q_auto,w_500/v1768840296/food_store32_fvakp3.png",
  "https://res.cloudinary.com/dcnz8e0nz/image/upload/f_auto,q_auto,w_500/v1768840290/iphone32_dptfff.png",
  "https://res.cloudinary.com/dcnz8e0nz/image/upload/f_auto,q_auto,w_500/v1768840289/pc_tech_dqcii6.png",
  "https://res.cloudinary.com/dcnz8e0nz/image/upload/f_auto,q_auto,w_500/v1768840288/new_irl_s0z00j.png",
  "https://res.cloudinary.com/dcnz8e0nz/image/upload/f_auto,q_auto,w_500/v1768840287/gadget_n5heg7.png",
  "https://res.cloudinary.com/dcnz8e0nz/image/upload/f_auto,q_auto,w_500/v1768840285/watch_j5xqxf.jpg",
  "https://res.cloudinary.com/dcnz8e0nz/image/upload/f_auto,q_auto,w_500/v1768840285/skashi_final_vi_bxseke.png",
  "https://res.cloudinary.com/dcnz8e0nz/image/upload/f_auto,q_auto,w_500/v1768840285/valio_gi_locceh.png",
  "https://res.cloudinary.com/dcnz8e0nz/image/upload/f_auto,q_auto,w_500/v1768840283/12_xpewrq.jpg"
];

// Poster images (portrait 9:16) — add your poster URLs here
const posterThumbnails = [
  "https://res.cloudinary.com/dcnz8e0nz/image/upload/v1775903596/2_jm0h5e.jpg",
  "https://res.cloudinary.com/dcnz8e0nz/image/upload/v1775902803/Artboard_1_bo4jyv.png",
];

// Duplicate items to ensure smooth infinite loop
const galleryItems = [...thumbnails, ...thumbnails];
const posterItems = [...posterThumbnails, ...posterThumbnails];

const MarqueeRow: React.FC<{
  direction: 'left' | 'right';
  images: string[];
  slow?: boolean;
}> = ({ direction, images, slow }) => {
  const animClass = direction === 'left'
    ? 'animate-scroll-left'
    : slow ? 'animate-scroll-right-slow' : 'animate-scroll-right';
  return (
    <div className="flex overflow-hidden relative w-full group">
      <div className={`flex gap-5 whitespace-nowrap ${animClass} will-change-transform`}>
        {images.map((src, index) => (
          <div
            key={index}
            className="w-[320px] sm:w-[420px] flex-shrink-0 aspect-video rounded-2xl overflow-hidden border border-zinc-800 group-hover:border-[#C0182A] transition-colors duration-300 relative"
          >
            {/* Overlay removed for clarity */}
            <img
              src={src}
              alt={`Portfolio item ${index}`}
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const PosterRow: React.FC<{ images: string[] }> = ({ images }) => {
  return (
    <div className="flex justify-center w-full group py-4 px-4">
      <div className="flex flex-wrap justify-center items-end gap-8">
        {images.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 h-[340px] sm:h-[420px] max-w-[480px] rounded-2xl overflow-hidden border border-zinc-800 group-hover:border-[#C0182A] transition-colors duration-300"
          >
            <img
              src={src}
              alt={`Poster ${index}`}
              className="h-full w-auto object-contain transform transition-transform duration-500 hover:scale-105"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-black overflow-hidden relative border-t border-zinc-900">

      <div className="max-w-7xl mx-auto px-4 mb-16">
        <span className="text-[#C0182A] font-bold tracking-wider uppercase text-sm mb-2 block">Portfolio</span>
        <h2 className="text-4xl md:text-5xl font-black text-white">Works</h2>
      </div>

      <div className="flex flex-col gap-5">
        {/* Row 1: Scrolls Right to Left */}
        <div className="transform scale-105 transition-opacity duration-500">
          <MarqueeRow direction="left" images={galleryItems} />
        </div>

        {/* Row 2: Scrolls Left to Right (reversed) */}
        <div className="transform scale-105 z-10 transition-opacity duration-500">
          <MarqueeRow direction="right" images={[...galleryItems].reverse()} slow />
        </div>

      </div>

      {/* Poster Slider */}
      <div className="max-w-7xl mx-auto px-4 mt-20 mb-8">
        <span className="text-[#C0182A] font-bold tracking-wider uppercase text-sm mb-2 block">Creative</span>
        <h3 className="text-3xl md:text-4xl font-black text-white">Posters</h3>
      </div>
      <div className="transform scale-105 transition-opacity duration-500">
        <PosterRow images={posterThumbnails} />
      </div>

      {/* Overlay Gradients to soften edges */}
      <div className="absolute inset-y-0 left-0 w-20 sm:w-40 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-20 sm:w-40 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>

    </section>
  );
};