import React from 'react';
import { Footer } from '../Footer';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Routes } from '../Routes/Routes';

export function App() {
  return (
    <BrowserRouter>
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}