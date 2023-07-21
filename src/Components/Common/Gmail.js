// import React from 'react'
// import { GoKey } from "react-icons/go";
// import { FiSettings } from "react-icons/fi";
// import { AiOutlinePoweroff } from "react-icons/ai";

// function UserGmailProfile() {
//     return (
// <div className='w-[25%] h-[57%] bg-white border rounded-xl shadow-md absolute top-[3%] right-[5%] opacity-100'>
//     <div className='flex flex-wrap justify-center items-center text-center w-48 h-44 ml-24 mt-8 mb-10'>
//         <div className='flex justify-center items-center font-bold text-3xl text-center text-[#FFFF] h-20 w-20 px-2 py-1 rounded-full bg-[#366EFF]'>M</div>
//         <h5 className='text-2xl font-semibold'>Maheshwari B</h5>
//         <p className='text-xl'>maheshwari@gmail.com</p>
//     </div>
//     <hr className='border-2 shadow-lg'/>
//     <div className='ml-10 mt-7'>
//         <p className='flex items-center gap-2 text-xl pb-4'><GoKey className='text-3xl'/>Change Password</p>
//         <p className='flex items-center gap-2 text-xl pb-4'><FiSettings className='text-3xl'/>Settings</p>
//         <p className='flex items-center gap-2 text-xl pb-4'><AiOutlinePoweroff className='text-3xl'/>Log out</p>
//     </div>
// </div>
//     )
// }
// export default UserGmailProfile;



import * as React from 'react';
import Modal from '@mui/material/Modal';
import { GoKey } from "react-icons/go";
import { FiSettings } from "react-icons/fi";
import { AiOutlinePoweroff } from "react-icons/ai";

export default function UserGmailProfile({ open, handleClose }) {

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className='w-[27%] h-[58%] bg-white border rounded-xl shadow-md absolute top-[2%] right-[2%] opacity-100'>
                    <div className='flex flex-wrap justify-center items-center text-center w-48 h-44 ml-28 mt-8 mb-10'>
                        <div className='flex justify-center items-center font-bold text-3xl text-center text-[#FFFF] h-20 w-20 px-2 py-1 rounded-full bg-[#366EFF]'>M</div>
                        <h5 className='text-2xl font-semibold'>Maheshwari B</h5>
                        <p className='text-xl'>maheshwari@gmail.com</p>
                    </div>
                    <hr className='border-2 shadow-lg' />
                    <div className='ml-10 mt-7'>
                        <p className='flex items-center gap-2 text-xl pb-4'><GoKey className='text-3xl' />Change Password</p>
                        <p className='flex items-center gap-2 text-xl pb-4'><FiSettings className='text-3xl' />Settings</p>
                        <p className='flex items-center gap-2 text-xl pb-4'><AiOutlinePoweroff className='text-3xl' />Log out</p>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

