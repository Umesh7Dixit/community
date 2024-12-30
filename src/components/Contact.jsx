
const Contact = () => {
  return (
    // <section id="contact" className="bg-gray-700 text-white py-20">
        <section id="contact" className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <form className="mt-8 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    // </section>
  );
};

export default Contact;
