"use client"
import React, { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import fileIcon from "../../_assests/file-icon.png"
import Image, { StaticImageData } from 'next/image';
import emptyIcon from "../../_assests/emptyIcon.svg"
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useMyContext } from '@/app/context/MyContext';



interface taskObj{
    feedback: {
        geotaggedImages: string[];
    };
    _id: string;
    clientId: {
        _id: string;
        companyName: string;
        email: string;
    };
    agentId: null | string;
    activityId: string;
    customerName: string;
    verificationAddress: string;
    status: string;
    createdAt: string;
}

 function Page() {
    const router = useRouter()
    const endpoint = "https://bayog-production.up.railway.app/v1/admin/tasks"
    const [token, setToken] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [tasks, setTasks] = useState<taskObj[]>([]);
    const [statusFilter, setStatusFilter] = useState<string>('all');
    const getTasks = async (filter: string) =>{
        setStatusFilter(filter)
        try{
            const response = await axios.get(`${filter === "all" ? endpoint : `${endpoint}?statusFilter=${filter}`}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if(response.status === 200){
                setTasks(response.data.data);
            }
        }catch(err){
            setTasks([]);
            console.error("Error fetching tasks:", err);
        }
        finally{
            setIsLoading(false);
        }
    }

    const handleFilter = (filter: string) => {
        setIsLoading(true);
        getTasks(filter);
    }
    useEffect(() => {
        const storedToken = sessionStorage.getItem("token");
        if (storedToken) {
            setToken(storedToken);
        }else{
            router.push('/login')
        }
    }, []);



    useEffect(() => {
        if (token) {
            getTasks('all');
        }
    }, [token]);

    const FileComp = ({id, icon , file, bgColor}:{id: string, icon: StaticImageData, file: string, bgColor: string}) =>{
         const {setIsTaskModalOpen, setTaskId} = useMyContext();
        return (
            <div 
                onClick={() => { setIsTaskModalOpen(true); setTaskId(id)}}
                className='cursor-pointer h-full overflow-auto rounded-md flex flex-row gap-6 px-2 py-2 items-center bg-white'>
                <div className={`flex justify-center items-center ${bgColor} h-[36px] w-[36px] rounded-md`}>
                    <Image className="scale-80" src={icon} alt="" />
                </div>
                <p className='text-base font-semibold'>{file}</p>
            </div>
        )
    }

  return (
            <div className='h-full overflow-auto flex-1 rounded-lg border-[1.5px] border-[#b3b3b3] flex flex-col'>
                {/* <div className='flex flex-row gap-4 px-3 md:px-5 lg:px-6 border-b-[1.5px] border-b-[#b3b3b3]'>
                    <p className='py-3 md:py-5 lg:py-6 text-sm md:text-base leading-none text-[#8a8a8a] hover:text-[#9dc782] hover:border-b hover:border-b-[#9dc782] cursor-pointer'>Companies</p>
                    <p className='py-3 md:py-5 lg:py-6 text-sm md:text-base leading-none text-[#8a8a8a] hover:text-[#9dc782] hover:border-b hover:border-b-[#9dc782] cursor-pointer'>Employees</p>
                </div>   */}
                <div className='p-3 md:p-5 lg:p-6 border-b-[1.5px] border-b-[#b3b3b3]'>
                        <p className='text-base md:text-xl font-semibold leading-none'>Tasks</p>
                    </div>
                <div className='p-3 md:p-5 lg:px-6 lg:py-3 flex flex-col md:flex-row justify-between gap-3 md:gap-0 items-center border-b-[1.5px] border-b-[#b3b3b3]'>
                    <div className='flex flex-row gap-4 items-center'>
                        <p className='text-black font-semibold text-sm sm:text-base'>{tasks.length} tasks</p>
                        <div className='relative h-auto flex-1 md:w-[250px]'>
                            <IoSearch className='absolute text-[#8a8a8a] top-[50%] -translate-y-[50%] left-2' />
                            <input 
                                type="text" 
                                className='w-full border-0 border-white rounded-xl border-[1.5px] bg-white text-[#8a8a8a] py-2 pl-8 pr-2'
                                placeholder='search  tasks'    
                            />
                        </div>
                    </div>
                    {/* <button className='bg-[#9dc782] text-white text-base rounded-lg py-2 px-4'>Add New Tasks</button> */}
                </div>
                <div className='flex flex-col sm:flex-row gap-4 lg:gap-10 items-center px-4 lg:px-6 py-3 bg-white rounded-xl'>
                    <p className='self-start md:self-center text-base font-semibold'>Filter by:</p>
                    <ul className='flex flex-row gap-4 md:gap-6 lg:gap-10 items-center list-none'>
                        <li 
                            onClick={() => handleFilter('all')}
                            className={`cursor-pointer text-base px-4 md:px-6 lg:px-8 py-2 rounded-xl hover:bg-[#485d3a] hover:text-white ${statusFilter === 'all' ? 'bg-[#485d3a] text-white' : 'bg-[#e3e2e2] text-[#0f170a]'}`}
                        >All
                        </li>
                        <li 
                            onClick={() => handleFilter('assigned')}
                            className={`cursor-pointer text-base px-4 md:px-6 lg:px-8 py-2 rounded-xl hover:bg-[#485d3a] hover:text-white ${statusFilter === 'assigned' ? 'bg-[#485d3a] text-white' : 'bg-[#e3e2e2] text-[#0f170a]'}`}
                        >Assigned
                        </li>
                        <li 
                            onClick={() => handleFilter('notassigned')}
                            className={`cursor-pointer text-base whitespace-nowrap px-4 md:px-6 lg:px-8 py-2 rounded-xl hover:bg-[#485d3a] hover:text-white ${statusFilter === 'notassigned' ? 'bg-[#485d3a] text-white' : 'bg-[#e3e2e2] text-[#0f170a]'}`}
                        >Not Assigned
                        </li>
                        <li 
                            onClick={() => handleFilter('completed')}
                            className={`cursor-pointer text-base px-4 md:px-6 lg:px-8 py-2 rounded-xl hover:bg-[#485d3a] hover:text-white ${statusFilter === 'completed' ? 'bg-[#485d3a] text-white' : 'bg-[#e3e2e2] text-[#0f170a]'}`}
                        >completed
                        </li>
                    </ul>
                </div>
                {
                    isLoading
                    ? <div className='flex-1 flex justify-center items-center'>
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#485d3a]"></div>
                    </div>   
                    : tasks.length > 0
                    ?
                    <div className='p-3 md:p-5 lg:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
                        {
                            tasks.map((task: taskObj) => (
                                <FileComp 
                                    key={task._id}
                                    id={task._id}
                                    icon={fileIcon}
                                    file={task.clientId.companyName}
                                    bgColor={"bg-[#562cf1]"}
                                />
                            ))
                        }
                    </div>
                    :
                    <div className='flex-1 flex justify-center items-center'>
                        <div>
                            <Image src={emptyIcon} alt="no clients icon" className='w-[150px] block mb-2 mx-auto' />
                            <p className='text-xl font-semibold mb-2 text-center'>No tasks</p>
                            <p className='text-[#8a8a8a] text-base text-center'>Expect to see your tasks here</p>
                        </div>
                    </div>
                }
            </div>
    
  )
}

export default Page
