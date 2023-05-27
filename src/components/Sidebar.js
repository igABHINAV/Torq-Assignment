import React, { useState } from 'react'
import Messangers from './Messangers'
const Sidebar = () => {
    let [t,sett]=useState(false)
    let Tog = ()=>{
        if(t===false) sett(true)
        else sett(false)
    }
    return (
        <div>
            <div
                className={`d-flex flex-column flex-shrink-0 p-3 text-light ${(t)?`bg-secondary`:`bg-dark`}`}
                style={{ width: 280, height: '760px' }}
            >
                <a
                    href="/"
                    className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
                >

                    <span className="fs-4">CHAT BOX</span>
                </a>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <a href="/" className="nav-link active" aria-current="page">

                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="nav-link text-white">

                            About
                        </a>
                    </li>
                    <li>
                       <button className='btn btn-danger' onClick={Tog}>Theme</button>
                    </li>

                    <li>
                        <button className="nav-link  text-warning" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasRight"
                            aria-controls="offcanvasRight">

                            Chat
                        </button>
                    </li>

                </ul>
                <hr />
            </div>
            <div
                className="offcanvas offcanvas-end"
                tabIndex={-1}
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
            >
                <div className={`offcanvas-header ${t?('text-dark'):('bg-dark text-success')}`}>
                    <h5 id="offcanvasRightLabel">Messages</h5>
                    <button
                        type="button"
                        className="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    />
                </div>
                <div className={`offcanvas-body ${(t)?'':'bg-dark'}`}><Messangers t={t}/></div>
            </div>


        </div>
    )
}

export default Sidebar
