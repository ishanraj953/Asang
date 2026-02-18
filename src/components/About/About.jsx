import InnerDiv from "../Glassmorphism/InnerDiv";

export default function About() {
    return (
        <section id="about" className="bg-black h-full w-full">
            <div className="border border-white/20 bg-white/10 rounded-xl shadow-lg backdrop-blur-[10px] max-w-6xl mx-auto p-6 text-center">
            <p className="text-cyan-400 uppercase text-lg">
                Who We Are
            </p>
             <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-100">
                We Build Digital Experiences That Drive Growth
            </h2>
            <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg">
                We are a modern web development agency focused on building
                high-performance, visually stunning websites for ambitious brands.
                Our mission is to combine strategic design with scalable development
                to create digital solutions that deliver measurable results.
            </p>

                <div className="mt-12 grid md:grid-cols-2 gap-8 text-left ">
                    <InnerDiv title={"🎨 Modern Design"} desc={"Clean UI/UX built for engagement and conversions."}/>
                    <InnerDiv title={"⚡ Performance First"} desc={"Optimized websites that load fast and rank better."}/>
                    <InnerDiv title={"🚀 Growth-Focused Strategy"} desc={"We don’t just design websites — we build digital assets that drive measurable business results."}/>
                    <InnerDiv title={"🔒 Secure & Scalable"} desc={"Our solutions are built with clean architecture, ensuring security, scalability, and long-term growth."}/>

                </div>
            </div>
        </section>
    )
}