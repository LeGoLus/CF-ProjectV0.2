import Link from "next/link";
import {
  Card,
} from "../components/ui/card"


export default function ActionBarProjectPage() {
  return (
    <Card className="bg-white h-1/3 p-4 drop-shadow-md ">
      <div className="grid grid-cols-3 gap-2 h-full ">
        <div className="grid grid-rows-3 gap-2">
          <div></div>
          <div className="grid grid-cols-3 ">
            <div></div>
            <div><h1 className="font-semibold text-xl text-center">Welcome!</h1>
              <button className="px-4 py-3 tracking-wide text-white text-sm font-semibold transition-colors transform bg-gray-700 rounded hover:bg-gray-500 focus:outline-none focus:bg-gray-500" >
               <Link href="/project-creation-page"> + Create Project</Link>
              </button></div>
            <div></div>
          </div>
        </div>

        {/* Position Two

        <h1 className="font-semibold text-2xl text-center">Welcome (V0.032 Delta)</h1><h2 className=" text-xl text-center">Project Action Bar and Dashboard</h2>   
        
        
        */}
        <div >    
          <div className="grid grid-cols-2 grid-rows-2 justify-stretch gap-4 drop-shadow  w-full h-full p-2">
             <div className="p-2 bg-lime-500 rounded text-center text-white font-bold">01</div>
             <div className="p-2 bg-cyan-500 rounded text-center text-white font-bold">02</div>
             <div className="p-2 bg-yellow-400 rounded text-center text-white font-bold">03</div>
             <div className="p-2 bg-gray-400 rounded text-center text-white font-bold">04</div>
          </div>
        </div>

        {/* Position Three */}
        <div>
          <div className="grid grid-cols-2 gap-2 h-full">
            <div className="bg-white drop-shadow rounded text-center text-black font-bold p-2">
              <h1>Project System</h1>
            </div>
            <div className="bg-white drop-shadow rounded text-center text-black font-bold p-2">
              <h1>Project Type</h1>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}