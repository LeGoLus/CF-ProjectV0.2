import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
// import BasicExampleDataGrid from '../pages/table-filter-document-page';

//Backend & TRPC
import { useState, type FormEventHandler } from "react";
import { trpc } from "../utils/trpc";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import {Card } from "../components/ui/card"


export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

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
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <div className='bg-white drop-shadow pt-2'>
        <h1 className='p-4'>Project Managemnt</h1>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        </div>
        <div className='bg-white drop-shadow'></div>
        <ul className="mt-4">
            {projects.map((project) => (
            <li key={project.id} className="flex items-center justify-between border-b px-2 py-6">
                <span className="inline-block text-gray-600">
                  {project.nameproject}
                </span>
                <span className="inline-block text-gray-600">
                  {project.description}
                </span>
                </li>  
            ))}
          </ul>
        {/* <div className='bg-white drop-shadow'>
        <TabPanel value="1"> Table 001 <BasicExampleDataGrid></BasicExampleDataGrid></TabPanel>
        <TabPanel value="2"> Table 002 <BasicExampleDataGrid></BasicExampleDataGrid></TabPanel>
        <TabPanel value="3"> Table 003 <BasicExampleDataGrid></BasicExampleDataGrid></TabPanel>
        </div> */}

      </TabContext>
    </Box>
  );
}