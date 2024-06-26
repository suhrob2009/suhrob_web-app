import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginForm from './Modules/login.jsx';
import SignUpForm from './Modules/register.jsx';
import IndexPage from './Modules/index.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/index" element={<IndexPage />} />
      </Routes>
    </Router>
  );
};

export default App;
