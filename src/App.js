
import React from 'react';
//import desktopLight from './bg-desktop-light.jpg';
//import desktopDark from './bg-desktop-dark.jpg';
import './App.css';
import Buttons from './buttons/buttons.js';
import Footer from './footer/footer.js';
import Header from './header/header.js';
import TodoList from './todoList/todoList.js';


const App = () => {
  return (
    <div className="background-image">
      <div className="container">
        <Header />
        <TodoList />
        <Buttons />
        <Footer />
      </div>
    </div>
  );
}

export default App;
