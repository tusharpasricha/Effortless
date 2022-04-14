import React from 'react'
import {Link} from "react-router-dom"

function But() {
    return (
        <>
        <span className="wheel">
        <section className="but">
        {/* <Link to='/add' >Add</Link> */}
         <button className="button"> + </button> 
        </section>
        <section className="but">
        {/* <Link to='/add' >Add</Link> */} 
         <button className="button"> + </button> 
        </section>
        </span>
        </>
    )
}

export default But
