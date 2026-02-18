export default function Navbar() {
    return (
        <nav className=" w-full bg-black h-16 top-0 z-50 sticky">
            <div className="flex items-center justify-between px-6 py-2">
            <div className="text-4xl text-sens-serif ml-8 font-extrabold text-cyan-400">Asang</div>
            <div className="flex gap-5">
                <a href="#home" className="text-gray-300 hover:text-cyan-400 transition duration-300">Home</a>
                <a href="#about" className="text-gray-300 hover:text-cyan-400 transition duration-300">About</a>
                <a href="#tech" className="text-gray-300 hover:text-cyan-400 transition duration-300">Technologies</a>
                <a href="#project" className="text-gray-300 hover:text-cyan-400 transition duration-300">Project</a>
                <a href="#pricing" className="text-gray-300 hover:text-cyan-400 transition duration-300">Pricing</a>
                <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition duration-300">Contact</a>
            </div>
            </div>
        </nav> 
    )
}