import homepic from '../images/homepage_pic.png'
import { ButtonBlue } from './blue_button'
export const HomeMessage = () =>
{
    return (
        <div className="container-fluid homeMessageBg text-white">
            <div class="row align-items-center justify-content-center pt-5 py-sm-0">
                <div className="col-sm-4 text-center text-sm-left">
                    <h1 className='font-weight-bold px-4 px-sm-0'>Built for enterprise businesses</h1>
                    <p className='px-4 px-sm-0'>Opus includes everything you need to build a beautiful website for your business. Built to perform and
                        look good doing so.
                    </p>
                    <div className="row align-items-center justify-content-start mt-5">
                        <div className='col-sm-4'>
                            <ButtonBlue text='Learn More' />
                        </div>
                        <div className='col-sm-6 my-3'>
                            <p>Explore Pages</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <img className='img-fluid' src={homepic} />

                    <div className="col-sm-8 d-none d-sm-block position-absolute frank p-5">
                        <p>I felt like i couldn;t grow until I moved to Opus. Now i am
                            encouraged to sell more with them.

                        </p>
                        <h3>Frank Dublin</h3>
                        <h4>CEO@STAMPS</h4>
                    </div>
                </div>

            </div>
        </div>
    )
}