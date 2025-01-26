import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { Check } from 'lucide-react';
import qrCodeImage from '../assets/paymentQR.jpg';  // Replace with your QR code image

const PaymentOrder = () => {

  const [showPayment, setShowPayment] = useState(false);

  const handleEnrollClick = () => {
    setShowPayment(true); // Show the payment QR code section when the user clicks 'Enroll'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col items-center justify-center">
      {/* Main Content */}
      {!showPayment && (
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-lg text-center mb-12">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">
            Join Our Community Today
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Become part of India’s largest business network and elevate your entrepreneurial journey.
          </p>
          <button
            onClick={handleEnrollClick}
            className="px-8 py-4 bg-green-500 text-white text-lg rounded-full hover:bg-green-600 transition"
          >
            Enroll Now
          </button>
        </div>
      )}

      {/* Payment QR Code Section */}
      {showPayment && (
        <div className="bg-white p-6 rounded-xl shadow-lg w-80 md:w-96 mb-12">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Complete Your Payment
          </h2>
          <p className="text-center text-gray-600 mb-6">
            To finalize your enrollment in the community, scan the QR code below and make the payment.
          </p>

          {/* QR Code Section */}
          <div className="flex justify-center mb-6">
            <img src={qrCodeImage} alt="Payment QR Code" className="w-48 h-48" />
          </div>

          {/* Payment Instructions */}
          <div className="text-center text-gray-600">
            <p className="mb-4">Once payment is complete, you'll gain immediate access to all community features.</p>
            <p className="text-sm text-gray-500">For any issues, contact our support team for assistance.</p>
          </div>
        </div>
      )}

      {/* Other Community Features or Sections */}
      {!showPayment && (
        <div className="container mx-auto text-center mt-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Join Our Community?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Exclusive Events</h3>
              <p className="text-gray-600">Access to industry-leading workshops, events, and meetups.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Network with Entrepreneurs</h3>
              <p className="text-gray-600">Meet ambitious professionals and form powerful collaborations.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Exclusive Resources</h3>
              <p className="text-gray-600">Gain access to premium content to boost your entrepreneurial journey.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentOrder;
