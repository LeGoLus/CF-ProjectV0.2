import Link from "next/link";
import {
  Card,
} from "../components/ui/card"


export default function ActionBar() {
  return (
    <Card className="bg-white w-screen p-4">
      <div className="grid grid-cols-2 gap-2 ">
        <div><h1 className="font-semibold text-2xl">Welcome (V0.051)</h1><h2>Have a good day!</h2></div>
        <div className="grid grid-cols-3 gap-3 ">   
        <div></div>
        <button className=" px-4 py-1  tracking-wide text-white font-semibold transition-colors duration-200 transform bg-green-700 rounded hover:bg-gray-500 focus:outline-none focus:bg-gray-500" >
            <Link href="/createDocument"> + Create Document</Link>
        </button>
        <button className=" px-4 py-1  tracking-wide text-white font-semibold transition-colors transform bg-gray-700 rounded hover:bg-gray-500 focus:outline-none focus:bg-gray-500" >
            <Link href="/project-creation-page"> + Create Project</Link>
        </button>
        </div>
        <div>
        </div>
      </div>
    </Card>
  )
}