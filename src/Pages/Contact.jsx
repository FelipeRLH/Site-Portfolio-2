import Navbar from '../Components/Home/Navbar'
import Sidebar from '../Components/Home/Sidebar'
import Footer from '../Components/Contact/Footer'
import Form from '../Components/Contact/Form'

import { FaMobileAlt, FaRegEnvelope } from 'react-icons/fa'

import './Contact.css'

function Contact() {

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="title_contact">
        <h1>Contato</h1>
      </div>

      <div className='container_contact'>
        <div className='num_email'>
          <div><FaMobileAlt className='icon_contact' /> (61) 99257-1705</div>
          <div><FaRegEnvelope className='icon_contact' /> feliperamalhoalves40@gmail.com</div>
        </div>

        <div className='contact_inputs'>
          <div className='title_contact_area'>
            <span className='spantitle'>Con</span>tate-me
          </div>
          <Form />

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact