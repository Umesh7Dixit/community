// const Plans = () => {
//     return (
//       <div>
//         <section className="py-16 bg-gradient-to-r from-pink-50 to-blue-50">
//           <div className="text-center mb-12">
//             <h2 className="text-2xl font-semibold">Join now for ₹150/- (including GST) one-time and get instant access.</h2>
//             <p className="mt-4 text-gray-600">
//               Get the best value for a minimal cost. Avail the benefits now!
//             </p>
//             <p className="mt-4 font-semibold">This plan includes exclusive features and high-network offline events.</p>
//             <button className="mt-6 bg-red-500 text-white px-8 py-3 rounded-md hover:bg-red-600 transition-all">
//               SELECT PLAN
//             </button>
//           </div>
  
//           <div className="max-w-6xl mx-auto px-4">
//             <div className="bg-pink-50 p-8 rounded-xl shadow-lg">
//               <div className="text-center mb-8">
//                 <h3 className="text-5xl font-bold">₹150</h3>
//                 <p className="mt-2 text-gray-600">One-Time Fee</p>
//               </div>
//               <div className="mb-4">
//                 <ul className="list-disc pl-6">
//                   <li>Access to exclusive events</li>
//                   <li>Instant entry to the accelerator program</li>
//                   <li>Community networking opportunities</li>
//                   <li>Special discounted offers for next upgrades</li>
//                 </ul>
//               </div>
              
//               <div className="flex justify-center items-center">
//   <button className="w-60 mt-8 bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition-all">
//     Enroll
//   </button>
// </div>

//             </div>
//           </div>
//         </section>
//       </div>
//     );
//   };
  
//   export default Plans;
  


// const Plans = () => {
//     return (
//       <div>
//         <section className="py-16 bg-gradient-to-r from-pink-50 to-blue-100">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-semibold text-gray-800">
//               Join now for ₹150/- (including GST) one-time and get instant access.
//             </h2>
//             <p className="mt-4 text-lg text-gray-600">
//               Unlock the best value with minimal cost. Avail exclusive benefits today!
//             </p>
//             <p className="mt-4 font-semibold text-xl text-gray-700">
//               This plan includes exclusive features and high-network offline events.
//             </p>
//             <div className="mt-6">
//               <button className="px-8 py-3 bg-red-500 text-white rounded-full text-lg font-semibold hover:bg-red-600 transition-all">
//                 SELECT PLAN
//               </button>
//             </div>
//           </div>
  
//           <div className="max-w-4xl mx-auto px-4">
//             <div className="bg-white p-8 rounded-2xl shadow-xl overflow-hidden">
//               <div className="text-center mb-8">
//                 <h3 className="text-6xl font-bold text-gray-800">₹150</h3>
//                 <p className="mt-2 text-lg text-gray-600">One-Time Fee</p>
//               </div>
//               <div className="mb-6">
//                 <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
//                   <li>Access to exclusive events</li>
//                   <li>Instant entry to the accelerator program</li>
//                   <li>Community networking opportunities</li>
//                   <li>Special discounted offers for next upgrades</li>
//                 </ul>
//               </div>
              
//               <div className="flex justify-center items-center">
//                 <button className="w-60 mt-8 bg-red-500 text-white py-3 rounded-full text-lg font-semibold hover:bg-red-600 transition-all">
//                   Enroll Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     );
//   };
  
//   export default Plans;
  

import { Check } from 'lucide-react';

const Plans = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">Special Offer</span>
          <h2 className="mt-3 text-4xl font-bold text-gray-900 mb-4">
            Join now for ₹150/- 
            <span className="text-gray-600 text-2xl">(incl. GST)</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get instant access to exclusive features and high-network offline events.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            {/* Popular badge */}
            <div className="absolute top-6 right-6">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Limited Time
              </span>
            </div>

            <div className="p-8">
              {/* Price section */}
              <div className="text-center mb-8">
                <h3 className="text-6xl font-bold text-gray-900">₹150</h3>
                <p className="mt-2 text-lg text-gray-600">One-Time Payment</p>
              </div>

              {/* Features list */}
              <div className="space-y-4 mb-8">
                {[
                  'Access to exclusive events',
                  'Instant entry to accelerator program',
                  'Community networking opportunities',
                  'Special discounted offers for upgrades'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-purple-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 px-8 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                  Enroll Now
                </button>
                <p className="mt-4 text-sm text-gray-500">
                  Instant access after payment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plans;