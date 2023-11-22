import React from 'react';
import DelayedDelivery from './Grid/DelayedDelivery';
import AvailableTrucks from './Grid/AvailableTrucks';
import RecentRequests from './Grid/RecentRequests';
import PlanCard from './Grid/PlanCard';

const Part2 = () => {
  return (
    <div className=" p-[1%] ml-2 mr-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Daily Plan */}
        <div className="bg-white rounded-lg shadow p-[2%] flex flex-col">
            <DelayedDelivery/>          
          {/* Content for Daily Plan */}
        </div>

        {/* Delayed Delivery */}
        <div className="bg-white rounded-lg shadow p-[2%] flex flex-col">
            <PlanCard/>
          {/* Content for Delayed Delivery */}
        </div>

        {/* Available Trucks */}
        <div className="bg-white rounded-lg shadow p-[2%] flex flex-col">
          <AvailableTrucks/>
        </div>

        {/* Recent Requests */}
        <div className="bg-white rounded-lg shadow p-[2%] flex flex-col">
            <RecentRequests/>
          {/* Content for Recent Requests */}
        </div>
      </div>
    </div>
  );
};

export default Part2;
