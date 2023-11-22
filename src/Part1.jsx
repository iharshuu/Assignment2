import React from 'react';

const Part1 = () => {
  let datamap = [
    {
      "heading": "New Packages",
      "number": 222,
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Emoji_u270c.svg/1200px-Emoji_u270c.svg.png"
    },
    {
      "heading": "Ready for shipping",
      "number": 60,
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Emojione_1F4E6.svg/1200px-Emojione_1F4E6.svg.png"
    },
    {
      "heading": "In transit",
      "number": 2000,
      "img": "https://lordicon.com/icons/wired/flat/849-truck.svg"
    },
    {
      "heading": "Delivered",
      "number": 3600,
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Emojione_1F680.svg/1200px-Emojione_1F680.svg.png"
    }
  ];

  return (
      <div className="p-4 ml-1 w-full">
        <h2 className='m-[0.3%]  font-semibold text-lg'>Overview</h2>
        <div className="grid grid-cols-12 gap-3">
          {datamap.map((val, i) => (
            <div key={i} className="col-span-12 sm:col-span-6 md:col-span-3">
              <div className="flex flex-row bg-white shadow-sm rounded p-4">
                <div className='flex flex-col w-11/12'>
                  <div className="text-sm text-gray-500 w-4/4">{val.heading}</div>
                  <span className="text-lg font-bold text-gray-800">{val.number.toLocaleString().replace("," ," ")}</span>
                </div>
                <span className='bg-[#f9f8fd] rounded-2xl w-10 h-10 flex items-center justify-center ml-4'>
                  <img src={val.img} alt="Icon" className="h-6 w-6" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Part1;
