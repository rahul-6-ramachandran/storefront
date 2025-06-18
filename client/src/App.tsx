import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import HomeLayout from './layouts/home/HomeLayout'

function App() {


  return (
    <>
      <Router>

        <Routes>
          <Route 
            path='/'
            element = {<HomeLayout/>}
          />
        </Routes>

      </Router>
    </>
  )
}

export default App
