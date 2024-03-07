import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar(props) {

    //Change Nav Color When Scroll
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 50) {
            setColor(true)
        }
        else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)
    return (
        <>
            <nav class={color ? 'navbar navbar-expand-lg fixed-top  header-bg  ' : 'navbar navbar-expand-lg fixed-top'}>
                <div class="container-fluid">
                    <Link class="navbar-brand" to="home"><i class="fa-solid fa-clapperboard"></i> MOViX</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                            {props.userData ? <>

                                <li class="nav-item">
                                    <NavLink class="nav-link" to='/home' aria-current="page">HOME</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink class="nav-link" to='/movies'>MOVIES</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink class="nav-link" to='/tvshows'>TV SHOWS</NavLink>
                                </li>
                                {/* <li class="nav-item">
                                    <NavLink class="nav-link" to='/people'>PEOPLE</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink class="nav-link" to='/about'>ABOUT</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink class="nav-link" to='/contacts'>CONTACTS</NavLink>
                                </li> */}

                            </> : ''}

                        </ul>
                    </div>
                    <div class="action  ">
                        <ul class="d-flex align-items-center">
                            {props.userData ? <>
                                <li class="search">
                                    <div class="panel">
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                        <input type="text" placeholder="Find Favorite Movie" />
                                    </div>
                                </li>
                                <li className='log-out' onClick={props.logOut}>
                                    <span>Log out</span><i class="fa-solid fa-right-from-bracket"></i>
                                </li>
                            </> : <>
                                <li class="lang">
                                    <div class="icon"><i class="fa-solid fa-globe me-1"></i>EN</div>
                                </li>
                                <li class="btn-signin"><Link to="login">Login</Link></li>
                            </>}

                        </ul>
                    </div>
                </div>

            </nav>
        </>
    )
}
