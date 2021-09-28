import React from 'react'
import Nav from './nav'

import But from './but';
import Sortbar from './sortbar'
import Card from './card';
import Footor from './footor'
import Page2 from "./page2"

// import 'index.css';
function Page1() {
    return (
    <>
    <Nav/>
    
    <But/>
    <Page2/>
    <Sortbar/>
    <Card/>
    <Footor/> 
    </>
    )
}

export default Page1
