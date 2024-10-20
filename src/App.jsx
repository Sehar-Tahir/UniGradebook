import DashboardPage from "./Components/DashboardPage"
import InputGradePage from "./Components/InputGradePage"
import NavBar from "./Components/NavBar"
import ProfilePage from "./Components/ProfilePage"
import SpecificsPage from "./Components/SpecificsPage"
import Home from "./Components/Home"

import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
{/* Routing:- */}
<NavBar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/dashboardpage' element={<DashboardPage/>} />
      <Route path='/inputgradespage' element={<InputGradePage/>} />
      <Route path='/specificspage' element={<SpecificsPage/>} />
      <Route path='/profilepage' element={<ProfilePage/>} />
    </Routes>
    </>
  )
}

export default App
