import React from 'react'
import Nav from './components/nav'
import Head from './components/head'
import But from './components/but';
import Sortbar from './components/sortbar'
import Card from './components/card';
import Footor from './components/footor'
import Dashboard from "./components/Dashboard"
import 'index.js';

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
