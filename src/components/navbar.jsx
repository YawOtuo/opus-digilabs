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
                <div class='row  position-sticky align-content-center justify-content-center  w-100' style={{ zIndex: '30' }}>
                    <div className='w-100'>
                        <nav class={`navbar navbar-light navbar-expand-lg ${this.props.navbar_dark}`}>
                            <Link class="navbar-brand " to="">
                                <img className='img-fluid' src={opus_vector} />
                            </Link>

                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="w-100 align-items-center justify-content-center collapse navbar-collapse" id="navbarNavDropdown">
                                <ul class="navbar-nav text-center d-none d-sm-block">
                                    <li class="nav-item active" >
                                        <span className='navtitle' >opus</span>

                                    </li>
                                </ul>
                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item active" >
                                        <Link class="nav-link" to="/home">Overview </Link>
                                    </li>




                                    <li class="nav-item active">
                                        <Link class="nav-link" to="/profile">Pages</Link>
                                    </li>

                                    <li class="nav-item active">
                                        <Link class="nav-link" to="/profile">Template</Link>
                                    </li>

                                    <li class="nav-item active">

                                        <ButtonBlue text='Contact Us' />
                                    </li>
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