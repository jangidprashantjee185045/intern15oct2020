import React ,{useState} from 'react';
import './App.css';
import Button from './button/buttoon';
import Navabr from './navbar/navbar';
import Searchbar from './search/search';
import Dropdown from './dropdown/dropdown';

function App() {
  const [open,setOpen]=useState(false)
  return (
    <div className="App">
      <Navabr/>
        <div className="top-heading">
          <ul className="head1">better & easier healthcare</ul>
          <ul className="head2" >IS JUST A STEP AWAY FROM NOW !</ul>
        </div>
       <Searchbar/>
        <div className="doctor_clinic_hospital">
          <ul> Doctors </ul>   
          <ul>|</ul>   
          <ul>Clinics</ul>   
          <ul>|</ul> 
          <ul> Hospitals </ul>  
        </div>
        <div className="modern-healthcare">
          <h1>MODERN HEALTHCARE FOR ALL YOUR NEEDS</h1>
        </div>  
        <div className="how_it_works">
          <ul> HOW <mark> DOCEZ </mark> WORKS 
          <Button onClick={()=>setOpen(open=>!open)}/> 
          {open&&<Dropdown/>}</ul>
        </div>
    </div>
    
  );
}

export default App;
