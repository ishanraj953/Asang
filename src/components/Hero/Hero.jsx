import image from '../../assets/img.png'

export default function Hero (){
    return (
        <section id='home' className="bg-black w-full h-[95vh] flex min-h-screen items-center">
            <div className='max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between'>
            <div className='w-1/2'>
                <div className='text-red-400  px-3 py-1.5 inline-flex items-center font-bold rounded-2xl border border-white/20 bg-white/6
                p-2 shadow-lg backdrop-blur-[10px] gap-2'>
                    <span className='w-2 h-2 bg-red-500 rounded-full animate-pulse'></span><div>We are Live</div>
                </div>
                <div>
                <br />
                    <div>
                        <h1 className='text-white text-5xl font-semibold'>Building Exceptional <span className='text-cyan-500'>Website</span> for Your Business</h1> <br />
                        <p className='text-white/80'>We help startups and businesses establish powerful online presence through strategic design, clean code, and scalable architecture.</p>
                    </div>
                </div> <br />
                <div className='inline-flex gap-4'>
                    <a href="#about" className='text-white hover:bg-cyan-500 p-2 bg-cyan-600 cursor-pointer border border-cyan-500 rounded'>Get Started</a>
                    <a href='#project' className='text-white p-2 px-3 cursor-pointer hover:bg-cyan-500/20 rounded border border-white/20 bg-white/6 shadow-lg backdrop-blur-[10px]'>Projects</a>
                </div>
            </div>

            <div className="relative w-1/2 flex justify-center">

             <div className="w-3/4 ml-22 absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full"></div>

            <img
                src={image}
                alt="avatar"
                className="relative h-fit w-fit z-10 animate-[float_4s_ease-in-out_infinite]"
            />

            </div>
            </div>
        </section>
    )
}