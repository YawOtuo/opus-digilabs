import life_pic from '../images/youre_doing_life.png'
import choose_icon1 from '../images/choose_icon1.png'
import choose_icon2 from '../images/choose_icon2.png'

import { ButtonBlue } from './blue_button'
import { ButtonGrey } from './grey_button'
export const HomeSection4 = () =>
{
    return (
        <div className="container-fluid mt-5 pt-3 px-4 px-sm-0">
            <div className="row align-items-start justify-content-center">
                <div className="col-sm-4  pr-sm-5">
                    <div className='row align-items-start-justify-content-start'>
                        <div className='col-3 3'>
                            <img className='img-fluid' src={choose_icon1} />
                        </div>

                        <div className='col-9 '>
                            <h4>Choose <br /> your sections</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros.
                                Aliquam erat volutpat. Praesent pulvinar arcu non lectus dapibus,
                                a pulvinar mauris aliquam.</p>
                        </div>
                        
                    </div>
                    <div>
                    <div className='row align-items-start justify-content-start pt-5 pt-sm-3'>
                        <div className='col-3 '>
                            <img className='img-fluid' src={choose_icon2} />
                        </div>

                        <div className='col-9 '>
                        <h4>Add the <br />images and text you need</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros.
                                Aliquam erat volutpat. Praesent pulvinar arcu non lectus dapibus,
                                a pulvinar mauris aliquam.</p>
                        </div>
                        
                    </div>
                    </div>
                </div>
                <div className="col-sm-5 py-5 py-sm-0 ">
                    <h1 className='font-weight-bold big_font_48'>Create pages using <br /> beautiful components</h1>
                    <div className='py-5 pl-5'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros.
                            Aliquam erat volutpat. Praesent pulvinar arcu non lectus dapibus,
                            a pulvinar mauris aliquam.</p>
                        <ButtonGrey text='Learn More' />
                    </div>
                </div>

            </div>
            <div className="row align-items-center justify-content-center mt-5 mt-sm-0 pt-5 pt-sm-0">
                <div className="col-sm-5">
                    <p>FEATURES</p>
                    <h1 className='font-weight-bold big_font_48'>You're not just doing business. You're doing life</h1>
                    <p className='mt-4 mt-sm-0'>Responsive Components</p>
                    <p className='mt-3 mt-sm-0'>Over 50 sections</p>
                    <p className='mt-3 mt-sm-0'>Handcrafted pages</p>
                </div>
                <div className="col-sm-4 text-center">
                    <img className='img-fluid' src={life_pic} />
                </div>
            </div>
        </div>
    )
}