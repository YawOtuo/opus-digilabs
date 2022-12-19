import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import logo1 from '../images/logo2eee.png'
// import search from '../images/search.png'
// import $ from 'jquery'


class Navbar extends Component
{


    render()
    {
        return (
            <div class='row  position-sticky align-content-center justify-content-center  w-100' style={{ zIndex: '30' }}>
                {/* <span className='navtitle font-weight-bold' >THE AFRICAN BULLY REGISTRY</span> */}

                <div className='w-100'>
                    <nav class={`navbar navbar-light navbar-expand-lg ${this.props.navbar_dark}`}>
                        {/* <Link class="navbar-brand " to=""><img src={logo1} height='60px' width='60px'></img></Link> */}

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
                                    <Link class="nav-link"  to="/home">Home </Link>
                                </li>


                               
                             
                                <li class="nav-item active">
                                    <Link class="nav-link"  to="/profile">Profile</Link>
                                </li>
                               
                            </ul>
                        </div>
                    </nav>
                </div>

            </div>
        )
    }



}



export default Navbar;