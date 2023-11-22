import React from 'react';

const RecentRequests = () => {
  const requests = [
    {
      type: 'Parcel redirection',
      destination: 'Valencia - Barcelona',
      time: '1 min ago',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Emojione_1F4E6.svg/1200px-Emojione_1F4E6.svg.png', 
      
    },
    {
      type: 'Packing problem',
      destination: 'Barcelona - Seville',
      time: '10 min ago',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Emojione_1F4E6.svg/1200px-Emojione_1F4E6.svg.png', 
      
    },
    {
      type: 'Machine breakdown',
      destination: 'Madrid - Barcelona',
      time: '20 min ago',
      icon: 'https://lordicon.com/icons/wired/flat/849-truck.svg', 
      
    },
  ];

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold text-gray-800">Recent requests</h2>
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
    </span>       </div>
      <div className="space-y-6">
        {requests.map((request, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center">
              <div className={`bg-[#f9f8fd] p-2 rounded-full`}>
                <img src={request.icon} alt={`${request.type} icon`} className="h-4 w-4" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700">{request.type}</p>
                <p className="text-xs text-gray-500">{request.destination}</p>
              </div>
            </div>
            <span className="text-xs text-gray-500">{request.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentRequests;
