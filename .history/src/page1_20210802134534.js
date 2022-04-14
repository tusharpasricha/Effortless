import React from 'react'
import Nav from './nav'
import Head from './head'
import But from './but';
import Sortbar from './sortbar'
import Card from './card';
import Footor from './footor'
import Dashboard from "./Dashboard"
import './src/index.css';


function Page1() {

    return (
    <>
    <Nav/>
    <Head/>
    <But/>
    <Sortbar/>
    <Card/>
    <Footor/> 
    <Dashboard/>  
    </>
    )
}

export default Page1
