
const Features = () => {
  return (
    <section id="features" className="bg-gray-100 py-20">
            <section id="events" className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 bg-white rounded shadow">
              <h3 className="font-bold text-lg">Web Development Workshop</h3>
              <p className="text-gray-700 mt-2">Date: Jan 15, 2024</p>
              <p className="text-gray-700">Learn the latest in web tech.</p>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <h3 className="font-bold text-lg">Entrepreneurship Meet</h3>
              <p className="text-gray-700 mt-2">Date: Feb 20, 2024</p>
              <p className="text-gray-700">Network with top entrepreneurs.</p>
            </div>
          </div>
        </div>
      </section>

      <h2 className="text-3xl font-bold text-center mt-16 mb-8">Meet the Founder</h2>
      <div className="text-center bg-white shadow-lg p-6 rounded-lg mx-auto w-1/2">
        <h3 className="text-2xl font-bold">Harshit Pandey</h3>
        <p className="mt-2 text-gray-600">
          Founder of CreoVibe. Passionate about coding and creating impactful solutions.
        </p>
      </div>
    </section>
  );
};

export default Features;
