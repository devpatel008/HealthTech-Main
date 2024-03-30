import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import CreateBook from './pages/CreateBooks';
// import ShowBook from './pages/ShowBook';
// import EditBook from './pages/EditBook';
// import DeleteBook from './pages/DeleteBook';
import RegisterForm from './pages/register';
import LoginForm from './pages/login';
import UpdateVitals from './pages/UpdateVitals';
import Dashboard from './pages/homepage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LoginForm />} />
      <Route path='/register' element={<RegisterForm />} />
      <Route path='/update' element={<UpdateVitals />} />
      <Route path='/dashboard' element={<Dashboard />} />


      {/* <Route path='/books/create' element={<CreateBook />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} /> */}
    </Routes>
  );
};

export default App;