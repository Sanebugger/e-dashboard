import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
              <Nav/>
              <Routes>
                <Route path='/' element={<h1>Products</h1>} />
                <Route path='/add' element={<h1>addProducts</h1>} />
                <Route path='/update' element={<h1>updateProducts</h1>} />
                <Route path='/logout' element={<h1>logout</h1>} />
                <Route path='/Profile' element={<h1>Profile</h1>} />
                <Route path='/SignUp' element={<SignUp/>} />
              </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
