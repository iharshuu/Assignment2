import React from 'react';

const AvailableTrucks = () => {
  const trucks = [
    {
      id: 'V435322',
      route: 'Barcelona - Valencia',
      percentage: 90,
      color: 'bg-red-500', 
    },
    {
      id: 'S890324',
      route: 'Barcelona - Seville',
      percentage: 50,
      color: 'bg-yellow-500',
    },
    {
      id: 'S423426',
      route: 'Barcelona - Seville',
      percentage: 25,
      color: 'bg-green-500', 
    },
  ];

  return (
    <div className="p-3">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Available trucks</h2>
        <a href="#" className="text-indigo-600 hover:text-indigo-800 ml-auto transition duration-300 ease-in-out">Show all 
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
    </span>  </div>
      <div className="space-y-4">
        {trucks.map((truck) => (
          <div key={truck.id}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium text-gray-700">{truck.id}</span>
              <span className="text-xs font-semibold text-gray-500">{`${truck.percentage} / 100 %`}</span>
            </div>
            <div className="w-20 float-right bg-white rounded-full h-1.5">
              <div
                className={`${truck.color} h-1.5 rounded-full`}
                style={{ width: `${truck.percentage}%` }}
              ></div>
            </div>
            <span className="text-sm text-gray-500">{truck.route}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableTrucks;
