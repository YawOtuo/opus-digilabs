import React, { Component } from 'react';
import { Link } from "react-router-dom";
import opus_vector from '../images/Vector.png'
import { ButtonBlue } from './blue_button';
// import logo1 from '../images/logo2eee.png'
// import search from '../images/search.png'
// import $ from 'jquery'


class Navbar extends Component
{


    render()
    {
        return (
            <div className='container'>
                <div class='row  position-sticky align-content-center justify-content-center  px-3' style={{ zIndex: '30' }}>
                    <div className='w-100'>
                        <nav class={`navbar navbar-light navbar-expand-lg ${this.props.navbar_dark}`}>
                            <Link class="navbar-brand " to="/">
                                <img className='img-fluid' src={opus_vector} />
                            </Link>

                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="w-100 align-items-center justify-content-center collapse navbar-collapse" id="navbarNavDropdown">
                              
                                <ul class="navbar-nav w-100 align-self-center">
                                    <li class="nav-item active ml-5" >
                                        <Link class="nav-link big_font_16" style={{fontSize: 14}} to="/">Overview </Link>
                                    </li>




                                    <li class="nav-item active  mx-5">
                                        <Link class="nav-link big_font_16" style={{fontSize: 14}} to="/">Pages</Link>
                                    </li>

                                    <li class="nav-item active  mr-5">
                                        <Link class="nav-link big_font_16" style={{fontSize: 14}} to="/">Template</Link>
                                    </li>
                                    <li class="nav-item active  mr-5">
                                        <Link class="nav-link big_font_16" style={{fontSize: 14}} to="/admin">Admin</Link>
                                    </li>

                                   <ul className='navbar-nav ml-auto'>
                                        <li class="nav-item active ml-auto">
    
                                            <ButtonBlue text='Contact Us' extra_class='contact'/>
                                        </li>
                                   </ul>
                                </ul>
                            </div>
                        </nav>
                    </div>

                </div>
            </div>
        )
    }



}



export default Navbar;