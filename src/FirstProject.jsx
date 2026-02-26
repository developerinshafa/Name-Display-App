import { useState } from "react";
import Billing from "./components/api/Billing";

export default function FirstProject() {
    const [searchTerm, setSearchTerm] = useState("");
    const [limit, setLimit] = useState(5)

  return (
    <>
    <header className="bg-blue-950 text-white font-semibold text-2xl p-2 max-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
            <h3 className="font-semibold text-orange-400 p-2">API Fetching data</h3>
            <ul className="flex items-center justify-center font-semibold gap-7 ">
                <li>
                    <a href="#" className="hover:text-orange-400 p-2">Home</a>
                </li>
                <li> 
                    <a href="#" className="hover:text-orange-400 p-2">About</a>
                </li>
                <li>
                    <a href="#" className="hover:text-orange-400 p-2">Place</a>
                </li>
                <li> 
                    <a href="#" className="hover:text-orange-400 p-2">Contact</a> 
                </li>
            </ul>
        </div>
    </header>
      <div className="space-y-6 p-12">
        <h1 className="bg-white p-2 font-bold text-3xl rounded-xl border-b-6 border-blue-800">List of Bills  <br />
        {searchTerm && (
        <span className="font-light text-xl">You have Searched for: {searchTerm}
        </span>
         )}
        </h1>
        <div className="flex space-x-2">
            <input type="search" 
         placeholder="Search Bill by....." 
         className="border border-gray-300 rounded outline-none p-1 px-4 w-full"
         value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select 
        value={limit}
        id="limit"
        onChange={(e) =>{
            const value = e.target.value;
         setLimit(value === "All" ? "All" : Number(value))}
        }
        className="border border-gray-300 rounded outline-none p-1 px-4">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="All">All</option>
        </select>
        </div>
        
        <div>
            <Billing searchTerm={searchTerm} limit={limit}/> 
        </div>
      </div>
      <footer className='text-center font-bold text-2xl bg-blue-950 text-white p-4 '>
      <p>2026 Designed by Fathima Inshafa</p>
     </footer>
    </>
  );
}
