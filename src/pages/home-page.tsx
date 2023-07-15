
import Link from "next/link";
import Header from '../pages/header-page';
import Footer from '../pages/footer-page';
import ActionBar from '../pages/actionbar';
// import TestTable from '../pages/test-table';
import MainTable from '../pages/todolist-home-page';
import { Button } from "../components/ui/button"

import {
    Card,
  } from "../components/ui/card"
  


const OverviewPortlet = "bg-white text-gray-700 font-bold text-6xl rounded py-16";
const CustomerTile = "bg-white text-gray-700 font-bold text-6xl rounded py-20";

export default function HomePage(){
    return (

    <div>
        <div><Header></Header></div>
        <div className="flex w-screen justify-center bg-gray-200 p-8"><div/>
        <ActionBar></ActionBar>
    </div>

    <div className="grid grid-rows-1 grid-flow-col gap-6 bg-gray-200 pr-9 pl-9  ">
         <div className={OverviewPortlet}><h1 className="text-center">12<p className="font-medium text-xl">In Progress - Document</p></h1></div>
         <div className={OverviewPortlet}><h1 className="text-center">10<p className="font-medium text-xl">In Progress - Document</p></h1></div>
         <div className={OverviewPortlet}><h1 className="text-center">22<p className="font-medium text-xl">In Progress - Document</p></h1></div>
         <div className={OverviewPortlet}><h1 className="text-center">03<p className="font-medium text-xl">In Progress - Document</p></h1></div>
    </div>
    
    <div className=" bg-gray-200 p-8">
      <Card className="bg-white h-screen rounded">
      <div className="bg-white p-4 rounded">
        <div className="grid grid-cols-2 gap-2 ">
        <div><h1 className="font-semibold text-2xl">To Do List</h1><h2>All tasks overview</h2></div>
      </div>
      </div>

      <div>

      <MainTable></MainTable>

      </div>
      </Card>
    </div>




    <div className="grid grid-rows-1 grid-flow-col gap-6 bg-gray-200 p-9 shadow-m ">
         <div className={CustomerTile}><h1 className="text-center">01<p className="font-medium text-xl">Custom Tile</p></h1></div>
         <div className={CustomerTile}><h1 className="text-center">02<p className="font-medium text-xl">Custom Tile</p></h1></div>
         <div className={CustomerTile}><h1 className="text-center">03<p className="font-medium text-xl">Custom Tile</p></h1></div>
    </div>


    <div className="grid grid-cols-1 gap-2 h-1/4"><Footer></Footer></div>
        

    </div> 



    )
}
