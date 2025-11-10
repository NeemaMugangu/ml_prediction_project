import React, { useState } from 'react';

const initialProduceListings = [
  { id: 1, name: "Potatoes", category: "Root Crops", quantity: "500 kg", price: "Ksh 45", status: "Available" },
  { id: 2, name: "Onions", category: "Vegetables", quantity: "20 bags", price: "Ksh 1,200", status: "Available" },
];
const initialOrderListings = [
  { id: "order-1", orderId: "#AGR001", produce: "Organic Tomatoes", quantity: "10 kg", totalPrice: "Ksh 800", buyer: "John Doe", status: "Pending" },
  { id: "order-2", orderId: "#AGR002", produce: "Maize Grains", quantity: "2 bags", totalPrice: "Ksh 6,000", buyer: "Jane Smith", status: "Accepted" },
];
const initialSalesHistory = [
  { id: "sale-1", saleId: "#SALE001", produce: "Sweet Potatoes", quantity: "50 kg", totalAmount: "Ksh 3,000", buyer: "Alice Johnson", date: "2025-07-28" },
  { id: "sale-2", saleId: "#SALE002", produce: "Fresh Cabbage", quantity: "10 heads", totalAmount: "Ksh 400", buyer: "Bob Williams", date: "2025-07-25" },
];

