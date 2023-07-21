import React, { useState } from 'react'
import Header from '../Common/Header';
import ProductImage from './ProductImage';
import product1 from '../../Images/ProductImage/product 1.png'
import product2 from '../../Images/ProductImage/product 2.png'
import ListComponent from '../Common/Drawer';

function Product() {

    const [check, setCheck] = useState(false);
    
    return (
        <div className='mt-2'>
            <Header isChecked={check} setCheck={setCheck} />
            <div className='flex '>
                <div className='w-1/5 h-screen flex justify-start text-center'>
                    <ListComponent />
                </div>
                <div className='w-3/4 pl-3 absolute end-3'>
                    {/* <div className='flex justify-between px-2 mt-7'> */}
                    <p className='text-xl font-medium mt-4 pt-2'></p>
                    {/* </div> */}
                    
                    <div className='flex flex-wrap'>
                        <ProductImage name="Product 1" img={product1}/>
                        <ProductImage name="Product 2" img={product2}/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Product;
