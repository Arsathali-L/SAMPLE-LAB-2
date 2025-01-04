import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BrowserRouter , Router, Route, Routes } from 'react-router-dom';
import Welcome from './component/Welcome'
import RegistrationForm from './component/RegistrationForm'
import Sign from './component/Sign'
import Newuser from './component/Newuser'
import Roonstep from './component/Roonstep'
import Roombook from './component/Roombook'
import CreditCardPayment1 from './component/CreditCardPayment1'
import Admin from './component/Admin'
import AdminDashboard from './component/Adminbox/AdminDashboard'
import Meal from './component/Meal'
import Procecomplete from './component/Procecomplete'
import StudentDashboard from './Student box/StudentDashboard'
import CreditCardPayment2 from './component/CreditCardPayment2'
import CreditCardPayment3 from './component/CreditCardPayment3'


const App = () => {
  return (
    <>
      {/* <Welcome/> */}
      {/* <Registration/> */}
      {/* <Sign/>       */}
      {/* <Roonstep/> */}
      {/* <Roombook/> */}
      {/* <CreditCardPayment1/> */}
      {/* <Admin/> */}
      {/* <AdminDashboard/> */}
      {/* <Meal/> */}
      {/* <Procecomplete/> */}
      {/* <StudentDashboard/> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/sign" element={<Sign></Sign>}></Route>
          <Route path='/' element={<Welcome/>}/>
          <Route path='/Admin' element={<Admin/>}/>
          <Route path='/' element={<Welcome/>}></Route>
          
          <Route path='/register' element={<RegistrationForm/>}></Route>
        
          <Route path='/Newuser' element={<Newuser/>}/>
          <Route path='/Roonstep' element={<Roonstep/>}/>
          <Route path='/Roombook' element={<Roombook/>}/>
          <Route path='/CreditCardPayment1' element={<CreditCardPayment1/>}/>
          <Route path='/CreditCardPayment2' element={<CreditCardPayment2/>}/>
          <Route path='/Meal' element={<Meal/>}/>
          <Route path='/CreditCardPayment3' element={<CreditCardPayment3/>}></Route>
          <Route path='/Procecomplete' element={<Procecomplete/>}/>
          <Route path='/StudentDashboard' element={<StudentDashboard/>}/>
          <Route path='/AdminDashboard' element={<AdminDashboard/>}/>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App