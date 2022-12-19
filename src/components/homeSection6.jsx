import high_converting_pic from '../images/high_converting_template.png'
import clean_look_pic from '../images/clean_minimal_professional_look.png'
import journey_possible_pic from '../images/opus_made_our_journey_possible.png'
import { ButtonBlue } from './blue_button'
import { ButtonGrey } from './grey_button'


export const HomeSection6 = () =>
{
    return (
        <div className="container-fluid mt-5 mt-sm-3 pt-5 pt-sm-0 px-4 ">
            <div class="row align-items-center justify-content-around my-5 pt-5 text-center text-sm-left ">
                <div className='col-sm-2'><h1 className='font-weight-bold'>Resources</h1></div >
                <div className='col-sm-2'><ButtonBlue text='Get Started' /></div>
            </div>
            <div className="row align-items-center justify-content-center text-center">
                <div className="col-sm-3 ">
                    <img className='img-fluid ' src={high_converting_pic} alt="" />
                    <div className='my-3 text-left px-4 px-sm-0'>
                        <h4>A high-converting, high-performing template</h4>
                        <p>Turpis senectus amet tortor in sodates odio tettus.
                            Pretium id amet, euismod sceteriscue vetit.</p>
                        <ButtonGrey text="Read Article"/>
                    </div>
                </div>
                <div className="col-sm-3 pt-5 pt-sm-0">
                    <img className='img-fluid' src={clean_look_pic} alt="" />

                    <div className='my-3 text-left px-4 px-sm-0'>
                        <h4>With a clean, minimal and professional look</h4>
                        <p>Turpis senectus amet tortor in sodates odio tettus.
                            Pretium id amet, euismod sceteriscue vetit.</p>
                        <ButtonGrey text="Read Article"/>

                    </div>
                </div>
                <div className="col-sm-3 pt-5 pt-sm-0">
                    <img className='img-fluid' src={journey_possible_pic} alt="" />
                    <div className='my-3 text-left px-4 px-sm-0'>

                        <h4>Opus made our journey possible</h4>
                        <p>Turpis senectus amet tortor in sodates odio tettus.
                            Pretium id amet, euismod sceteriscue vetit.</p>
                        <ButtonGrey text="Read Article"/>

                    </div>
                </div>
            </div>


        </div>
    )
}