import React from 'react';

const DelayedDelivery = () => {
  const deliveries = [
    {
      destination: 'Valencia - Barcelona',
      truck: 'B435324',
      timeArrive: '07:05 AM',
      timeDelay: '5.05h',
      color: "#fdeff1",
    },
    {
      destination: 'Cordoba - Barcelona',
      truck: 'B438987',
      timeArrive: '10:05 AM',
      timeDelay: '2.05h',
      color: "yellow",
    },
    {
      destination: 'Seville - Barcelona',
      truck: 'B435322',
      timeArrive: '11:40 AM',
      timeDelay: '0.30h',
      color: "yellow",
    },
  ];

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Delayed delivery</h2>
        <a href="#" className="text-[#8160de] ml-auto hover:text-indigo-800 transition duration-300 ease-in-out">Show all
         </a>
         <span>
        <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="voilet"
  viewBox="0 0 24 24"
  stroke="#7966be"
  className="w-6 h-6"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M14 5l7 7m0 0l-7 7-7H3"
  />
</svg>
          </span>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="border-b bg-[#f9f8fd]">
            <tr>
              <th className="text-sm font-medium text-gray-400 px-2 py-1 text-left">Destination</th>
              <th className="text-sm font-medium text-gray-400 px-2 py-1 text-left">Truck</th>
              <th className="text-sm font-medium text-gray-400 px-2 py-1 text-left">Time arrive</th>
              <th className="text-sm font-medium text-gray-400 px-2 py-1 text-left">Time delay</th>
            </tr>
          </thead>
          <tbody>
            {deliveries.map((delivery, index) => (
              <tr className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : ''}`} key={index}>
                <td className="px-1 py-2 text-sm text-gray-700">{delivery.destination}</td>
                <td className="px-3 py-1 text-sm text-gray-700">{delivery.truck}</td>
                <td className="px-3 py-1 text-sm text-gray-700">{delivery.timeArrive}</td>
                <td className={`px-3 py-1 text-sm font-semibold `}>
                 <span className={`${delivery.color === 'yellow' ? 'text-yellow-500 bg-yellow-100' : 'text-red-500 bg-red-100'}`}> {delivery.timeDelay} </span> 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DelayedDelivery;
