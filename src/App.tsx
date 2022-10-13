import { Button } from 'reactstrap'
import { AuthProvider } from './context/AuthProvider'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { ProtectedLayout } from './components/ProtectedLayout'
import { Login } from './components/Login'




function App(props: any) {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
              <Route path='/profile' element={<ProtectedLayout><h1>OLÁ BEM VINDO AO PROFILE</h1></ProtectedLayout>} />

              <Route path='/login' element={<Login />} />
              
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    
  )
}


export default App
