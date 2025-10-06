import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
  };

  return (
    <div id="contact" className="max-w-screen-2xl container mx-auto px-4 mt-16 md:px-20 my-20 scroll-mt-24">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-6">
        Get In Touch
        <span className="block w-40 h-1 bg-cyan-400 mx-auto mt-3 rounded"></span>
      </h1>

      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
        I'm always open to discussing new opportunities, collaborations, and innovative projects.
        Let's connect and build something amazing together!
      </p>

      {/* Contact Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-6xl mx-auto">
        {/* Left - Contact Info */}
        <div className="space-y-6">
          {/** Card Component */}
          <div className="flex items-center gap-4 bg-[#111] p-5 rounded-xl border border-gray-800 hover:translate-y-1 hover:shadow-lg transition-transform duration-200">
            <div className="bg-green-600 p-3 rounded-full text-white text-xl">📞</div>
            <div>
              <h3 className="text-white font-bold">Phone</h3>
              <p className="text-gray-400">+91-6398908143</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-[#111] p-5 rounded-xl border border-gray-800 hover:translate-y-1 hover:shadow-lg transition-transform duration-200">
            <div className="bg-blue-600 p-3 rounded-full text-white text-xl">📧</div>
            <div>
              <h3 className="text-white font-bold">Email</h3>
              <p className="text-gray-400">suraj26976@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-[#111] p-5 rounded-xl border border-gray-800 hover:translate-y-1 hover:shadow-lg transition-transform duration-200">
            <div className="bg-purple-600 p-3 rounded-full text-white text-xl">💼</div>
            <div>
              <h3 className="text-white font-bold">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/suraj-kumar-48868a351/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:underline"
              >
                Connect with me
              </a>
            </div>
          </div>
        </div>

        {/* Right - Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#111] p-8 rounded-xl border border-gray-800 shadow-lg space-y-6"
        >
          <h3 className="text-xl font-semibold text-white">Send me a message</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="sr-only">Full Name</label>
            <input
              type="text"
              placeholder="Your full name"
              required
              className="w-full p-3 rounded-lg bg-black text-white border border-gray-700 focus:outline-none focus:border-green-500"
            />

            <label className="sr-only">Email</label>
            <input
              type="email"
              placeholder="your.email@example.com"
              required
              className="w-full p-3 rounded-lg bg-black text-white border border-gray-700 focus:outline-none focus:border-green-500"
            />
          </div>

          <label className="sr-only">Subject</label>
          <input
            type="text"
            placeholder="What's this about?"
            required
            className="w-full p-3 rounded-lg bg-black text-white border border-gray-700 focus:outline-none focus:border-green-500"
          />

          <label className="sr-only">Message</label>
          <textarea
            rows="4"
            placeholder="Tell me about your project or idea..."
            required
            className="w-full p-3 rounded-lg bg-black text-white border border-gray-700 focus:outline-none focus:border-green-500"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-500 hover:scale-105 transition-transform duration-200"
          >
            🚀 Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
