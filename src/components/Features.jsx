
const Features = () => {
  return (
    <section id="features" className="bg-gray-100 py-20">
      <h2 className="text-3xl font-bold text-center mb-8">Upcoming Events</h2>
      <div className="flex justify-center space-x-6">
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-xl font-bold">New Year Hackathon</h3>
          <p className="mt-2 text-gray-600">Kickstart the new year with an international hackathon for creators.</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-xl font-bold">Entrepreneur Online Meetup</h3>
          <p className="mt-2 text-gray-600">Connect with global entrepreneurs in a virtual meetup.</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-xl font-bold">Launch Event</h3>
          <p className="mt-2 text-gray-600">Celebrate the launch of new initiatives and services.</p>
        </div>
      </div>

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
