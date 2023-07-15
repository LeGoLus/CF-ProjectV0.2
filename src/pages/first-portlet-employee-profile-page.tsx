import Link from "next/link";
import {
  Card,
} from "../components/ui/card"


export default function FirstPortletEmployeeProfilePage() {
  return (
    <Card className="bg-white h-1/3 p-4 drop-shadow-md ">
      <div className="grid grid-cols-3 gap-2 h-full ">
        <div className="grid grid-rows-3 gap-2">
          <div></div>
          <div className="grid grid-cols-3 ">
            <div className="iteams-center"></div>
            
            <div></div>
          </div>
        </div>

        {/* Position Two

        <h1 className="font-semibold text-2xl text-center">Welcome (V0.032 Delta)</h1><h2 className=" text-xl text-center">Project Action Bar and Dashboard</h2>   
        
        
        */}
        <div className="text-center text-2xl">    
             Confide - Employee Profile
        </div>

        {/* Position Three */}
        <div>

        </div>
      </div>
    </Card>
  )
}