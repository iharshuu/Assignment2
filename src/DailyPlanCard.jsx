import React from 'react';
import "./Navbar"

const DailyPlanCard = () => {
  return (
    <header className="antialiased">
         <nav className="bg-white border-gray-200 ml-1 mt-2 px-4 lg:px-4 py-2.5">
        
                
             <div className="flex flex-wrap justify-between items-center ">
            <div className="flex sticky flex-col justify-start items-center">
            <form action="#" method="GET" className="hidden lg:block lg:pl-2">
              <label htmlFor="topbar-search" className="sr-only">
                Search
              </label>
              <div className="relative mt-1 lg:w-96">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  name="email"
                  id="topbar-search"
                  className="bg-gray-50  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-9 p-2.5  dark:placeholder-[#9ca3a8] dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Search by tracking number"
                />
              </div>
            </form>
          </div>
          <div className="flex items-center lg:order-2">
            <div className="relative flex items-center mr-2 bg-[#f9f8fd]">
                <label className='text-[#b0b8c3]' htmlFor='city'>City:</label>
            <select className='bg-[#f9f8fd]' id="city">
                <option>
                    Barcelona
                </option>
                <option>
                    Mangolre
                </option>
            </select>
            </div>
            <div className="relative flex items-center mr-2 bg-[#f9f8fd]">
                <label className='text-[#b0b8c3]' htmlFor='dep'>Department:</label>
            <select className='bg-[#f9f8fd] ' id='dep'>
                <option>
                    1
                </option>
                <option>
                    2
                </option>
            </select>
            </div>
            <div className='relative flex items-center mr-2'>
                <span className='text-[#2c2b44]'>Wed 15 Jun, 12:10:22</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default DailyPlanCard;
