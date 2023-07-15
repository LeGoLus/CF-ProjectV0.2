
import Link from "next/link";
import Header from '../pages/header-page';
import Footer from '../pages/footer-page';
import ActionBar from '../pages/actionbar';
import BasicExampleDataGrid from '../pages/table-filter-document-page';

import {
    Card,
  } from "../components/ui/card"
  


export default function DashboardPage(){
    return (
        <div>
         <Header></Header>
          <div className="flex w-screen justify-center bg-gray-200 px-8 pt-6"><div/>
        
         </div> 
        

        
        
        <div>
         <div className=" bg-gray-200 px-8">
           <Card className="bg-white h-screen rounded">
           <div className="bg-white p-4 rounded"></div>
         
           <div><h1 className="font-semibold text-2xl text-center">Dashboard Page</h1></div>
         

          {/* Table for To Dolist */}
          <div className="p-2">
   

          </div>
          </Card>
       </div>




        </div>




         <div className="grid grid-cols-1 gap-2 h-1/4"><Footer></Footer></div>
        </div>
    )
}
