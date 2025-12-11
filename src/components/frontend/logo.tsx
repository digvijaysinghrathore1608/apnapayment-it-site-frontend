export default function Logo({ text_color = "black" }: { text_color?: string }) {
    return (

        <>
            <a
                href="#"
                className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
            >
                <img
                    src="https://assets.aceternity.com/logo-dark.png"
                    alt="logo"
                    width={30}
                    height={30}
                />
                <span className={`font-medium text-${text_color}`}>Startup</span>
            </a>
        </>
    )
}