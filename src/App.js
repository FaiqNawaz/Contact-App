import './App.css';
import ContactForm from './Components/ContactForm/ContactForm';
import ContactHeader from './Components/ContactHeader/ContactHeader';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <div className="container">

     <Navbar/>
     
    <div className='main_container'>

      <ContactHeader/>

      <ContactForm/>

    </div>
    
     
    {/* <main className="main_container">
    
    
    <ContactForm/>

    </main> */}
  

    </div>
  );
}

export default App;
