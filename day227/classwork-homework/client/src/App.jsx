import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Chat from './pages/Chat'

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  )
}