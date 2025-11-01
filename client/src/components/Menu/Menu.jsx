import {MdDashboard} from 'react-icons/md'
import { FaHistory } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";

const Menu = () => {
    
const menuItems = [
  { icon: <MdDashboard />, label: "Dashboard" },
  { icon: <FaHistory />, label: "History" },
  { icon: <CiSettings />, label: "Settings" },
];

  return (
        <div className="fixed left-0 top-0 h-screen w-64 flex flex-col items-center bg-gray-100 border-r border-gray-300 z-30">
      <div className="mt-10 flex items-center gap-3 overflow-hidden">
        <img src="/src/assets/m.svg" alt="User logo" className="w-12 h-12" />
        <h1 className="text-2xl max-w-[120px] font-semibold text-transparent truncate bg-clip-text bg-gradient-to-r from-violet-700 to-fuchsia-500">
          Ullas
        </h1>
      </div>


      
      <aside className="flex flex-col mt-8 w-full space-y-4 items-center">
        {menuItems.map((item, i) => (
          <button
            key={i}
            className="flex items-center gap-2 text-xl font-medium hover:text-violet-600 hover:scale-110 hover:rotate-2 transition-all duration-300 ease-in-out"
          >
            {item.icon} {item.label}
          </button>
        ))}
      </aside>
      <div className="mt-auto mb-2">
        <button className="py-3 px-6 rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Menu;
