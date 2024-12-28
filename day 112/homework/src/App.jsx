import { Link , Route , Routes } from 'react-router-dom'
import React from 'react'
import series from './pages/series'
import SeriesLayout from './pages/SeriesLayout'
import Pages from '../../classwork/src/pages/PageOne'

function App() {

  return (
    <div style={{ display:'flex' , gap: 20 , alignItems: 'center'}}>
      <h1>homework</h1>
      <Link to={`/`}>home</Link>
      <Link to={`/series`}>series</Link>
      <Link to></Link>
      <Routes>
        <Route path='/series' element={ <SeriesLayout /> }>
          <Route path=':pageId'element={ <Pages /> }/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
