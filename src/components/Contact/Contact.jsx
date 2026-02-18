import img2 from '../../assets/img2.png'

export default function Contact() {
    return (
        <section id='contact' className="bg-black min-h-screen w-full h-full flex justify-center items-center">
            <div className="bg-white/5 border w-6xl border-white/10 backdrop-blur-lg h-fit flex flex-row rounded-2xl p-8">
                <div className='w-1/2 relative flex justify-center'>
                    <div className='bg-cyan-500/20 w-3/4 blur-3xl ml-10 absolute rounded-full inset-0'></div>
                    <img src={img2} alt="img" className='relative h-fit w-fit z-10'/>
                </div>
                <div className='w-1/2 flex flex-col justify-center px-8'>
    <h2 className='text-white text-4xl font-semibold mb-6'>
        Contact <span className='text-cyan-400'>Us</span> 
    </h2>

    <form className="flex flex-col gap-5">

        <div className="flex flex-col">
            <label className="text-white/70 mb-2 text-sm">Email</label>
            <input 
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border border-white/20 
                text-white px-4 py-3 rounded-xl 
                focus:outline-none focus:border-cyan-400 
                transition duration-300"
            />
        </div>

        <div className="flex flex-col">
            <label className="text-white/70 mb-2 text-sm">Phone</label>
            <input 
                type="tel"
                placeholder="Enter your phone number"
                className="bg-white/10 border border-white/20 
                text-white px-4 py-3 rounded-xl 
                focus:outline-none focus:border-cyan-400 
                transition duration-300"
            />
        </div>

        <div className="flex flex-col">
            <label className="text-white/70 mb-2 text-sm">Query</label>
            <textarea 
                rows="3"
                placeholder="Enter your Query"
                className="bg-white/10 border border-white/20 
                text-white px-4 py-3 rounded-xl 
                focus:outline-none focus:border-cyan-400 
                transition duration-300 resize-none"
            ></textarea>
        </div>

        <button 
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-400 
            text-black font-semibold py-3 rounded-xl 
            transition duration-300 mt-2"
        >
            Send Message
        </button>

    </form>
</div>

            </div>
        </section>
    )
}