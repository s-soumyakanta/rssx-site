import Image from "next/image"
import Link from "next/link";

const Logo = () => {
    return (
        <Link href="/">
            <div className="flex justify-center items-center space-x-1 bg-white rounded-md">
                <Image
                    src="/images/logo.webp"
                    alt="RSSX Logo"
                    height={100}
                    width={100}
                    className="w-8 h-8object-contain transition-transform duration-300 group-hover:scale-110"

                />
                <span className="text-lg font-bold text-center text-gray-900 tracking-tight group-hover:text-orange-600 transition-colors duration-300">
                    RSSX
                </span>
            </div>
        </Link>
    )
}

export default Logo;