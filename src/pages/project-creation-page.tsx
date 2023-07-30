import { type NextPage } from "next";
import Head from "next/head";
import { useState, type FormEventHandler } from "react";
import { trpc } from "../utils/trpc";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";
import Header from '../pages/header-page';
import Footer from '../pages/footer-page';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateField } from '@mui/x-date-pickers/DateField';


const PriorityStatus = [
  {
    value: 'High',
    label: 'High',
  },
  {
    value: 'Medium',
    label: 'Medium',
  },
  {
    value: 'Low',
    label: 'Low',
  },
];

const Project: NextPage = () => {
    const router = useRouter();
    const util = trpc.useContext();
    const [nameproject, setNameproject] = useState("");
    const [description, setDescription] = useState("");
    const { data: projects = [] } = trpc.project.getAll.useQuery();
    const { data: session, status } = useSession();
    const createProject = trpc.project.create.useMutation({
      onSuccess() {
        util.project.invalidate();
        router.push("/project-page");
      },
    });
    
  
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
      e.preventDefault();
      await createProject.mutateAsync({ 
        nameproject, 
        description,
      });
      setNameproject("");
      setDescription("");

    };

  
    if (status == "loading") {
      return <p>Loading ...</p>;
    }
    if (status == "unauthenticated") {
      router.push("/login");
      return <p>Access denied!</p>;
    }

    return (
        <>
        <Head>
        <title>Project Creation</title>
        <meta name="description" content="Create a new project" />
        </Head>
        
        <div>
         <Header></Header>
          <div className="flex w-screen justify-center bg-gray-200 px-8 pt-6"><div/>
         </div> 
        
        
        <div>
         <div className=" bg-gray-200 px-8 ">
         <div className="bg-white p-4 shadow rounded"><h1 className="font-semibold text-2xl text-center">Project Creation</h1></div>
         <div className="bg-gray-200 p-2 rounded "></div>
         <div className="bg-white w-full px-4 py-8 shadow rounded">
         
          <div className="flex items-center">
            <h1 className="mr-6 text-2xl font-semibold"> Project Information </h1>
          </div>

          

          <form onSubmit={handleSubmit} className="relative p-6">

          <Box
            component="form"
            sx={{
             '& > :not(style)': { width: '100%' }
               }}
            noValidate
            autoComplete="off"
            
          >
          <TextField 
           
           id="Project-Name" label="Project Name*" variant="outlined" 
           type="text"
           placeholder=""
           value={nameproject}
           onChange={(e) => setNameproject(e.target.value)}
           className="border-grey-600 w-full p-8 rounded border px-2 py-1 outline-none"
           
           />
          </Box>
          
          <div className="p-2"></div> 
          
          <div className="grid grid-cols-2 gap-4">
          <div><Box
            component="form"
            sx={{
             '& > :not(style)': { width: '100%' }
               }}
            noValidate
            autoComplete="off"
            
          >
          <TextField 
           
           id="Sale-Order-Number" label="Sale Order Number*" variant="outlined" color="primary" 
           type="text"
           placeholder=""
           value={description}
           onChange={(e) => setDescription(e.target.value)}
           className="border-grey-600 w-full p-8 rounded border px-2 py-1 outline-none"
           
           />
          </Box>
          </div>

          <div><Box
            component="form"
            sx={{
             '& > :not(style)': { width: '100%' }
               }}
            noValidate
            autoComplete="off"
            
          >

          <TextField
          id="Priority"
          select
          label="Priority*"
          defaultValue=""
          variant="outlined" 
          //helperText="Please select your currency"
           >
          {PriorityStatus.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
          </TextField>
          
          </Box>
          </div>
          </div>

          <div className="p-2"></div>
            
          <div className="grid grid-cols-2 gap-4">
          <div>
    
          </div>

          <div><Box
            component="form"
            sx={{
             '& > :not(style)': { width: '100%' }
               }}
            noValidate
            autoComplete="off"
            
          >

          
           
          </Box>
          </div>
          </div>
          
          <div className="p-2"></div>
          
          <button className="bg-green-700 text-white px-4 py-2 rounded shadow">Create Project</button>
          </form>

        </div>
        </div>

        
        
         <div className="grid grid-cols-1 gap-2 h-1/4"><Footer></Footer></div>
        </div>
        </div>
        </>
    );
  };

export default Project;

