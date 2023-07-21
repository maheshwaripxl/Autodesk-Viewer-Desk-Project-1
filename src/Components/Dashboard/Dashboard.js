import React, { useState } from 'react'
import ListComponent from '../Common/Drawer';
import india from '../../Images/LocationImage/India.png'
import qatar from '../../Images/LocationImage/qatar.png'
import southAfrica from '../../Images/LocationImage/south africa.png'
import canada from '../../Images/LocationImage/canada.png'
import USA from '../../Images/LocationImage/USA.png'
import Japan from '../../Images/LocationImage/Japan.png'
import Germany from '../../Images/LocationImage/Germany.png'
import LocationImage from './LocationImage';
import { useNavigate } from 'react-router-dom';
import Header from '../Common/Header';

function Dashboard() {

    const [check, setCheck] = useState(false);
    const navigate = useNavigate();

    return (
        <div className='mt-2 '>

            <Header isChecked={check} setCheck={setCheck}/>

            <div className='flex'>
                <div className='w-1/5 h-screen flex justify-start text-center'>
                    <ListComponent />
                </div>
                <div className='w-4/5 absolute end-3'>
                    <div className='flex justify-between px-2 mt-7'>
                        <h2 className='text-xl font-medium pl-2 pt-2'>Locations</h2>
                        <button className='rounded-full focus:outline-none px-5 py-2 tracking-wider font-normal bg-[#37D061] text-[#FFFFFF] ' onClick={() => navigate('/location')}>Add Location + </button>
                    </div>
                    <div className='flex flex-wrap'>
                        <LocationImage name="Qatar" img={qatar} />
                        <LocationImage name="South Africa" img={southAfrica} />
                        <LocationImage name="Canada" img={canada} />
                        <LocationImage name="USA" img={USA} />
                        <LocationImage name="India" img={india} />
                        <LocationImage name="Japan" img={Japan} />
                        <LocationImage name="Germany" img={Germany} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
