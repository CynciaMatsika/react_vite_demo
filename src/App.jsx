import React, { useState } from 'react';
import {setState} from 'react';
import './App.css';
import Welcome from './Components/Welcome';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Students from './Components/Students';
import Staff from './Components/Staff';
import Courses from './Components/Courses';

const App = () => {

  const [activeComponent, setActiveComponent] = useState('welcome') //setActive allows us to change the component
  const renderComponent =() =>{
    switch(activeComponent){
      case 'staff':
        return <Staff/>;
      
      case 'students':
        return <Students/>;
      
      case 'courses':
        return <Courses/>;
      
      case 'welcome':
        return <Welcome/>;
      
      default:
        return <Welcome/>;
    }
  }

  return (
    <>
    <Navbar setActiveComponent={setActiveComponent}/>
    <Banner/>
    <Students/>
    <Staff/>
    <Courses/>
    <Footer />
    <main>
      {renderComponent()}
    </main>
     
    </>
  )
}

export default App;