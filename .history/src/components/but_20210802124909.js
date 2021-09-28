import React from 'react'
import {Link} from "react-router-dom"

function But() {
    return (
        <>
        <Link to='/add' >Add</Link>
        <section className="but">
            
         <button className="button"> + </button> 
        </section>
        </>
    )
}

export default But
