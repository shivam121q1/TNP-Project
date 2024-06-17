
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import InstructorPage from './pages/InstructorPage'
import Testimonial from './pages/Testimonial'

function App() {
 

  return (
    <BrowserRouter>
      {/* <Header/> */}
      <Routes>
        <Route path='/' element={<InstructorPage/>}></Route>
        <Route path='/testimonials' element={<Testimonial/>}></Route>
      </Routes>
    </BrowserRouter>
  
  )
}

export default App
