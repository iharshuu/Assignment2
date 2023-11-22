import './App.css';
import DailyPlanCard from './DailyPlanCard';
import Navbar from './Navbar';
import Part1 from './Part1';
import Part2 from './Part2';
function App() {
  return (
    <>
    <div className='w-full h-full bg-[#ededf2] flex items-center justify-center rounded'>
      <div className='bg-[#f9f8fd] flex flex-row w-11/12 justify-center h-full'>
        <div className='w-1/6 h-[calc(100vh-0 rem)]'>
        <Navbar/>
        </div>
        <div className='bg-[#f9f8fd] ml-1 w-5/6'>
        <DailyPlanCard />
        <div className='bg-[#f9f8fd]'>
        <Part1/>
        <Part2/>
        </div>
        
        </div>
        
      </div>
    </div>

    </>
  );
}

export default App;
