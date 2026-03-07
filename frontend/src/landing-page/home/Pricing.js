import React from 'react';

function Pricing() {
    return (
        <div className='container'>
            <div className='row mb-3 mt-3'>
                <div className='col-5'>
                    <h1 className='mb-3 fs-2'> Unbeatable Price</h1>
                    <p className='text-muted fs-5'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges</p>
                    <a href=''>See Pricing</a>
                </div>
                <div className='col-2'></div>
                <div className='col-5'>
                    <div className='col border p-3 text-center'>
                        <h1>₹0</h1>
                        <p className='text-muted text-center '>Free Account Opening</p>
                    </div>
                    <div className='col border p-3 text-center'>
                        <h1>₹20</h1>
                        <p className='text-muted text-center '>IntraDay and F&O</p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;