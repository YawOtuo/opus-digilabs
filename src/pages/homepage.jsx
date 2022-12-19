import React from 'react';
import Navbar from '../components/navbar';
import '../css_files/App.css'


export const HomePage = () =>
{
    return (
        <div className='container-fluid bg-light text-dark'>

            <div className='row align-items-center justify-content-center'>

                <div className='col-sm-12'>
                    <Navbar/>
                </div>
            </div>

        </div>
     
    )
}