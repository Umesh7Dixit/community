
// const Contact = () => {
//   return (
//     // <section id="contact" className="bg-gray-700 text-white py-20">
//         <section id="contact" className="py-16 px-6">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-2xl font-bold">Contact Us</h2>
//           <form className="mt-8 space-y-4">
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
//             />
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
//             />
//             <textarea
//               placeholder="Your Message"
//               className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
//               rows="4"
//             ></textarea>
//             <button
//               type="submit"
//               className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600 transition"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </section>
//     // </section>
//   );
// };

// export default Contact;




import  { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!formData.email.endsWith("@gmail.com")) {
      newErrors.email = "Email must be a Gmail address.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", message: "", phone: "" });
      setErrors({});
    }
  };

  return (
    <section id="contact" className="py-16 px-6 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
              rows="4"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
