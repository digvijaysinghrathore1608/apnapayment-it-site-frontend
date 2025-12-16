"use client";
import { site_logo, site_name } from "@/data/business";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Logo({ text_color = "black" }: { text_color?: string }) {
    const pathname = usePathname();
    const isHome = pathname === "/";

    const handleClick = (e: React.MouseEvent) => {
        if (isHome) e.preventDefault(); // stop navigation if already home
    };

    return (
        <Link
            href="/"
            onClick={handleClick}
            className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal cursor-pointer"
        >
            <img
                src={site_logo}
                alt="logo"
                width={30}
                height={30}
            />

            {/* Safe Tailwind Dynamic Color */}
            <span className="font-medium" style={{ color: text_color }}>
                {site_name}
            </span>
        </Link>
    );
}
