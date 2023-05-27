import React, { useState } from 'react'
import Card from './Card'

const Modal = () => {
    let [s,sets]=useState("light")
    var f =()=>{
        if(s==="light") sets("dark")
        else sets("light")
    }
    return (
        <div>
            <div className="modal-dialog modal-lg ">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            Username
                        </h5>
                        <br/>
                        <button className='btn btn-danger' onClick={f}>{s}</button>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                    </div>
                    <div className={`modal-body bg-${s}`} ><Card/></div>
                    
                </div>
            </div>
        </div>

    )
}

export default Modal
