import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
import StudentList from './components/StudentList'
import AddStudent from './components/AddStudent'
import EditStudent from './components/EditStudent'


function App() {
  return (
    <div>
    <Header />
      <Router>
          <div className='container'>
          <Routes>
          <Route exact path='/' element={<StudentList />} />
          <Route exact path='/add' element={<AddStudent />} />
          <Route exact path='/edit/:id' element={<EditStudent />} />
          </Routes>

      </div>
    </Router>  
    <Footer />
    </div>
  )
}

export default App



