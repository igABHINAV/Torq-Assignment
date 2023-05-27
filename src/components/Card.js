import React, { useState } from 'react'
import Di from '../data/TexT'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';


const Card = () => {

    let [s, sets] = useState("")
    let oc = (e) => {
        sets(e.target.value)
    }

    let [flag,setflag]=useState(false)
    let Toggle = ()=>{
        if(flag===true) setflag(false)
        else setflag(true)
    }

    let f = () => {

        Di.push(s)
        console.log(Di)
        sets("")
    }

    return (
        <>

            <div className='container text-right' style={{ width: "50%" }}>
                <div className="card">
                    <div className="card-body " style={{ "textAlign": "left" }}>Hi</div>

                </div>
                <br />
                <div className="card">
                    <div className="card-body " style={{ "textAlign": "left" }}>How are you !</div>

                </div>
                <br />
                {Di.map((items) => {
                    return (

                        <>
                        {(flag)?<><div className="card">
                                <div className="card-body " style={{ "textAlign": "right" }}>{items}
                              </div>

                            </div>
                            <br /></>:<><div className="card">
                                <div className="card-body " style={{ "textAlign": "right" }}><SyntaxHighlighter language="javascript" style={solarizedlight}>{items}</SyntaxHighlighter>
                              </div>

                            </div>
                            <br /></>}
                            
                        </>
                    )
                })}



                <div className="modal-footer" >
                    <input class="form-control me-2 " type="text" value={s} onChange={oc} placeholder="chat" aria-label="Search" style={{"overflow":"auto"}}/>
                    <button type="button" className="btn btn-primary" onClick={f} >
                        Send
                    </button>
                    <button type="button" className="btn btn-warning" onClick={Toggle} >
                        {(flag)?<>Message</>:<>Code</>}
                    </button>
                </div>

            </div>
        </>
    )
}

export default Card
