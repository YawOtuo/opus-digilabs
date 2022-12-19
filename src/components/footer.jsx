import { ButtonBlue } from "./blue_button"
import opus_vector from '../images/Vector.png'


export const Footer = () =>
{
    return (
        <div className="container mt-5 pt-5 px-5 px-sm-0">
            <div class="row align-items-center justify-content-start my-5">
                <img className='img-fluid' src={opus_vector} />

                opus
            </div>
            <div class="row align-items-start justify-content-start">
                <div className="col-sm-2">
                    <p>OVERVIEW</p>
                    <p>Overview</p>
                    <p>Landings</p>
                    <p>Company</p>
                    <p>Pricing</p>
                    <p>CMS Pages</p>
                    <p>Accounts</p>
                    <p>Buy for Figma</p>
                </div>
                <div className="col-sm-2">
                    <p>PAGES</p>
                    <p>Landing 1</p>
                    <p>Landing 2</p>
                    <p>Landing 3</p>
                    <p>Company 1</p>
                    <p>Company 2</p>
                    <p>Company 3</p>
                    <p>Blog 1</p>
                    <p>Blog 2</p>
                    <p>Contact 1</p>
                    <p>Contact 2</p>
                    <p>Contact 3</p>
                </div>
                <div className="col-sm-2">
                    <p>PAGES</p>
                    <p>Case Studies</p>
                    <p>Careers</p>
                    <p>Pricing 1</p>
                    <p>Pricing 2</p>
                    <p>Pricing 3</p>
                    <p>Company 3</p>
                    <p>Login</p>
                    <p>Register</p>
                    <p>Forgot password</p>
                    <p>Blog Post</p>
                    <p>Team Member</p>
                    <p>Case Study</p>
                    <p>Job Post</p>
                </div>
                <div className="col-sm-4">
                    <div className="row align-items-center justify-content-center">
                        <input placeholder='Email Address'></input>
                        <ButtonBlue text='Get Started' />
                    </div>
                    <div className="row align-items-center justify-content-center mt-4">
                        <div className="col-sm-6">
                            <p>OPUS FOR WEBFLOW</p>
                            <h4 className="opus_blue">Lorem Ipsum</h4>
                        </div>
                        <div className="col-sm-6">
                            <p>OPUS FOR FIGMA</p>
                            <h4 className="opus_blue">Lorem Ipsum</h4>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-center mt-5">
                        <p> c Template by <span className="opus_blue">Lorem</span>
                         - Powered by <span className="opus_blue" >Ipsum</span></p>
                    </div>
                </div>
            </div>
            <div className="row align-items-center justify-content-start">
                <p className="pr-5">Style Guide</p>
                <p  className="pr-5">Licence</p>
                <p  className="pr-5">Changelog</p>
            </div>
        </div>
    )
}