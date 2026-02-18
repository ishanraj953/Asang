export default function Cards({ img, name, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative
      bg-white/1 border border-white/10 
      p-8 rounded-2xl 
      backdrop-blur-md 
      transition-all duration-300 
      hover:scale-105 hover:-translate-y-2 
      hover:shadow-2xl hover:shadow-cyan-500/30"
    >

      <div className="absolute inset-0 rounded-2xl 
        bg-cyan-500/10 opacity-0 
        group-hover:opacity-100 
        transition duration-300 blur-xl">
      </div>

      <div className="relative z-10 flex flex-col items-center gap-4">
        <img
          src={img}
          alt={name}
          className="transition duration-300 group-hover:rotate-6"
        />
        <p className="text-gray-300 font-medium">{name}</p>
      </div>

    </a>
  );
}
