

import Register from './components/pages/Home/Register'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Layout from './components/pages/Home/Layout';
import LoginHome from './components/pages/Home/LoginHome';
import Disease from './components/pages/Home/Disease';
import Yoga from './components/pages/Home/Yoga';
import Diet from './components/pages/Home/Diet';
import Exercise from './components/pages/Home/Exercise';
import Health from './components/pages/Home/Health';
function App() {
  return (
    <>
    <Router>
    <Routes>
    <Route  path="/" element={<Layout></Layout>}>
    <Route path="/home" element={<Home></Home>}/>
    <Route path="/register" element={<Register></Register>}/>
    <Route path="/loginhome" element={<LoginHome></LoginHome>}/>
    <Route path="/disease" element={<Disease></Disease>} />
    <Route path="/yoga" element={<Yoga></Yoga>} />
    <Route path="/diet" element={<Diet></Diet>} />
    <Route path="/exercise" element={<Exercise></Exercise>}/>
    <Route path="/health" element={<Health></Health>}/>
    
    </Route>
    </Routes>
   </Router>
    </>
   
  );
}

export default App;
