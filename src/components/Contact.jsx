

import  { useState } from "react";
import { Mail, User, Phone, MessageCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear specific error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email format is invalid.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (validate()) {
      try {
        // Simulating an API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "", phone: "" });
        setErrors({});
      } catch (error) {
        setSubmitStatus("error");
      }
    }
  };

  return (
    <section id="contact" className="py-16 px-6 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8 animate-fade-in">
          Contact Us
        </h2>
        <form 
          onSubmit={handleSubmit} 
          className="bg-white shadow-2xl rounded-xl p-8 space-y-6 transform transition-all hover:scale-[1.01]"
        >
          {/* Name Input */}
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full pl-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1 text-left">{errors.name}</p>}
          </div>

          {/* Phone Input */}
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full pl-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1 text-left">{errors.phone}</p>}
          </div>

          {/* Email Input */}
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full pl-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1 text-left">{errors.email}</p>}
          </div>

          {/* Optional Message Input */}
          <div className="relative">
            <MessageCircle className="absolute left-3 top-4 text-gray-400" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message Here (Optional)"
              className="w-full pl-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            ></textarea>
          </div>

          {/* Submit Button with Status */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Send Message
          </button>

          {/* Submit Status Feedback */}
          {submitStatus === "success" && (
            <div className="text-green-600 mt-4">
              Message sent successfully! We'll get back to you soon.
            </div>
          )}
          {submitStatus === "error" && (
            <div className="text-red-600 mt-4">
              Something went wrong. Please try again.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;