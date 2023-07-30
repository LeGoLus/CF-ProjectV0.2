
import Link from "next/link";
import Header from '../pages/header-page';
import Footer from '../pages/footer-page';
import ActionBar from '../pages/actionbar';
// import BasicExampleDataGrid from '../pages/table-filter-document-page';

//Backend & TRPC
import { useState, type FormEventHandler } from "react";
import { trpc } from "../utils/trpc";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import {Card } from "../components/ui/card"
import FormDocument from "../components/form-document";
  


export default function DocumentPage(){
    const router = useRouter();
    const util = trpc.useContext();
    const { data: documents = [] } = trpc.document.getAll.useQuery();
    const { data: session, status } = useSession();

    if (status == "loading") {
      return <p>Loading ...</p>;
    }
    if (status == "unauthenticated") {
      router.push("/login");
      return <p>Access denied!</p>;
    }


    return (
        <div>
         <Header></Header>
          <div className="flex w-screen justify-center bg-gray-200 px-8 pt-6"><div/>
          <ActionBar></ActionBar>   
         </div> 
        

        
        
        <div>
         <div className=" bg-gray-200 px-8">
           <Card className="bg-white h-screen rounded">
           <div className="bg-white p-4 rounded">
           <div className="grid grid-cols-2 gap-2 ">
           <div><h1 className="font-semibold text-2xl">Document Directory</h1></div>
          </div>
          </div>

          {/* Table for To Dolist */}
          <div className="p-2">
          <ul className="mt-4">
            {/* {documents.map((document) => (
            <li key={document.id} className="flex items-center justify-between border-b px-2 py-6">
                <span className="inline-block text-gray-600">
                  {document.namedocument}
                </span>
                <span className="inline-block text-gray-600">
                  {document.description}
                </span>
                </li>  
            ))} */}
            {/* {documents.map((document) => (
            <li key={document.id} className="flex items-center justify-between border-b px-2 py-6">
            <formDocument document={document} />
            </li>  
            ))} */}

          </ul>
          <ul className="list-reset">
          {documents.map((document) => (
          <li key={document.id} className="relative flex items-center justify-between border-b px-2 py-6">
          <FormDocument document={document} />
          </li>
          ))}
          </ul>

          </div>
          </Card>
       </div>




        </div>




         <div className="grid grid-cols-1 gap-2 h-1/4"><Footer></Footer></div>
        </div>
    )
}
