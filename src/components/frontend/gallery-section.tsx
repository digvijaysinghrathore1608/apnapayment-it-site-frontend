"use client";

const galleryImages = [
    "./enjoy/1.webp",
    "./enjoy/2.webp",
    "./enjoy/3.webp",
    "./enjoy/4.webp",
    "./enjoy/1.webp",
    "./enjoy/2.webp",
    "./enjoy/3.webp",
    "./enjoy/4.webp",
];

export default function GallerySection() {
    return (
        <section className="w-full py-12">
            <div className="relative flex max-w-full flex-col items-center justify-center px-2 sm:px-16">

                {/* Headings */}
                <div className="w-full flex flex-col flex-wrap gap-2 pb-8">
                    <span className="text-sm text-purple-500 font-medium tracking-wide uppercase">Our Celebrations</span>
                    <h2 className="text-2xl sm:text-3xl font-bold mt-2">We Enjoy Everyday!</h2>
                    <p className="text-sm">We love celebrating our successes and team spirit! Here are some snapshots
                        from our recent festivals, celebrations, and team events:</p>
                </div>

                {/* Masonry Gallery */}
                <div className="columns-4 md:columns-6 lg:columns-8 gap-2 space-y-4">
                    {galleryImages.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`gallery-${index}`}
                            className="w-full rounded-lg shadow-sm hover:scale-[1.02] transition-all"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
