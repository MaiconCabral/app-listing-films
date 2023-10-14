import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

// importar componentes
import Dashboard from './components/dashboard';
import List from './components/list';
import NarBarExample from './layouts/navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="header">
        <h1>Frontend react test</h1>
      </div>
      <nav className="dash_nav">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<NarBarExample/>}>
              <Route index element={ <Dashboard/>}/>
              <Route path='list' element={ <List/>}/>

              <Route path='*' element={ <Navigate replace to="/" />}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </nav>
    </>
  )
}

export default App
