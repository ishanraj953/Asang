import Cards from "../Glassmorphism/Cards";
import web from "../../assets/web.png";
import wanderlust from "../../assets/Wanderlust.png";
import gurukul from "../../assets/Gurukul.png";

export default function Project() {
  return (
    <section id="project" className="bg-black w-full p-8">

      <div className="max-w-6xl mx-auto px-4 bg-white/4 pb-4 border border-white/10 p-2 shadow-lg backdrop-blur-md rounded-xl cursor-pointer">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-400">
          Projects
        </h2><br />

        <div className="m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
          <Cards img={web} url={"https://github.com/ishanraj953/Losers.git"} name={"!Losers"} />
          <Cards img={wanderlust} url={"https://wonderlust-gooa.onrender.com/listings"} name={"Wanderlust"} />
          <Cards img={gurukul} url={"https://github.com/ishanraj953/Gurukul.git"} name={"Gurukul"} />
        </div>

      </div>

    </section>
  );
}
