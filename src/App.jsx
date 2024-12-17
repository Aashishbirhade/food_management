
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './index.css'
import Navbar from './components/navbar'
import Add_invertery from  './pages/individual/add_invertery'

import Display_invertery from './pages/individual/display_invertery'
import Profile from './pages/individual/profile'
import Shopkeeper_profile from './pages/shop/shopkeeper_profile'
import Hotel_profile from './pages/hotel/hotel_profile'
import Drag from './pages/drag'
import Login from './pages/login'
import Register from './pages/register'
import Food_bank from './pages/individual/food_bank'
import Landing from './pages/landing'
import { UserProvider } from './UserContext'
import Footer from './components/footer'
import Notification from './pages/individual/notification'
function App() {

  return (
    <>
      <UserProvider>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element= {<Landing/>}/>
        <Route path='/Add_invertery' element= {<Add_invertery/>}/>
        <Route path='/display' element= {<Display_invertery/>}/>

        <Route path='/profile' element= {<Profile/>}/>
        <Route path='/shopkeeper_profile' element= {<Shopkeeper_profile/>}/>
        <Route path='hotel_profile' element= {<Hotel_profile/>}/>

        <Route path='/drag' element= {<Drag/>}/>
        <Route path='/login' element= {<Login/>}/>
        <Route path='/register' element= {<Register/>}/>
        <Route path='/food_bank' element= {<Food_bank/>}/>

        <Route path='/notification' element= {<Notification/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      </UserProvider>
    </>
  )
}



export default App
