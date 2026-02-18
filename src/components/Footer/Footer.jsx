export default function Footer() {
  return (
    <section className="bg-gray-950 border-t border-gray-700 text-white py-10 w-full">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="flex flex-col gap-4">
          <a href="/" className="flex items-center">
            <h2 className="text-5xl font-extrabold">
              <span className="text-cyan-400">Asang</span>
            </h2>
          </a>

          <div className="text-gray-400 text-sm leading-relaxed">
            <p>Take your Business to next level.</p>
            <p>Create your online business.</p>
          </div>

          <div className="flex gap-4 mt-2">
            <a href="https://www.instagram.com/ishanraj953" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram text-2xl text-gray-400 hover:text-pink-500 transition"></i>
            </a>

            <a href="https://www.linkedin.com/in/ishanraj953" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin text-2xl text-gray-400 hover:text-blue-500 transition"></i>
            </a>

            <a href="https://x.com/ishanraj953" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-x-twitter text-2xl text-gray-400 hover:text-sky-400 transition"></i>
            </a>

            <a href="https://facebook.com/ishanraj953" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook text-2xl text-gray-400 hover:text-blue-600 transition"></i>
            </a>
          </div>
        </div>

        {/* Pages */}
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">Pages</h2>

          <a className="text-gray-400 hover:text-white transition" href="#home">Home</a>
          <a className="text-gray-400 hover:text-white transition" href="#about">About</a>
          <a className="text-gray-400 hover:text-white transition" href="#tech">Technologies</a>
          <a className="text-gray-400 hover:text-white transition" href="#project">Project</a>
          <a className="text-gray-400 hover:text-white transition" href="#pricing">Pricing</a>
          <a className="text-gray-400 hover:text-white transition" href="#contact">Contact Us</a>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">Be in Touch</h2>

          <p className="text-gray-400">📞 9470818932</p>
          <p className="text-gray-400">📞 9113327895</p>
          <p className="text-gray-400">✉️ rajishan950@gmail.com</p>
          <p className="text-gray-400">✉️ ayush.connects4u@gmail.com</p>

          <a href="/contact">
            <button className="text-white bg-purple-400 w-52 p-1 rounded-lg cursor-pointer hover:bg-purple-500">
              Contact Us
            </button>
          </a>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        &copy; 2024 Crimson Chronicle. All rights reserved.
      </div>
    </section>
  );
}
