// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"


// added from Shakapacker docs
import React from 'react';
import {createRoot } from 'react-dom/client';
import Logo from './components/basic_elements/logo/Logo';


const container = document.getElementById('root');
const root = createRoot(container);

document.addEventListener('DOMContentLoaded', () => {
  root.render(<Logo name="World" />);
});