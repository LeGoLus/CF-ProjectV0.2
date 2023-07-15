import { Button } from "../components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"

import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs"

import DataTable from "./table-home-main"

export default function MainTable() {
  return (
    <Tabs defaultValue="tab2" className="p-1 rounded">
      <TabsList className="grid w-2/4 grid-cols-3 bg-gray-100">
        <TabsTrigger value="tab1" className=" data-[state=active]:bg-white hover:font-bold">All Documents</TabsTrigger>
        <TabsTrigger value="tab2" className=" data-[state=active]:bg-white hover:font-bold">In-progress Documents</TabsTrigger>
        <TabsTrigger value="tab3" className=" data-[state=active]:bg-white hover:font-bold">Delayed Documents</TabsTrigger>
      </TabsList>
      <div className="w-full p-1">
      <TabsContent value="tab1" className=" bg-white ">

        {/* Main Table */}
        <h1>Table 1 - All Documents</h1>
        <DataTable></DataTable>
        
      </TabsContent>
      <TabsContent value="tab2" className=" bg-white ">

         {/* Main Table */}
         <h1>Table 2 - In-progress Documents</h1>
         <DataTable></DataTable>

      </TabsContent>
      <TabsContent value="tab3" className=" bg-white ">

           {/* Main Table */}
           <h1>Table 3 - Delayed Documents</h1>
         <DataTable></DataTable>

      </TabsContent>
      </div>
      
    </Tabs>
  )
}
