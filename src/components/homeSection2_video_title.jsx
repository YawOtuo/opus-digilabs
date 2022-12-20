import video_image from '../images/inform_users_with_video_sections.png'
import arrow_vector from '../images/arrow_vector.png'

import bell_vector from '../images/bell_vector.png'

import { ButtonBlue } from './blue_button'
export const HomeSection2 = () =>
{
    return (
        <div className="container-fluid px-4 px-sm-0 mt-5 mt-sm-0 pt-5 pt-sm-0">

            <div className="row align-items-center justify-content-center pt-5">
                <div className="col-sm-8 px-5 px-sm-0">
                    <div className='grey_flair'>

                    </div>
                    <p>VIDEO TITLE</p>
                    <h1 className='mt-2 mb-5 big_font_48'>Inform users with video sections</h1>
                    <img className='img-fluid' src={video_image} alt="" />
                </div>
            </div>
            <div className="row align-items-center justify-content-center mb-5 mb-sm-0">
                <div className='grey_flair2'>

                </div>
                <div className='col-sm-4'></div>
                <div className="col-sm-4 mt-4 mb-2 px-5 px-sm-0 ">

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros.
                        Aliquam erat volutpat. Praesent pulvinar arcu non lectus dapibus,
                        a pulvinar mauris aliquam.</p>
                </div>
            </div>
            <div className="row align-items-center justify-content-center mb-5 mt-5 pt-5">
                <div className="col-sm-5 mt-5 mt-sm-0 px-5 px-sm-0">
                    <h1 className='big_font_48'>Make your site better with Opus</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros.
                        Aliquam erat volutpat. Praesent pulvinar arcu non lectus dapibus,
                        a pulvinar mauris aliquam.</p>

                    <span className='my-5 my-sm-0'><ButtonBlue text='Learn More' /></span>
                </div>
                <div className="col-sm-4 mt-5 mt-sm-0 px-5 px-sm-5">
                    <div className='py-5'>
                        <img className='img-fluid' src={arrow_vector} alt="" />

                        <h3 className='big_font_32' style={{ 'fontSize': '24' }}>

                            Build or Customize a Website in Minutes</h3>
                    </div>
                    <div className='py-5 py-sm-3'>
                        <img className='img-fluid' src={bell_vector} alt="" />

                        <h3 className='big_font_32' style={{ 'fontSize': '24' }}>
                            Our UI Kit was made for creativity</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}