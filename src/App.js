import React, { useState } from 'react';
import './App.css';
import { HashRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import Navbar from './components/nav/Navbar';
import Login from './components/login/Login';
import Landing from './components/landing/Landing';
import UserContext from './context/UserContext';
import Employees from './components/employees/Employees';
import DragDrop from './components/upload/DragDrop';

function App() {

  const ProtectedRoute = ({ user, redirectPath = '/'}) => {
    if(!user) {
      return <Navigate to={redirectPath} replace />
    }

    return <Outlet />
  }

  const [ loggedIn, setLoggedIn ] = useState(false)

  const RedLogueado = () => {
    return(
      <Navigate to={'/employees'}/>
    )
  }

  const RedNoLogueado = () => {
    return(
      <Navigate to={'/'} />
    )
  }

  const DynamicRender = () => {
    if(loggedIn) {
      return <RedLogueado />
    } else {
      return <RedNoLogueado />
    }
  }




  return (
    <UserContext.Provider value={ {loggedIn, setLoggedIn} }>
      <HashRouter>
          <Navbar />
          
          <Routes>
            <Route path='/' element={<Landing />}/>
            <Route element={<ProtectedRoute user={loggedIn}/>}>
              <Route path='/employees' element={<Employees />}/>
              <Route path='/upload' element={<DragDrop />}/>
            </Route>
            <Route path='/login' element={<Login />}/>
            <Route path='*' element={
              <DynamicRender />
            } />
          </Routes>

      </HashRouter>
    </UserContext.Provider>
  );
}

export default App;
