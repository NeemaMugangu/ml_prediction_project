import React, { useState, useEffect } from 'react';

const backgroundImages = [
  'https://placehold.co/1920x1080/e0f2fe/1e293b?text=Farm+View+1',
  'https://placehold.co/1920x1080/e0f2fe/1e293b?text=Farm+View+2',
  'https://placehold.co/1920x1080/e0f2fe/1e293b?text=Farm+View+3',
  'https://placehold.co/1920x1080/e0f2fe/1e293b?text=Farm+View+4',
];

const categories = [
  { name: 'Grains', img: 'https://www.thestatesman.com/wp-content/uploads/2017/08/1494359592-grain-getty-517.jpg' },
  { name: 'Vegetables', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8YKsXmmqf4bo39Onr0p-xFKXELCNIl3iaTA&s' },
  { name: 'Fruits', img: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJ1aXRzfGVufDB8fDB8fHww' },
  { name: 'Legumes', img: 'https://c8.alamy.com/comp/T4WBAC/fresh-peas-pods-at-the-farmers-market-leguminous-plants-T4WBAC.jpg' },
  { name: 'Root Crops', img: 'https://th.bing.com/th/id/OIP.B3wsLSLre1W_xJM9SGIkJAHaEw?w=311&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2' },
  { name: 'Herbs', img: 'https://tse3.mm.bing.net/th/id/OIP.LUlP0yZOx5jFhEFmKlyWJgHaFs?cb=thfvnext&pid=ImgDet&w=179&h=137&c=7&dpr=1.5&o=7&rm=3' },
  { name: 'Spices', img: 'https://tse4.mm.bing.net/th/id/OIP.8HTt1hPvuna3Q9wKZq44qwHaHa?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3' },
  { name: 'Oil Seeds', img: 'https://www.seedoilpress.com/wp-content/uploads/2018/02/common-oilseeds.jpg' },
  { name: 'Cereals', img: 'https://mesplaisirs.com/wp-content/uploads/2024/03/cereale.jpg' },
  { name: 'Tubers', img: 'https://www.nutritionadvance.com/wp-content/uploads/2023/03/handful-of-freshly-picked-tubers.jpg' },
  { name: 'Pulses', img: 'https://kj1bcdn.b-cdn.net/media/85535/daal.jpg' },
  { name: 'Leafy Greens', img: 'https://brainmd.com/blog/wp-content/uploads/Leafy-Greens-1.jpg' },
];

const initialProducts = [
  { name: 'Organic Tomatoes', desc: 'Farm-fresh, ripe tomatoes from local farms.', price: 'Ksh 80/kg', img: 'https://placehold.co/400x180/e0f2fe/1e293b?text=Fresh+Tomatoes' },
  { name: 'Sweet Potatoes', desc: 'High-quality, nutritious sweet potatoes.', price: 'Ksh 60/kg', img: 'https://placehold.co/400x180/e0f2fe/1e293b?text=Sweet+Potatoes' },
  { name: 'Farm Cabbage', desc: 'Crisp, fresh cabbage direct from the farm.', price: 'Ksh 40/head', img: 'https://placehold.co/400x180/e0f2fe/1e293b?text=Fresh+Cabbage' },
  { name: 'Maize Grains', desc: 'Bulk maize grains, perfect for milling.', price: 'Ksh 3,000/bag', img: 'https://placehold.co/400x180/e0f2fe/1e293b?text=Maize+Grains' },
  { name: 'Hass Avocados', desc: 'Creamy and delicious Hass avocados.', price: 'Ksh 30/piece', img: 'https://placehold.co/400x180/e0f2fe/1e293b?text=Avocado+Hass' },
  { name: 'Green Beans', desc: 'Freshly picked green beans.', price: 'Ksh 90/kg', img: 'https://placehold.co/400x180/e0f2fe/1e293b?text=Green+Beans' },
];

const Buyer = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    document.body.style.backgroundImage = `url('${backgroundImages[bgIndex]}')`;
    const interval = setInterval(() => {
      setBgIndex(i => (i + 1) % backgroundImages.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [bgIndex]);

  useEffect(() => {
    document.body.style.backgroundImage = `url('${backgroundImages[bgIndex]}')`;
  }, [bgIndex]);

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      const term = searchTerm.toLowerCase();
      const filtered = initialProducts.filter(
        p => p.name.toLowerCase().includes(term) || p.desc.toLowerCase().includes(term)
      );
      setProducts(filtered);
    } else if (e.key === 'Backspace' && searchTerm.length === 1) {
      setProducts(initialProducts);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#e0f2fe] text-[#1e293b] font-inter">
      {/* Header section - Inspired by Glovo's layout */}
      <header className="bg-yellow-400 py-4 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-3xl font-bold text-gray-800">AgriPredict AI</h1>
            <div className="hidden md:flex items-center space-x-1 text-gray-700 cursor-pointer hover:text-gray-900 transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Delivering to Nairobi, Kenya</span>
            </div>
          </div>
          <div className="flex-1 mx-4 max-w-xl">
            <div className="relative">
              <input
                type="text"
                id="buyer-search-input"
                placeholder="What produce are you looking for?"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 text-sm"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                onKeyDown={handleSearch}
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="/" className="px-4 py-2 bg-green-600 text-white font-semibold rounded-full shadow-md hover:bg-green-700 transition-colors duration-200">Log Out</a>
          </div>
        </div>
      </header>

      {/* Main content area with overlay for readability */}
      <main className="flex-grow flex justify-center items-start">
        <div className="content-overlay p-6 sm:p-8">
          {/* Top Categories Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Top Produce Categories </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
              {categories.map(cat => (
                <div className="category-item" key={cat.name}>
                  <div className="category-image-wrapper">
                    <img src={cat.img} alt={cat.name} className="category-image" />
                  </div>
                  <p className="font-medium text-gray-700">{cat.name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Listings Section (Example) */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Produce Listings</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, idx) => (
                <div className="product-card" key={idx} style={{ display: 'block' }}>
                  <img src={product.img} alt={product.name} className="product-image" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{product.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-green-600 font-bold text-lg">{product.price}</span>
                      <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors duration-200 text-sm">View Details</button>
                    </div>
                  </div>
                </div>
              ))}
              {products.length === 0 && (
                <div className="col-span-full text-center text-gray-500 text-lg">No products found for: {searchTerm}</div>
              )}
            </div>
          </section>
        </div>
      </main>

      {/* Footer section (optional, but good practice) */}
      <footer className="bg-gray-800 text-white py-4 mt-8">
        <div className="container mx-auto px-4 text-center text-sm">
          &copy; 2025 AgriPredict AI. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Buyer;
