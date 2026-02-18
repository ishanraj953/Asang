export default function TechStack({link,img}) {
    return (
        <div className="w-fit h-fit flex justify-center border border-white/20
        hover:border-cyan-800 shadow-lg px-3 py-2 rounded-3xl mt-4 hover:-translate-y-3
         hover:shadow-2xl hover:shadow-cyan-500/30  transition-all duration-300 
        hover:scale-100">
            <a href={link}
            target="_blank"
            rel="noopener noreferrer"
            >
            <img src={img} className="h-fit w-fit"/>
            </a>
        </div>
    )
}