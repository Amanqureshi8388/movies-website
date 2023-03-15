import './App.scss';
import Home from './pages/Home.jsx'
import SingleMovie from './components/SingleMovie'
import { BrowserRouter ,  Routes ,Route } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element = { <Home/> } />
      <Route path='movie/:id' element = { <SingleMovie/> } />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
 