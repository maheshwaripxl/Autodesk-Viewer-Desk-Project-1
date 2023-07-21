import React, {useState} from 'react'
import Header from '../Common/Header';
import Button from '@mui/material/Button';
import ListComponent from '../Common/Drawer';
import AddAsset from './Asset';

function Location() {

    const [open, setOpen] = useState(false);
    const [check, setCheck] = useState(false);

    const addAssets = () => {
        // setOpen(true)
        setOpen(!open);
        console.log('open');
    }

    return (
        <div className='mt-2'>
            <Header isChecked={check} setCheck={setCheck} />
            <div className='flex '>
                <div className='w-1/5 h-screen flex justify-start text-center'>
                    <ListComponent />
                </div>
                <div className='w-3/4 pl-3 absolute end-3'>
                    <h2 className='text-xl font-medium mt-7 pt-2'>New Location</h2>
                    <h5 className='text-lg mt-2'>Location</h5>
                    <div className='flex gap-3 my-4'>
                        <input type="text" className='w-2/4 border rounded-md' />
                        <button className='rounded-lg px-7 py-2 tracking-wider font-normal bg-[#37D061] text-[#FFFFFF] focus:outline-none'>Upload Image</button>
                    </div>
                    <Button onClick={() => addAssets()} className='bg-white rounded-full focus:outline-none'>
                        Click here to Add Assets
                        <AddAsset isOpen={open} setOpen={setOpen} />
                    </Button>
                    {/* <a href="">Click here to Add Assets</a> */}
                    <div style={{ marginTop: "35%" }}>
                        <button className='w-36 border rounded-lg text-center focus:outline-none text-[#FFFFFF] bg-[#076AFF]'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Location;
