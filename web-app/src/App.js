import React from 'react';
import { Routes, Route } from 'react-router-dom';

import RegisterForm from './pages/register';
import LoginForm from './pages/login';
import UpdateVitals from './pages/UpdateVitals';
import Dashboard from './pages/homepage';
import InputForm from './pages/MedicalForm';
import ShowPatient from './pages/PatientDetails';
import DoctorHome from './pages/DoctorHome';
const App = () => {
  return (
      <Routes>
      <Route path='/' element={<LoginForm />} />
      <Route path='/register' element={<RegisterForm />} />
      <Route path='/patient/update' element={<UpdateVitals />} />
      <Route path='/patient/dashboard' element={<Dashboard />} />
      <Route path='/history' element={<InputForm />} />
      <Route path= '/doctor' element = {<DoctorHome/>} /> 
      <Route path='/doctor/patientdetails/:id' element={<ShowPatient />} />
      {/* <Route path='/books/create' element={<CreateBook />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} /> */}
      </Routes>
  );
};

export default App;