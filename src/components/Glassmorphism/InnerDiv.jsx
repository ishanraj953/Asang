export default function InnerDiv({title,desc}) {
    return (
        <div className="bg-white/5 border border-white/10 shadow-lg backdrop-blur-md p-4 rounded-xl cursor-pointer">
            <h3 className="text-gray-100 font-semibold text-xl">{title}</h3>
            <p className="mt-3 text-gray-300">{desc}</p>
        </div>
    )
}