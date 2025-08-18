import Logo from "@/components/Logo"
import { FaGithub } from "react-icons/fa"

const Navbar = () => {
    return (
        <nav className="flex justify-between h-1/6 ">
            <div>
                <Logo />
            </div>

            <div className="flex justify-center items-center space-x-2">
                <div><FaGithub /></div>
                <div>Blog</div>
            </div>
        </nav>
    )
}

export default Navbar