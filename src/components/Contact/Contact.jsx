import { useState } from 'react';
import img2 from '../../assets/img2.png'
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
    const [state, handleSubmit] = useForm("mkovzoll");
    const [showAlert, setShowAlert] = useState(true);

    const onSubmit = (e) => {
        e.prventDefault();
         if (!state.errors && state.succeeded) {
            e.target.reset();
        }
    }

    return (
        <section id='contact' className="bg-black min-h-screen w-full h-full flex flex-col justify-center items-center">
            {state.succeeded && showAlert && (
                <div className="bg-green-500/20 border border-green-500 text-green-400 p-3 rounded-xl mb-4">
                    <span>Message sent successfully 🚀</span>
                    <button onClick={() => setShowAlert(false)} className="ml-4 border p-1 rounded px-2 text-gray-100 cursor-pointer hover:text-green-500 transition">X</button>
                </div>
            )}

            <div className="bg-white/5 border w-6xl border-white/10 backdrop-blur-lg h-fit flex flex-row rounded-2xl p-8">
                <div className='w-1/2 relative flex justify-center'>
                    <div className='bg-cyan-500/20 w-3/4 blur-3xl ml-10 absolute rounded-full inset-0'></div>
                    <img src={img2} alt="img" className='relative h-fit w-fit z-10'/>
                </div>
                <div className='w-1/2 flex flex-col justify-center px-8'>
            <h2 className='text-white text-4xl font-semibold mb-6'>
                Contact <span className='text-cyan-400'>Us</span> 
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                <div className="flex flex-col">
                    <label className="text-white/70 mb-2 text-sm">Email</label>
            <input 
                type="email"
                name='email'
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
                name='phone'
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
                name='message'
                placeholder="Enter your Query"
                className="bg-white/10 border border-white/20 
                text-white px-4 py-3 rounded-xl 
                focus:outline-none focus:border-cyan-400 
                transition duration-300 resize-none"
            ></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <button 
             type="submit"
             onClick={() => setShowAlert(true)}
             disabled={state.submitting}
            className="bg-cyan-500 hover:bg-cyan-400 
            text-black font-semibold py-3 rounded-xl cursor-pointer
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