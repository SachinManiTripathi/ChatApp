import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/home/home"
import Login from "./pages/login/Login"
import SignUp from "./pages/signup/SignUp"
import { Toaster} from "react-hot-toast"
import { useAuthContext } from "./context/AuthContext.jsx"

/* eslint-disable react/no-unknown-property */
function App() {
  const {authUser} = useAuthContext();

  return (
    <>
      <div className="p-4 h-screen flex items-center justify-center">
       <Routes>
          <Route path='/' element={authUser?<Home />: <Navigate to={"/login"} />} />
          <Route path='/login' element={authUser ?<Navigate to="/" /> :<Login />} />
          <Route path='/signup' element={authUser ?<Navigate to="/" /> :<SignUp />} />
       </Routes>
       <Toaster />
      </div>
    </>
  )
}

export default App
