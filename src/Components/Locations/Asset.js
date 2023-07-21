// import React from 'react'
// // import { TextField } from "@mui/material";

// function Asset() {
//     return (
// <div className='absolute top-[30%] left-[29%] text-center w-[38%] h-[35%] py-6 pl-7 border-4 rounded-xl shadow-md' >
//     <div className='flex justify-center items-center pb-6'>
//         <p className='text-center text-lg font-semibold'>New Asset</p>
//         <div className='absolute right-2 font-bold mr-5 rounded-full'>
//             <button className='pt-0 pb-0.5 px-2 bg-white font-bold border-2 border-black rounded-full hover:border-black'>x</button>
//         </div>
//     </div>
//     <div className='flex gap-3 w-[95%]'>
//         <input
//             id="outlined-basic"
//             placeholder="Enter Asset Name"
//             variant="outlined"
//             className="w-[85%] pl-3 border p-2 border-[#6D6D6D] rounded-xl"
//         />
//         <button className='font-bold text-xl text-[#FFFFFF] bg-[#37D061] rounded-xl px-4 py-3 w-44'>Add Image</button>
//     </div>
//     <div className='flex'>
//         <button className='font-bold text-xl text-[#FFFFFF] bg-[#076AFF] rounded-xl mt-4 w-[95%]'>Submit</button>
//     </div>
// </div>
//     )
// }

// export default Asset;

import * as React from 'react';
import Modal from '@mui/material/Modal';


// const style = {
//     position: 'absolute',
//     top: '2%',
//     left: '1%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
// };

export default function AddAsset({ isOpen, setOpen }) {
    const handleClose = () => {
        setOpen(!isOpen);

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
                        <p className='text-center text-lg font-semibold'>New Asset</p>
                        <div className='absolute right-2 font-bold mr-5 rounded-full'>
                            <button onClick={() => handleClose(isOpen)} className='pt-0 pb-0.5 px-2 bg-white font-bold border-2 border-black rounded-full hover:border-black'>x</button>
                        </div>
                    </div>
                    <div className='flex gap-3 w-[95%]'>
                        <input
                            id="outlined-basic"
                            placeholder="Enter Asset Name"
                            variant="outlined"
                            className="w-[85%] pl-3 border p-2 border-[#6D6D6D] rounded-xl"
                        />
                        <button className='font-bold text-xl text-[#FFFFFF] bg-[#37D061] rounded-xl px-4 py-3 w-44'>Add Image</button>
                    </div>
                    <div className='flex'>
                        <button className='font-bold text-xl text-[#FFFFFF] bg-[#076AFF] rounded-xl mt-4 w-[95%]'>Submit</button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}


