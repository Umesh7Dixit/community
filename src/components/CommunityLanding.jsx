import { MessageCircle } from 'lucide-react';

const CommunityLanding = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[95vh] bg-gradient-to-br from-blue-400 to-blue-600">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 mb-8 shadow-xl">
            <div className="inline-block bg-green-500 rounded-full p-4 mb-4">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-red-500 mb-6">
              JOIN INDIA&apos;S LARGEST BUSINESS<br />COMMUNITY ON WHATSAPP
            </h1>
            <p className="text-gray-600 mb-8">
              Connect with like-minded people in a vibrant community! Join us, where ambitious youngsters,
              entrepreneurs, innovators, mentors, investors, leaders, and dynamic professionals come together to
              collaborate and grow.
            </p>
            <button className="bg-red-500 text-white px-8 py-3 rounded-md hover:bg-red-600 transition-all">
              JOIN NOW
            </button>
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <img src="/api/placeholder/400/300" alt="Community Event 1" className="rounded-lg shadow-md hover:shadow-xl transition-shadow" />
          <img src="/api/placeholder/400/300" alt="Community Event 2" className="rounded-lg shadow-md hover:shadow-xl transition-shadow" />
          <img src="/api/placeholder/400/300" alt="Community Event 3" className="rounded-lg shadow-md hover:shadow-xl transition-shadow" />
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold">Join now for ₹999/- (including GST) one-time and get instant access.</h2>
          <p className="mt-4 text-gray-600">You can also choose the quarterly fee plan for ₹999/- per quarter (incl. taxes) and<br />avail access to the accelerator program.</p>
          <p className="mt-4 font-semibold">BOTH PLANS INCLUDE HIGH-NETWORK OFFLINE EVENTS</p>
          <button className="mt-6 bg-red-500 text-white px-8 py-3 rounded-md hover:bg-red-600 transition-all">
            SELECT PLAN
          </button>
        </div>

        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* One-Time Plan */}
            <div className="bg-pink-50 p-8 rounded-xl shadow-lg">
              <div className="text-center mb-8">
                <div className="inline-block bg-red-500 text-white px-4 py-1 rounded-full text-sm mb-4">
                  MOST POPULAR
                </div>
                <h3 className="text-5xl font-bold">₹999</h3>
                <p className="mt-2 text-gray-600">One-Time Fee</p>
              </div>
              <Features plan="basic" />
              <button className="w-full mt-8 bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition-all">
                Select
              </button>
            </div>

            {/* Monthly Plan */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-5xl font-bold">₹999</h3>
                <p className="mt-2 text-gray-600">Monthly Fee</p>
                <p className="text-sm text-gray-500 mt-1">Valid for one month</p>
              </div>
              <Features plan="premium" />
              <button className="w-full mt-8 bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition-all">
                Select
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold mb-6">CREOVIBE IS YOUR TRUSTED BUSINESS PARTNER</h2>
            <p className="text-gray-600">
              Founded in 2013, we`&apos;`re 100% compliant ✅, leveraging cutting-edge<br />
              payment and web technologies 💻 to ensure security and efficiency 🌐.<br />
              Recognized by top organizations 🏆 and trusted by thousands ⭐️, we deliver<br />
              excellence and reliability every step of the way 👍 ✨.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-green-600 to-red-500 rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 items-center">
              <div className="bg-gradient-to-br from-green-700 to-green-900 h-64 md:h-full" />
              <div className="p-8 md:p-12 bg-pink-50">
                <h3 className="text-2xl font-semibold mb-2">The Membership You Truly Need</h3>
                <h2 className="text-4xl font-bold text-red-500 mb-6">A Community That<br />Stands by You</h2>
                <p className="text-gray-600 mb-8">
                  A community that`&apos;`s more than just connections—it`&apos;`s your
                  reliable companion. Join us for support, growth, and
                  opportunities. Access premium content, events, courses,
                  and build lasting relationships!
                </p>
                <button className="bg-red-500 text-white px-8 py-3 rounded-md hover:bg-red-600 transition-all">
                  JOIN NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Features = ({ plan }) => {
  const features = [
    'Paid-Only Members 🔒',
    'Daily Live Meetups',
    'WhatsApp Posting Allowed',
    'PAN India WhatsApp Groups',
    'City Specific WhatsApp Groups',
    'Industry Specific WhatsApp Groups',
    'Interest Specific WhatsApp Groups',
    'Member Profile On Portal',
    'Online/Offline Meets',
    'Business Lead Generation',
    'Cohort Networking 🌟',
    'Trending Discussions',
    'Hiring and Team Building',
    'Mentorship and Funding',
    'Webinars By Experts',
    'Referral & Loyalty Program',
    'Personal Dating Group (Optional) 💝',
    'Support Via Chat',
    '20+ Core Features ✨'
  ];

  const premiumFeatures = [...features, 'Accelerator Program 🚀'];

  return (
    <ul className="space-y-3">
      {(plan === 'premium' ? premiumFeatures : features).map((feature, index) => (
        <li key={index} className="flex items-center text-sm">
          <span className="mr-2 text-red-500">•</span>
          {feature}
        </li>
      ))}
    </ul>
  );
};

export default CommunityLanding;