import Image from "next/image"

const Logo = () => {
    return (
        <div className="flex justify-center items-center space-x-1 bg-white rounded-md">
            <Image
                src="/images/logo.webp"
                alt="RSSX Logo"
                height={100}
                width={100}
                className="w-8 h-8 rounded-md"

            />
            <p className="px-1 text-sm">RSSX</p>
        </div>
    )
}

export default Logo