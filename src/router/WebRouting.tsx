import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homescreen from '../pages/home/Home'
import About from '../pages/about/About'
import Project from '../pages/project/Project'
import DetailsProject from '../pages/project/detailsProject/DetailProject'

function WebRouting() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homescreen />} />
        <Route path='/About' element={<About />} />
        <Route path='/Project' element={<Project />} />
        <Route
          path='/Project/:ProjectId'
          element={<DetailsProject dataProject={[]}/>}
        />
      </Routes>
    </Router>
  )
}

export default WebRouting
