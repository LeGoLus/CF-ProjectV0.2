import Link from "next/link";
import {
  Card,
} from "../components/ui/card"


export default function ActionBarEmployeeProfilePage() {
  return (
    <Card className="bg-white h-1/3 p-4 drop-shadow-md ">
      <div className="grid grid-cols-3 gap-2 h-full ">
        <div className="grid grid-rows-3 gap-2">
          <div></div>
          <div className="grid grid-cols-3 ">
            <div></div>
            <div><h1 className="font-semibold text-xl text-center">Employee Management</h1>
              <button className="px-4 py-3 tracking-wide text-white text-sm font-semibold transition-colors transform bg-gray-700 rounded hover:bg-gray-500 focus:outline-none focus:bg-gray-500" >
               <Link href="/createMember"> + Create Member</Link>
              </button></div>
            <div></div>
          </div>
        </div>

        {/* Position Two

        <h1 className="font-semibold text-2xl text-center">Welcome (V0.032 Delta)</h1><h2 className=" text-xl text-center">Project Action Bar and Dashboard</h2>   
        
        
        */}
        <div >    
          <div className="grid grid-cols-2 grid-rows-1 justify-stretch gap-4 drop-shadow  w-full h-full p-2">
             <div className="p-2 bg-orange-500 rounded text-center text-white font-bold">Role paragraph 001</div>
             <div className="p-2 bg-violet-500 rounded text-center text-white font-bold">Role paragraph 002</div>
          </div>
        </div>

        {/* Position Three */}
        <div>
          <div className="grid grid-cols-1 gap-2 h-full">
            <div className="bg-white drop-shadow rounded text-center text-black font-bold p-2">
              <h1>Picture - Employee Profile</h1>
            </div>
    
          </div>
        </div>
      </div>
    </Card>
  )
}