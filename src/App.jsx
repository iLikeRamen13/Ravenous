import { useState } from 'react'
import './App.css'
import Business from './components/Business/Business.jsx'
import BusinessList from './components/BusinessList/BusinessList.jsx'
import Searchbar from './components/Searchbar/Searchbar.jsx'

function App() {
  return (
    <div>
      <Searchbar />
      <br />
      <BusinessList />
    </div>
  )
}

export default App
