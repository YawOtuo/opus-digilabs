import project_management_pic from '../images/project_management.png'
import advanced_analytics_pic from '../images/advanced_analytics.png'
import marketing_and_dashboard_pic from '../images/marketing_dashboard.png'
import { ButtonBlue } from './blue_button'


export const HomeSection3 = () =>
{
    return (
        <div className="container-fluid py-5 homeMessageBg text-white mb-5 mb-sm-0">
            <div className="row align-items-center justify-content-around mb-4 px-5 px-sm-0 text-center 
            text-sm-left">
                    <h1 className='big_font_48' >Ways to work with us</h1>
                    <ButtonBlue text='Get Started'/>

            </div>
            <div className="row align-items-center justify-content-center px-3
             px-sm-0 text-center text-sm-left mt-5 mt-sm-0">
                <div className="col-sm-3 ">
                    <img className='img-fluid' src={project_management_pic} alt="" />
                    <div className='my-3 text-left px-4'>
                        <h4>Project Management</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros.
                            Aliquam erat volutpat. Praesent pulvinar arcu non lectus dapibus,
                            a pulvinar mauris aliquam.</p>
                    </div>
                </div>
                <div className="col-sm-3 mt-5 mt-sm-0">
                    <img className='img-fluid' src={advanced_analytics_pic} alt="" />
                   <div className='my-3 text-left px-4'>
                        <h4>Advanced Analytics</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros.
                            Aliquam erat volutpat. Praesent pulvinar arcu non lectus dapibus,
                            a pulvinar mauris aliquam.</p>
                   </div>
                </div>
                <div className="col-sm-3 mt-5 mt-sm-0">
                    <img className='img-fluid' src={marketing_and_dashboard_pic} alt="" />
                    <div className='my-3 text-left px-4'>
                        <h4>Marketing & Dashboard</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros.
                            Aliquam erat volutpat. Praesent pulvinar arcu non lectus dapibus,
                            a pulvinar mauris aliquam.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}