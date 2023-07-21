import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { FaBars } from "react-icons/fa";
import logo from '../../Images/logo.png'
import Search from '../Common/Search';
import UserGmailProfile from '../Common/Gmail';

function Header({isChecked, setCheck}) {

    const [open, setOpen] = useState(true)
    const handleClose = () => {setOpen(false)}

    const OpenGmailProfile = () => {
        setCheck(true);
        // setCheck(!isChecked);
        console.log();
    }

    return (
        <div>
            <header className='flex justify-between items-center px-2 border-2 shadow-sm shadow-[#6D6D6D]'>
                <div className='w-4/6 flex justify-between'>
                    <div className='flex gap-2'>
                        <FaBars className='mt-3 ml-3' />
                        <img src={logo} alt="" className='h-10 w-10' />
                    </div>
                    <div className='border rounded-full w-3/4 pl-7 pr-2 py-1'>
                        <Search />
                    </div>
                </div>

                <Button onClick={OpenGmailProfile} className='bg-white rounded-full focus:outline-none'>
                    <div className='flex justify-center items-center font-semibold text-lg text-center text-[#FFFF] h-10 w-10 px-2 pt-1 rounded-full bg-[#366EFF]'>M</div>
                    {isChecked === true ? <UserGmailProfile open={open} handleClose={handleClose} /> : null}
                </Button>
            </header>
        </div>
    )
}

export default Header;
