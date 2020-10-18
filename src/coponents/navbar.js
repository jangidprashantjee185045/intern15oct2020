import React from 'react';
import logo from  '../logo192.png'
import './navabr.css';

const Navabr=()=>{
   return(
     <div className="navbar"> 
     <div className="navbar2">
       <div className="logo">
           <img src={logo} alt="Logo"/>
       </div>
       <div className="offer" >
            <ul>WHAT WE OFFER</ul>
            <ul><i className="fa fa-angle-down fa-lg " aria-hidden="true"></i></ul>
            <ul id="simple-slash">|</ul>     
            <ul>LOGIN</ul>
            <ul><i id="user" class="fa fa-user fa-lg " aria-hidden="true"></i></ul>
        </div>
     </div> 
     </div>
   ) 
}

export default Navabr;
