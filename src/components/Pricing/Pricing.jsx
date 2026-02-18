export default function Pricing() {
    return (
        <section id="pricing" className="bg-black w-full min-h-full flex justify-center items-center">
            
            <div className="max-w-6xl w-full text-center mt-24">

                <h2 className="text-white text-4xl font-semibold mb-12">
                    Our <span className="text-cyan-400">Pricing</span>
                </h2>

                <div className="flex flex-col md:flex-row gap-8 justify-center">

                    <div className="bg-white/5 border border-white/10 backdrop-blur-lg 
                                    rounded-2xl p-8 flex-1 text-white 
                                    hover:border-cyan-400 transition duration-300">

                        <h3 className="text-2xl font-semibold mb-4">Basic</h3>
                        <p className="text-4xl font-bold mb-6 text-cyan-400">₹3999</p>

                        <ul className="text-white/70 flex flex-col gap-3 mb-8">
                            <li>✔ 1 Website</li>
                            <li>✔ Basic Support</li>
                            <li>✔ Responsive Design</li>
                            <li>✔ 7 Days Delivery</li>
                            <li>✖ No Custom Features</li>
                        </ul>

                    </div>

                    <div className="bg-white/5 border border-cyan-400 backdrop-blur-lg 
                                    rounded-2xl p-8 flex-1 text-white 
                                    scale-105">

                        <h3 className="text-2xl font-semibold mb-4">Standard</h3>
                        <p className="text-4xl font-bold mb-6 text-cyan-400">₹5999</p>

                        <ul className="text-white/70 flex flex-col gap-3 mb-8">
                            <li>✔ 3-4 Pages Website</li>
                            <li>✔ Priority Support</li>
                            <li>✔ 1 Month Support</li>
                            <li>✔ Responsive Design</li>
                            <li>✔ Custom Features</li>
                        </ul>

                    </div>

                    <div className="bg-white/5 border border-white/10 backdrop-blur-lg 
                                    rounded-2xl p-8 flex-1 text-white 
                                    hover:border-cyan-400 transition duration-300">

                        <h3 className="text-2xl font-semibold mb-4">Premium</h3>
                        <p className="text-4xl font-bold mb-6 text-cyan-400">₹7999</p>

                        <ul className="text-white/70 flex flex-col gap-3">
                            <li>✔ Unlimited Pages</li>
                            <li>✔ 6 Months Support</li>
                            <li>✔ Full Custom Design</li>
                            <li>✔ Domain Hosting</li>
                            <li>✔ SEO Optimization</li>
                        </ul>

                    </div>

                </div>

            </div>
        </section>
    )
}
