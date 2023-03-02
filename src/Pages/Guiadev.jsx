import React from 'react'

import Sidebar from '../Components/Home/Sidebar.jsx'

import './Guiadev.css'

function Guiadev() {
  return (
    <div>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='guiadev'>
        <h1>Guia Dev <br />
          Em Breve...
        </h1>
      </div>
    </div>
  )
}

export default Guiadev