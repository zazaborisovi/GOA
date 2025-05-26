import { Link, Route, Routes } from 'react-router-dom'
import React from 'react'
import Home from './pages/home'
import Login from './pages/login'
// import PageLayout from './pages/pages'
import Pages from './pages/PageOne'
import Dashboards from './pages/Dashboards'

export default function FoodApp() {
  return (
    <>
      <h1>group 5</h1>
      <Link to={"/"}>home</Link>
      <Link to={"login"}>login</Link>
      <Link to={"Pages"}>pages</Link>
      <Routes>
        {/* <Route path="/" element={ <Home /> } />
        <Route path="/login" element={ <Login /> }/>
        <Route path="/pages" element={ <PageLayout /> }>
          <Route path=":pageId" element={ <Pages /> }/>
        </Route> */}
        <Route path="/dashboard/*" element={ <Dashboards /> } />
      </Routes>
    </>
  )
}