const Farmer = () => {
  const [produceListings, setProduceListings] = useState(initialProduceListings);
  const [orderListings, setOrderListings] = useState(initialOrderListings);
  const [salesHistory, setSalesHistory] = useState(initialSalesHistory);
  const [dialog, setDialog] = useState(null);

  // Add Produce Form State
  const [newProduce, setNewProduce] = useState({
    name: '',
    category: '',
    quantity: '',
    price: '',
    description: '',
  });

  // Dashboard metrics
  const activeListings = produceListings.length;
  const pendingOrders = orderListings.filter(o => o.status === 'Pending').length;
  const totalSales = salesHistory.reduce((sum, sale) => {
    const amount = parseInt(sale.totalAmount.replace(/[^\d]/g, ''));
    return sum + (isNaN(amount) ? 0 : amount);
  }, 0);

  // Dialog helper
  const showDialog = (message) => {
    setDialog(message);
    setTimeout(() => setDialog(null), 2000);
  };

  // Add new produce
  const handleAddProduce = (e) => {
    e.preventDefault();
    if (!newProduce.name || !newProduce.category || !newProduce.quantity || !newProduce.price) return;
    const nextId = produceListings.length > 0 ? Math.max(...produceListings.map(p => p.id)) + 1 : 1;
    setProduceListings([
      ...produceListings,
      {
        id: nextId,
        name: newProduce.name,
        category: newProduce.category,
        quantity: newProduce.quantity,
        price: `Ksh ${parseFloat(newProduce.price).toFixed(2)}`,
        status: "Available",
        description: newProduce.description,
      },
    ]);
    setNewProduce({ name: '', category: '', quantity: '', price: '', description: '' });
    showDialog('New produce listing added successfully!');
  };

  // Edit produce
  const handleEditProduce = (id) => {
    const produce = produceListings.find(p => p.id === id);
    if (!produce) return;
    const newName = window.prompt(`Edit name for ${produce.name}:`, produce.name);
    if (newName === null) return;
    const newQuantity = window.prompt(`Edit quantity for ${produce.name}:`, produce.quantity);
    if (newQuantity === null) return;
    const newPrice = window.prompt(`Edit price for ${produce.name}:`, produce.price.replace('Ksh ', ''));
    if (newPrice === null) return;
    setProduceListings(produceListings.map(p =>
      p.id === id ? { ...p, name: newName, quantity: newQuantity, price: `Ksh ${parseFloat(newPrice).toFixed(2)}` } : p
    ));
    showDialog(`${newName} updated successfully!`);
  };

  // Delete produce
  const handleDeleteProduce = (id) => {
    if (window.confirm('Are you sure you want to delete this listing?')) {
      setProduceListings(produceListings.filter(p => p.id !== id));
      showDialog('Produce listing deleted successfully!');
    }
  };

  // Accept order
  const handleAcceptOrder = (id) => {
    setOrderListings(orderListings.map(o =>
      o.id === id ? { ...o, status: 'Accepted' } : o
    ));
    const order = orderListings.find(o => o.id === id);
    showDialog(`Order ${order.orderId} accepted!`);
  };

  // Reject order
  const handleRejectOrder = (id) => {
    setOrderListings(orderListings.map(o =>
      o.id === id ? { ...o, status: 'Rejected' } : o
    ));
    const order = orderListings.find(o => o.id === id);
    showDialog(`Order ${order.orderId} rejected.`);
  };

  // Complete order
  const handleCompleteOrder = (id) => {
    const order = orderListings.find(o => o.id === id);
    if (!order) return;
    setOrderListings(orderListings.filter(o => o.id !== id));
    setSalesHistory([
      ...salesHistory,
      {
        id: `sale-${salesHistory.length + 1}`,
        saleId: order.orderId.replace('AGR', 'SALE'),
        produce: order.produce,
        quantity: order.quantity,
        totalAmount: order.totalPrice,
        buyer: order.buyer,
        date: new Date().toISOString().slice(0, 10),
      },
    ]);
    showDialog(`Order ${order.orderId} marked as complete and added to sales history!`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f8fafc] text-[#1e293b] font-inter">
      {/* Header section */}
      <header className="bg-yellow-400 py-4 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-3xl font-bold text-gray-800">AgriPredict AI</h1>
            <span className="text-gray-700 font-semibold hidden md:block">Farmer Dashboard</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="/" className="px-4 py-2 bg-green-600 text-white font-semibold rounded-full shadow-md hover:bg-green-700 transition-colors duration-200">Log Out</a>
          </div>
        </div>
      </header>

      {/* Main content area with overlay */}
      <main className="flex-grow flex justify-center items-start">
        <div className="content-overlay bg-white bg-opacity-90 flex-grow p-8 rounded-2xl m-4 max-w-5xl w-full shadow-xl">
          <h2 className="text-4xl font-bold text-center text-green-700 mb-10">Welcome, Farmer!</h2>

          {/* Dashboard Overview Section */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="dashboard-card text-center">
                <p className="text-5xl font-extrabold text-green-600 mb-2">{activeListings}</p>
                <p className="text-gray-600">Active Listings</p>
              </div>
              <div className="dashboard-card text-center">
                <p className="text-5xl font-extrabold text-blue-600 mb-2">{pendingOrders}</p>
                <p className="text-gray-600">Pending Orders</p>
              </div>
              <div className="dashboard-card text-center">
                <p className="text-5xl font-extrabold text-purple-600 mb-2">Ksh {totalSales.toLocaleString()}</p>
                <p className="text-gray-600">Total Sales (Month)</p>
              </div>
            </div>
          </section>

          {/* Manage Produce Section */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Manage Your Produce</h3>
            {/* Add New Produce Form */}
            <div className="dashboard-card mb-8">
              <h4 className="text-xl font-semibold text-green-700 mb-4">Add New Produce Listing</h4>
              <form className="space-y-4" onSubmit={handleAddProduce}>
                <div>
                  <label htmlFor="produce-name" className="block text-sm font-medium text-gray-700">Produce Name</label>
                  <input type="text" id="produce-name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" required value={newProduce.name} onChange={e => setNewProduce({ ...newProduce, name: e.target.value })} />
                </div>
                <div>
                  <label htmlFor="produce-category" className="block text-sm font-medium text-gray-700">Category</label>
                  <select id="produce-category" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" required value={newProduce.category} onChange={e => setNewProduce({ ...newProduce, category: e.target.value })}>
                    <option value="">Select a category</option>
                    <option value="grains">Grains</option>
                    <option value="vegetables">Vegetables</option>
                    <option value="fruits">Fruits</option>
                    <option value="legumes">Legumes</option>
                    <option value="root-crops">Root Crops</option>
                    <option value="herbs">Herbs</option>
                    <option value="spices">Spices</option>
                    <option value="oil-seeds">Oil Seeds</option>
                    <option value="cereals">Cereals</option>
                    <option value="tubers">Tubers</option>
                    <option value="pulses">Pulses</option>
                    <option value="leafy-greens">Leafy Greens</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="produce-quantity" className="block text-sm font-medium text-gray-700">Quantity (e.g., 100 kg, 50 bags)</label>
                  <input type="text" id="produce-quantity" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" required value={newProduce.quantity} onChange={e => setNewProduce({ ...newProduce, quantity: e.target.value })} />
                </div>
                <div>
                  <label htmlFor="produce-price" className="block text-sm font-medium text-gray-700">Price per Unit (Ksh)</label>
                  <input type="number" id="produce-price" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" step="0.01" required value={newProduce.price} onChange={e => setNewProduce({ ...newProduce, price: e.target.value })} />
                </div>
                <div>
                  <label htmlFor="produce-description" className="block text-sm font-medium text-gray-700">Description</label>
                  <textarea id="produce-description" rows={3} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" value={newProduce.description} onChange={e => setNewProduce({ ...newProduce, description: e.target.value })}></textarea>
                </div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Add Produce</button>
              </form>
            </div>

            {/* Current Produce Listings Table */}
            <h4 className="text-xl font-semibold text-green-700 mb-4">Your Current Listings</h4>
            <div className="overflow-x-auto">
              <table className="table-auto min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tl-lg">Produce</th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price/Unit</th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tr-lg">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {produceListings.map(produce => (
                    <tr key={produce.id}>
                      <td className="px-6 py-4 whitespace-nowrap">{produce.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{produce.category}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{produce.quantity}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{produce.price}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${produce.status === 'Available' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{produce.status}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-indigo-600 hover:text-indigo-900 mr-4" onClick={() => handleEditProduce(produce.id)}>Edit</button>
                        <button className="text-red-600 hover:text-red-900" onClick={() => handleDeleteProduce(produce.id)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* View Orders Section */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Your Orders</h3>
            <div className="overflow-x-auto">
              <table className="table-auto min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tl-lg">Order ID</th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Produce</th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Price</th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Buyer</th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tr-lg">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {orderListings.map(order => {
                    let statusClass = '';
                    let actions = null;
                    if (order.status === 'Pending') {
                      statusClass = 'bg-yellow-100 text-yellow-800';
                      actions = <>
                        <button className="text-green-600 hover:text-green-900 mr-4" onClick={() => handleAcceptOrder(order.id)}>Accept</button>
                        <button className="text-red-600 hover:text-red-900" onClick={() => handleRejectOrder(order.id)}>Reject</button>
                      </>;
                    } else if (order.status === 'Accepted') {
                      statusClass = 'bg-green-100 text-green-800';
                      actions = <button className="text-blue-600 hover:text-blue-900" onClick={() => handleCompleteOrder(order.id)}>Mark Complete</button>;
                    } else if (order.status === 'Completed') {
                      statusClass = 'bg-blue-100 text-blue-800';
                      actions = <span>Completed</span>;
                    } else if (order.status === 'Rejected') {
                      statusClass = 'bg-red-100 text-red-800';
                      actions = <span>Rejected</span>;
                    }
                    return (
                      <tr key={order.id}>
                        <td className="px-6 py-4 whitespace-nowrap">{order.orderId}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{order.produce}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{order.quantity}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{order.totalPrice}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{order.buyer}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusClass}`}>{order.status}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{actions}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>

          {/* Sales History Section */}
          <section>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Sales History</h3>
            <div className="overflow-x-auto">
              <table className="table-auto min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tl-lg">Sale ID</th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Produce</th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Amount</th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Buyer</th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tr-lg">Date</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {salesHistory.map(sale => (
                    <tr key={sale.id}>
                      <td className="px-6 py-4 whitespace-nowrap">{sale.saleId}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{sale.produce}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{sale.quantity}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{sale.totalAmount}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{sale.buyer}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{sale.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
        {dialog && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm mx-auto">
              <p className="text-lg text-center mb-4">{dialog}</p>
              <button className="w-full px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200" onClick={() => setDialog(null)}>OK</button>
            </div>
          </div>
        )}
      </main>

      {/* Footer section */}
      <footer className="bg-gray-800 text-white py-4 mt-8">
        <div className="container mx-auto px-4 text-center text-sm">
          &copy; 2025 AgriPredict AI. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Farmer;
