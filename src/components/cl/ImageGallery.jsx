import image2 from '../../assets/image2.png';
import image5 from '../../assets/image5.png';
import image4 from '../../assets/image4.png';

const ImageGallery = () => {
  const images = [
    { src: image2, alt: "Community Event 1", title: "Networking Events", desc: "Connect with industry leaders" },
    { src: image5, alt: "Community Event 2", title: "Workshop Sessions", desc: "Learn from experts" },
    { src: image4, alt: "Community Event 3", title: "Community Meetups", desc: "Build lasting relationships" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Community Events
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Join our vibrant community and participate in exclusive events designed for growth and networking
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl h-64">
              {/* Image Container */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Gradient Decoration */}
      <div className="mt-16 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
    </section>
  );
};

export default ImageGallery;