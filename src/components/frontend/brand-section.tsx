import Reveal from "./Reveal";

export default function BrandsSection() {
    const brands = [
        { src: "./brand/vast-logo.webp", alt: "vast logo" },
        { src: "./brand/ClickUP_Logo-1.webp", alt: "ClickUP Logo" },
        { src: "./brand/Group-19334-1.svg", alt: "Group-19334" },
        { src: "./brand/Group-19335-1.svg", alt: "Group-19335" },
        { src: "./brand/sweatcoin.webp", alt: "sweatcoin" },
        { src: "./brand/Group-18956.svg", alt: "Soflete" },
        { src: "./brand/SH-logo-1.webp", alt: "SH logo" },
        { src: "./brand/Afriex-1.png", alt: "Afriex" },
        { src: "./brand/Group-19337-1.svg", alt: "Group-19337" },
        { src: "./brand/Superprof.webp", alt: "Superprof" },
        { src: "./brand/Alpha_work_smarter.webp", alt: "Alpha Work Smart" },
        { src: "./brand/Voi_Technology_Logo_2021.svg-1.svg", alt: "Voi" },
    ];

    return (
        <>
            {/* hero section start */}
            <Reveal className="w-full">
                <div className="relative flex max-w-full flex-col items-center justify-center mx-2 sm:mx-16">
                    <div className="absolute inset-y-0 left-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
                        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                    </div>
                    <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
                        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
                    </div>
                    <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
                        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
                        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                    </div>
                    <div className="px-4 py-10 md:py-20">
                        {/* Heading */}
                        <div className="text-center mb-8">
                            <h2 className="text-xl sm:text-4xl font-bold">Brands we’ve collaborated with</h2>
                        </div>
                        {/* Brand Logos */}
                        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 sm:gap-10 place-items-center">
                            {brands.map((brand, index) => (
                                <div
                                    key={index}
                                    className="border rounded-xl p-4 flex justify-center items-center w-[140px] h-[90px] bg-white shadow-sm hover:shadow-md transition"
                                >
                                    <img
                                        src={brand.src}
                                        alt={brand.alt}
                                        className="max-h-14 object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Reveal>
            {/* hero section end */}
        </>
    )
}
