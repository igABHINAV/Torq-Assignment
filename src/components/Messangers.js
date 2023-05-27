
import Modal from './Modal'
import Di from '../data/TexT'
import { useState } from 'react'


const Messangers = (props) => {
    console.log(Di)
    return (
        <div className='bg-dark'>
            <div className="list-group bg-dark ">


                <button

                    className="list-group-item list-group-item-action "
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    aria-current="true"
                >
                    <div className="d-flex w-100 justify-content-between ">
                        <h5 className="mb-1">Person 1</h5>
                        <small>5 min ago</small>
                    </div>
                    <p className="mb-1">text</p>
                </button>


                <button className="list-group-item list-group-item-action"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    aria-current="true">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Person 2</h5>
                        <small className="text-muted">1 hour ago</small>
                    </div>
                    <p className="mb-1">text</p>
                </button>


                <button className="list-group-item list-group-item-action"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    aria-current="true">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Person 3</h5>
                        <small className="text-muted">3 days ago</small>
                    </div>
                    <p className="mb-1">text</p>
                </button>


            </div>



            <div
                className="modal fade "
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"

            >
                <Modal />
                </div>


        </div>
    )
}

export default Messangers
