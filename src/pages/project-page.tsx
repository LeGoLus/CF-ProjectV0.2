
import Link from "next/link";
import Header from '../pages/header-page';
import Footer from '../pages/footer-page';
import ActionBarProjectPage from '../pages/actionbar-project-page';
import LabTabs from '../pages/tab-project-page';

//Backend & TRPC
import { useState, type FormEventHandler } from "react";
import { trpc } from "../utils/trpc";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import {Card } from "../components/ui/card"




export default function DocumentPage(){
    const router = useRouter();
    const util = trpc.useContext();
    const { data: projects = [] } = trpc.project.getAll.useQuery();
    const { data: session, status } = useSession();

    if (status == "loading") {
      return <p>Loading ...</p>;
    }
    if (status == "unauthenticated") {
      router.push("/login");
      return <p>Access denied!</p>;
    }

    return (
    <div className="bg-gray-200">
        <div className=" bg-gray-200">

          <div className="bg-white"><Header></Header></div>

            <div className="bg-gray-200 p-4">
                <div>

                    <div><ActionBarProjectPage></ActionBarProjectPage></div>
                    <div className="pt-4"><LabTabs></LabTabs></div>
                    
                </div>
            </div>

        </div>
        <div className="grid grid-cols-1 gap-2 h-1/4"><Footer></Footer></div>
    </div>
    
    )
}
