
import Link from "next/link";
import Header from '../pages/header-page';
import Footer from '../pages/footer-page';
import FirstPortletEmployeeProfilePage from '../pages/first-portlet-employee-profile-page';
import ActionBarEmployeeProfilePage from '../pages/actionbar-employee-profile-page';
import ExcutiveUser from '../pages/excutive-user';


//Backend & TRPC
import { useState, type FormEventHandler } from "react";
import { trpc } from "../utils/trpc";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import {Card } from "../components/ui/card"


export default function EmployeeProfilePage(){
    const router = useRouter();
    const util = trpc.useContext();
    // const { data: documents = [] } = trpc.document.getAll.useQuery();
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

                    <div><FirstPortletEmployeeProfilePage></FirstPortletEmployeeProfilePage></div>
                    <div><ActionBarEmployeeProfilePage></ActionBarEmployeeProfilePage></div>
                    <div className="pt-4">
                        <div className="grid grid-rows-4 gap-2 bg-white drop-shadow p-2">
                            <div className=""> 
                                <h1 className="text-center p-6 h1/2  text-2xl">Excutive Management</h1>
                                <ExcutiveUser></ExcutiveUser>
                            </div>
                            <div className=""> 
                                <h1 className="text-center p-6 h1/2  text-2xl">Admin Service</h1>
                                <ExcutiveUser></ExcutiveUser>
                            </div>
                            <div className=""> 
                                <h1 className="text-center p-6 h1/2  text-2xl">Sale</h1>
                                <ExcutiveUser></ExcutiveUser>
                            </div>
                            <div className=""> 
                                <h1 className="text-center p-6 h1/2  text-2xl">Engineer</h1>
                                <ExcutiveUser></ExcutiveUser>
                            </div>
                        </div>

                    </div>
                    
                </div>
            </div>

        </div>
        <div className="grid grid-cols-1 gap-2 h-1/4"><Footer></Footer></div>
    </div>
    
    )
}
