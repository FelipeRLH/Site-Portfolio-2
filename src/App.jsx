// REACT
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// SIDEBAR
import Home from './Pages/Home.jsx';
import Projects from './Pages/Projects.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Guiadev from './Pages/Guiadev.jsx'

// PROJECTS
import DetailsProj from './Components/Projects/DetailsProject/DetailsProj.jsx';
import { DetailsProvider  } from './Components/Projects/DetailsProject/DetailsContexto.jsx'

function App() {
  return (
    <div>
      <DetailsProvider>
        <Router>
          <Routes>
            {/* SIDEBAR */}
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/projects/:id' element={<DetailsProj />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/guiadev' element={<Guiadev />} />
          </Routes>
        </Router>
      </DetailsProvider>
    </div>
  );
}

export default App;
