import React from 'react'

function LocationImage({ name, img }) {
    return (
        <div>
            <img src={img} alt="" className='h-46 w-64 rounded-2xl mx-2 mt-9' />
            <div className='flex justify-between w-64'>
                <div className='pl-4 pt-2'>
                    <p className='font-bold'>{name}</p>
                    <p>1 Hr</p>
                </div>
                <p className='text-2xl font-bold'>...</p>
            </div>
        </div>
    )
}

export default LocationImage;
