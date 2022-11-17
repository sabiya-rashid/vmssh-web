import React from 'react';
import './Banner.css'
import Donate from '../Donate';

const Banner = () => {
    return (
        <section className='home-banner container-xxl px-0'>
            <div className="home-grad">
                <div className='container h-100 px-0 py-5'>
                    <div className='row mx-0 h-100'>
                        <div className='col-md-12 mb-md-0 mb-3 align-self-center'>
                            <div className='text d-flex flex-column align-items-md-start text-white align-items-center'>
                                <h1 className='mb-5'>Help Kashmiri children not to Die from Heart Disease</h1>
                                <h2 className='bg-blue px-3 mb-3'>Donate to Build First Not For Profit Hospital in Kashmir</h2>
                                <Donate />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Banner;