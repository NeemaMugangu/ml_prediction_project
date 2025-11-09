import React, { useEffect, useState } from "react";

const AgriPredictAI = () => {
  const backgroundImages = [
    "https://images.theconversation.com/files/408874/original/file-20210629-28-rtys0b.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
    "https://t3.ftcdn.net/jpg/07/27/02/86/360_F_727028692_V8FBsEnO5X1pmjDkgUFwQh32BVlIm0q2.jpg",
    "https://cdn.pixabay.com/photo/2022/09/04/08/37/field-7431115_1280.jpg",
    "https://d1g9yur4m4naub.cloudfront.net/images/Article_Images/ImageForArticle_775_4464239514480328507.jpg-620x480.jpg",
    "https://newscentral.africa/wp-content/uploads/Rice-farming-in-Nigeria-1024x575.jpeg",
    "https://images.rawpixel.com/image_social_landscape/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAzL3N0YXJ0dXBpbWFnZXNfcGhvdG9fb2ZfYV9ibGFja19zb3V0aF9hZnJpY2FuX3dvbWFuX2Zhcm1lcnNfc21pbF80YTFhOWFmYi1mMzE0LTRkZjktYWI0YS03ODNhN2FhZDkwNzVfMS5qcGc.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const heroSection = document.getElementById("hero-section");
    if (heroSection) {
      heroSection.style.backgroundImage = `url('${backgroundImages[0]}')`;
    }

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % backgroundImages.length;
        if (heroSection) {
          heroSection.style.backgroundImage = `url('${backgroundImages[newIndex]}')`;
        }
        return newIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages]);

  return (
    <>
      {/* Custom Styles (same as your HTML <style> section) */}
      <style>{`
        body {
          font-family: 'Inter', sans-serif;
          background-color: #f8fafc;
          color: #1e293b;
          scroll-behavior: smooth;
        }

        .hero-section {
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          transition: background-image 1.5s ease-in-out;
        }

        .hero-text-shadow {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .gallery-item {
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          min-height: 250px;
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
                      0 2px 4px -1px rgba(0, 0, 0, 0.06);
          position: relative;
        }

        .gallery-item-text {
          background: rgba(0, 0, 0, 0.5);
          padding: 0.75rem;
          border-radius: 0 0 0.5rem 0.5rem;
        }
      `}</style>

      {/* Tailwind Content */}
      <div className="bg-slate-50 text-slate-800 font-inter scroll-smooth">
        {/* Header */}
        <header className="bg-green-800 shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">AgriPredict AI</h1>
            <div className="flex items-center space-x-4">
              <a
                href="login.html"
                className="text-white hover:text-green-200 transition-colors duration-200 font-medium"
              >
                Log In
              </a>
              <a
                href="register.html"
                className="text-white hover:text-green-200 transition-colors duration-200 font-medium"
              >
                Registration
              </a>
              <a
                href="#about-us-section"
                className="text-white hover:text-green-200 transition-colors duration-200 font-medium"
              >
                About Us
              </a>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section
          id="hero-section"
          className="hero-section text-white flex items-center justify-center min-h-screen py-20 px-4"
        >
          <div className="hero-overlay inset-0">
            <div className="relative z-10 text-center">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold hero-text-shadow leading-tight mb-4">
                Go for Growth. Grow with Confidence.
              </h2>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                Enhancing farmer-buyer efficiency through agricultural price
                prediction using machine learning.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-12">
              How We Help You Succeed
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Card 1 */}
              <div className="p-6 bg-gray-50 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://placehold.co/100x100/34d399/ffffff?text=Price"
                  alt="Price Prediction Icon"
                  className="mx-auto mb-4 rounded-full"
                />
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  Accurate Price Prediction
                </h3>
                <p className="text-gray-600">
                  Our advanced machine learning models analyze real-time market
                  data, historical trends, and seasonal factors to provide you
                  with the most accurate price predictions for your agricultural
                  produce. This empowers you to make informed decisions and
                  secure the best possible returns on your harvest.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-6 bg-gray-50 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://placehold.co/100x100/34d399/ffffff?text=Connect"
                  alt="Marketplace Icon"
                  className="mx-auto mb-4 rounded-full"
                />
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  Connect with Buyers
                </h3>
                <p className="text-gray-600">
                  Say goodbye to middlemen. Our platform is a vibrant
                  marketplace where you can connect directly with verified
                  buyers. This ensures transparency, reduces transaction costs,
                  and allows you to build sustainable, long-term relationships
                  for your business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-12">
              A Glimpse of Produce
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                {
                  img: "https://gardenerspath.com/wp-content/uploads/2020/01/Avocado-Fruit-on-Branch-768x512.jpg",
                  text: "Fresh Avocados",
                },
                {
                  img: "https://img.freepik.com/premium-photo/basket-newly-harvested-coffee-beans-coffee-farm_665346-15183.jpg",
                  text: "Quality Coffee Beans",
                },
                {
                  img: "https://farmingfarmersfarms.com/wp-content/uploads/2023/09/tomato-farming-in-kenya.jpg",
                  text: "Ripe Tomatoes",
                },
                {
                  img: "https://farmersvoice.ng/wp-content/uploads/2023/05/Maize-Farming-Farmsquare.jpg",
                  text: "Maize Harvest",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="gallery-item flex items-end"
                  style={{ backgroundImage: `url(${item.img})` }}
                >
                  <p className="gallery-item-text w-full text-white font-semibold">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about-us-section" className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold text-center text-green-700 mb-8">
              About AgriPredict AI
            </h2>
            <div className="prose max-w-none">
              <p>
                AgriPredict AI is dedicated to empowering farmers and buyers by
                bridging the gap in agricultural market information. Our
                platform uses advanced machine learning models to provide
                accurate price predictions for a wide range of agricultural
                produce.
              </p>

              <h3 className="text-2xl font-bold text-green-700 mt-8 mb-4">
                Our Mission
              </h3>
              <p>
                Our mission is to create a more stable and prosperous ecosystem
                for the agricultural sector. We strive to reduce market
                inefficiencies, minimize food waste, and provide tools that
                enable fair and transparent trading.
              </p>

              <h3 className="text-2xl font-bold text-green-700 mt-8 mb-4">
                Our Vision
              </h3>
              <p>
                We envision a future where every farmer has access to real-time,
                accurate market data, eliminating the reliance on informal and
                opaque pricing mechanisms.
              </p>

              <h3 className="text-2xl font-bold text-green-700 mt-8 mb-4">
                Our Commitment
              </h3>
              <p>
                We are committed to ethical data practices, ensuring user
                privacy through anonymization and secure storage. Transparency
                in our data collection and processing is a core principle.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-300 py-6">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2025 AgriPredict AI. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AgriPredictAI;
