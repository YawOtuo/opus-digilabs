import homepic from '../images/homepage_pic.png'
import apostrophe from '../images/apostrophe.png'

import { ButtonBlue } from './blue_button'
import { useEffect, useState } from 'react'
import { url } from './weburl'
import axios from 'axios'
export const HomeMessage = () =>
{
    const [headerTitle, setHeaderTitle] = useState('Built for businesses')
    const [public_id, setPublicId] = useState('homepage_pic_oznsfu')

    useEffect(() =>
    {
        axios
            .get(`${url}api/headers/header-details`)
            .then((res) =>
            {
                setHeaderTitle(res.data[0].heading)
                // console.log(res.data[0].heading)
            })
            .catch((err) => console.log(err))
    }, [headerTitle])

    useEffect(() =>
    {
        axios
            .get(`${url}api/headers/header-details`)
            .then((res) =>
            {
                setPublicId(res.data[0].public_id)
                console.log(res.data[0].public_id)
            })
            .catch((err) => console.log(err))
    }, [public_id])
    return (
        <div className="container-fluid  text-white position-relative ">
            <div class="row align-items-start justify-content-center pt-5  pt-sm-5 pb-sm-1 homeMessageBg">
                <div className="col-sm-5 text-center text-sm-left mt-sm-5 
                pt-sm-5 px-sm-5">
                    <h1 className='font-weight-bold px-5 px-sm-0 big_font_48' style={{ fontSize: "64px" }}>
                        {headerTitle}</h1>
                    <p className='px-4 px-sm-0 big_font_48'
                        style={{ fontSize: "18px", lineHeight: "36px", letterSpacing: "-0.36px" }}>
                        Opus includes everything you need to build a beautiful website for your business. Built to perform and
                        look good doing so.
                    </p>
                    <div className="row align-items-center justify-content-start mt-5 mt-sm-0">
                        <div className='col-sm-4'>
                            <ButtonBlue text='Learn More' />
                        </div>
                        <div className='col-sm-6 mt-3'>
                            <p>Explore Pages</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-5 my-sm-5 " style={{ zIndex: 10 }}>
                    <img className='img-fluid homepic '
                        src={`https://res.cloudinary.com/daurieb51/image/upload/v1672091116/${public_id}.png`}

                        alt="header image" />

                    <div className="col-sm-8 d-none d-md-block position-absolute frank p-5">

                        <p className='big_font_16' >I felt like i couldn't grow until I moved to Opus. Now i am
                            encouraged to sell more with them.

                        </p>
                        <div className='row align-items-center justify-content-start'>
                            <div className='col-sm-8'>
                                <h3 className='big_font_16' style={{ fontSize: 24, lineHeight: "32px", letterSpacing: "-0.16px" }}>Frank Dublin</h3>
                                <h4 className='big_font_16' >CEO<span className='opus_blue'>@STAMPS</span ></h4>
                            </div>
                            <div className='col-sm-4'>
                                <img className='img-fluid homepic '
                                    src={apostrophe}
                                    alt="Header image"

                                />



                            </div>
                        </div >
                    </div>
                </div>
                <div className='blue_box1 d-none d-sm-block '>

                </div>
                <div className='grey_box1 d-none d-sm-block ' style={{ zIndex: 5 }}>
                    <div className='blue_box2' style={{ zIndex: 5 }}>

                    </div>
                </div>


            </div>
            <div className='white_box1 d-none d-sm-block '>
                <div className='white_box2 none d-sm-block '>
                    <div className='blue_box3 none d-sm-block '>
                        <div className='blue_box4 none d-sm-block '>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}