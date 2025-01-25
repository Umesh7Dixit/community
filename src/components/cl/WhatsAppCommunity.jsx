import  { useEffect, useState } from 'react';
// import { MessageCircle } from 'lucide-react';

const WhatsAppCommunity = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative h-[95vh] overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500">
      {/* Interactive background elements */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] animate-pulse"
        style={{
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
        }}
      />
      
      {/* Animated orbs */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-yellow-300/20 rounded-full blur-3xl animate-float"
          style={{
            transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-float-delay"
          style={{
            transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-400/20 rounded-full blur-3xl animate-float-slow"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
          }}
        />
      </div>

      {/* Overlay with noise texture */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          opacity: 0.015
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="max-w-4xl w-full">
          {/* Floating WhatsApp icon */}
          <div className="relative -top-12 mb-4">
            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
              <div className="relative group">
                <div className="absolute inset-0 bg-green-500 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative bg-green-500 rounded-full p-6 shadow-2xl hover:scale-110 transition-all duration-500 cursor-pointer">
                  <img
                    src="https://img.icons8.com/color/48/000000/whatsapp.png"
                    alt="whatsapp"
                    className="w-16 h-16 animate-bounce-slow"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Card content with glassmorphism */}
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
            <div className="space-y-8 text-center">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent animate-gradient">
                INDIA&apos;S LARGEST BUSINESS
                <br />
                COMMUNITY ON WHATSAPP
              </h1>
              
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                Connect with like-minded people in a vibrant community! Join us, where ambitious youngsters,
                entrepreneurs, innovators, mentors, investors, leaders, and dynamic professionals come together to
                collaborate and grow.
              </p>

              <a
                // href="https://api.whatsapp.com/send/?phone=918879355057&text&type=phone_number&app_absent=0"
                   href="https://api.whatsapp.com/send/?phone=919119938268&text&type=phone_number&app_absent=0"
                // href="https://api.whatsapp.com/send/?phone=919119938268&text=Harshit+Pandey&type=phone_number&app_absent=0"
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-lg font-semibold py-4 px-8 rounded-full transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
                <img
                  src="https://img.icons8.com/color/48/000000/whatsapp.png"
                  alt="whatsapp"
                  className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                />
                <span className="relative">JOIN NOW</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default WhatsAppCommunity;