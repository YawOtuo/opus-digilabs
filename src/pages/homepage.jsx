import React from 'react';
import {  HomeSection1 } from '../components/homeSection1';
import { HomeMessage } from '../components/homeMessage';
import Navbar from '../components/navbar';
import '../css_files/App.css'
import { HomeSection2 } from '../components/homeSection2_video_title';
import { HomeSection3 } from '../components/homeSection3_ways';
import { HomeSection4 } from '../components/homeSection4';
import { HomeSection5 } from '../components/homeSection5_knowledge';
import { HomeSection6 } from '../components/homeSection6';
import { Footer } from '../components/footer';


export const HomePage = () =>
{
    return (
        <div className='text-dark'>

            <div className='row align-items-center justify-content-center'>

                <div className='col-sm-'>
                    <Navbar/>
                    <HomeMessage/>
                    <HomeSection1/>
                    <HomeSection2/>
                    <HomeSection3/>
                    <HomeSection4/>
                    <HomeSection5/>
                    <HomeSection6/>
                    <Footer/>
                </div>
            </div>

        </div>
     
    )
}