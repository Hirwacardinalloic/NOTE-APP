import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './Hooks/useAuthContext'

// pages & components
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={user ? <Home /> : <Navigate to="/login" />} 
            />
             <Route 
              path="/login" 
              element={!user ? <Login /> : <Navigate to="/" />} 
            />
            <Route 
              path="/signup" 
              element={!user ? <Signup /> : <Navigate to="/" />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

// import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
// import { useAuthContext } from './hooks/useAuthContext';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Navbar from './components/Navbar';

// function App() {
//   const {user} = useAuthContext()

//   return (
//     <div className="App">
//       <BrowserRouter>
//       <Navbar></Navbar>
//       <div className='pages'>
//         <Routes>
//           <Route
//           path='/'
//           element={user? <Home></Home>: <Navigate to = '/login'/>}>  
//           </Route>
//           <Route
//           path='/login'
//           element={!user? <Login />: <Navigate to='/'></Navigate>}>  
//           </Route>
//           <Route
//           path='/signup'
//           element={!user?<Signup /> : <Navigate to='/'></Navigate>}>  
//           </Route>
//         </Routes>
//       </div>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

