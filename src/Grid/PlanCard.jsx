import React from 'react';

const PlanCard = () => {
  const progress = 50; // This is the progress percentage

  return (
    <div className=" p-4 flex flex-col items-center text-gray-800">
      <div className="flex  w-full">
        <h2 className="text-lg font-semibold">Daily plan</h2>
        <span className="text-sm mt-1.5 ml-1.5 text-gray-400">Wed 15 Jun</span>
        <img src="https://cdn3.iconfinder.com/data/icons/navigation-and-settings/24/Material_icons-01-13-512.png" alt="opt" className='ml-auto w-3 h-3'/>
      </div>
      
      <div className="py-3 flex justify-between w-full">
        <div className="text-left">
          <div className="text-sm text-gray-400">Shipments processed</div>
          <div className="font-semibold">1 010 / <span className='text-gray-400'>2 020</span></div>
          <div className="text-sm text-gray-400">Orders processed</div>
          <div className="font-semibold">650 / <span className='text-gray-400'>1 300</span></div>
          <div className="text-sm text-gray-400">Requests considered</div>
          <div className="font-semibold">10 / <span className='text-gray-400'>20</span></div>
        </div>

        <div className="relative">
        <svg viewBox="0 0 36 18" class="w-56 h-30">
  <path d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831" 
        fill="none" 
        stroke="#10B981" 
        stroke-width="2" 
        stroke-dasharray="100, 100"></path>
  <path d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831" 
        fill="none" 
        stroke="#ddd" 
        stroke-width="2" 
        stroke-dasharray="50, 50" 
        stroke-linecap="butt"></path>
</svg>
<div className='flex'>
<span className='text-gray-400 mt-1'>0%</span>
<span className='text-green-500 ml-auto font-bold text-2xl'>50%</span>
<span className='text-gray-400 flex  ml-auto'>100%</span>
</div>


          <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            </svg>
            <span className="bg-[#f9f8fd] rounded-xl">
              <img className='w-10 h-10' src="https://w7.pngwing.com/pngs/366/200/png-transparent-thumbs-up-logo-thumb-signal-emoji-domain-emoticon-emojipedia-emoji-hand-smiley-thumb-signal-thumbnail.png" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
