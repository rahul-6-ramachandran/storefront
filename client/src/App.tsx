import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import HomeLayout from './layouts/home/HomeLayout'
import ProductList from './components/pages/ProductList'

function App() {


  return (
    <>
     <div>
     <Router>

<Routes>
  <Route 
    path='/'
    element = {<HomeLayout>
      <ProductList/>
    </HomeLayout>}
  />
</Routes>

</Router>
     </div>
    </>
  )
}

export default App
