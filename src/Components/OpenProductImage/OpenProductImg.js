import React from 'react'
import Button from '@mui/material/Button';
import ShareIcon from '@mui/icons-material/Share';
import Header from '../Common/Header'
import ListComponent from '../Common/Drawer'
import ForShare from './ForShare';

function OpenProductImg() {

    const [shareOpen, setShareOpen] = React.useState(false);

    const openShareModal = () => {
        setShareOpen(true)
        console.log('open');
    }

    return (
        <div className='mt-2'>
            <Header />
            <div className='flex '>
                <div className='w-1/5 h-screen flex justify-start text-center'>
                    <ListComponent />
                </div>
                <div className='w-3/4 pl-3 absolute end-3'>
                    <div className='flex justify-between px-2 mt-4'>
                        <p className='text-xl font-medium mt-4 pb-3'>Assets(Asset 1)</p>
                        <button onClick={() => openShareModal()} className='h-10 w-24 mr-3 py-0 px-0 border-2 gap-1 text-[#076AFF] border-[#076AFF] bg-white rounded-full focus:outline-none'> <ShareIcon className='pr-1'/>Share
                            <ForShare isOpen={shareOpen} setShareOpen={setShareOpen} />
                        </button>

                    </div>


                    <div>
                        <img src="" alt="" className='h-screen w-[100%] border ' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default OpenProductImg
