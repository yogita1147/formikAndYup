import logo from './logo.svg';
// import './App.css';
import Card from './module1';
import S1 from './module2'; 
import logo1 from './images.jpg'
import I from './module3';
import { useEffect, useState } from 'react';
import C from './data.js/json';
import C1 from './data.js/json1'
import C3 from './data.js/json2';
import User from './User1'
import User3 from './User3';
import User4 from './User4';
import User5 from './User5';
import User6 from './User6';
import User10 from './User10';
import Form from './data.js/Form';
let var1='q';

function App() {
  
  const [value,setValue]=useState('');
   const date=new Date();
   console.log(date);
   const day=date.getDay();
   console.log(day);
  
   const hr=date.getHours();
   console.log(hr);
   const min=date.getMinutes();
   console.log(min);
  useEffect(()=>{timeCheck()},[])
   const timeCheck=()=>
   {//for sunday....
    if(day==0)
    {
    
   if( hr>=12 && hr<14|| hr==14&& min<=30  )
   {
    return 'OPEN';
   }
   else
   {
    return 'CLOSE';
   }}
   else if(day==6)  //for saturday
    {
    if(hr>=10 && hr<21|| hr==21 &&min==0)
    {
      setValue('OPEN');
    }
    else{
      return'CLOSE';
    }
    }
    else{
      if(hr==8 && min>=30 ||hr>=9 &&hr<17|| hr==17 && min==0 )
      {
        return('OPEN');
      }
      else{
        return 'CLOSE';
      }
    }
  
   
  }

  return(
    <>
    <h2>WE ARE {timeCheck()} NOW</h2>
    <Form/>
    </>

  );
}

export default App;
