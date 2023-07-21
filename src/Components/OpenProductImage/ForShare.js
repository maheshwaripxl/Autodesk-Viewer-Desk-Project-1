
import * as React from 'react';
import Modal from '@mui/material/Modal';
import ShareIcon from '@mui/icons-material/Share';
import { BsLink45Deg } from "react-icons/bs";


export default function ForShare({ isOpen, setShareOpen }) {
    const handleClose = () => {
        // setShareOpen(!isOpen);
        setShareOpen(false)
        console.log('close');
    };

    return (
        <div>
            <Modal
                open={isOpen}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className='absolute top-[30%] left-[29%] text-center bg-white w-[38%] h-[35%] py-6 pl-7 border rounded-xl shadow-md' >
                    <div className='flex justify-center items-center pb-6'>
                        <p className='h-10 w-24 mr-3 py-0 px-0 gap-1 text-[#076AFF] text-xl tracking-wide'> <ShareIcon className='pr-1'/>Share</p>
                        <div className='absolute right-2 font-bold mr-5 rounded-full'>
                            <button onClick={() => handleClose()} className='pt-0 pb-0.5 px-2 bg-white font-bold border-2 border-black rounded-full hover:border-black'>x</button>
                        </div>
                    </div>
                    <div className='flex gap-3 w-[95%]'>
                        <input
                            id="outlined-basic"
                            placeholder="Enter email id to invite"
                            variant="outlined"
                            className="w-[85%] pl-3 border p-2 border-[#6D6D6D] rounded-xl focus:outline-none"
                        />
                        <button className='text-xl text-[#FFFFFF] bg-[#076AFF] rounded-xl px-4 py-3 w-44 focus:outline-none'>Send Invite</button>
                    </div>
                    <div className='flex'>
                        <button className='flex justify-center items-center gap-1 mt-4 w-[95%] font-normal text-xl text-[#076AFF] border-2 border-[#076AFF] rounded-xl focus:outline-none'><BsLink45Deg className='mt-1 text-3xl' />Copy Link</button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}


