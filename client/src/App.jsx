import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Register, Dashboard, Landing, Error } from './pages';


function App() {
  return (
    <BrowserRouter>
        <nav>
          <Link to='/'>Dashboard</Link>
          <Link to='/register'>Register</Link>
          <Link to='/Landing'>Landing Page</Link>
      </nav>
      
      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/Landing' element={<Landing />}></Route>
        <Route path='*' element={<Error />}></Route>
    </Routes>
    </BrowserRouter>);
}

export default App;
