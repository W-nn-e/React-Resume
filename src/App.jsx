import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import AboutMe from './pages/AboutMe';
import Project from './pages/Project';
import Contact from './pages/Contact';
import { Provider } from 'react-redux';
import { store } from './store';
import ThemeToggler from './components/ThemeToggler';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeToggler />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
