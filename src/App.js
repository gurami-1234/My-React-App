import About from './Pages/About/About.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import Home from './Pages/Home/Home.jsx';
import './app.css'
import Navbar from './components/Navbar/Navbar.jsx'
import {Footer }from './components/Footer/Footer.jsx'
function App() {
  // const sayHi = "Hello World"

  return (
    <div>
      {/* Navbar Component */}
      <Navbar/>

      {/* About Page */}
      <About/>

      {/* Contact Page */}
      {/* <Contact/> */}

      {/* Home Page */}
      {/* <Home/> */}
      {/* <h1> Hello World </h1> */}
      {/* <h1 className="hello"> {sayHi} </h1> */}
      <Footer/>
    </div>
  );
 
}

export default App;
