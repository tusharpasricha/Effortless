import React from 'react'
import Nav from './nav'
import Head from './head'
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
    <Head/>
    <But/>
    <Page2/>
    <Sortbar/>
    <Card/>
    <Footor/> 
    </>
    )
}

export default Page1
