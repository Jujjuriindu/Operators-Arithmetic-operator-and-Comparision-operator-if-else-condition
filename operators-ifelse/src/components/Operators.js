import React from 'react'

function Operators() {
  return (
    <div>
      <h1>Operators</h1>
      <hr></hr>
      <h2>1. Arithmetic Operator</h2>
      <button type="button" onClick={()=>{
        let a=20+10+10;
        let b=100;
        let c=a+b;
        alert(c);
        console.log(a);
      }}>Addition</button>
      <button type="button" onClick={()=>{
        let a=25-5;
        alert(a);
        console.log(a);
      }}>Substraction</button>
      <button type="button" onClick={()=>{
        let a=20*30;
        alert(a);
        console.log(a);
      }}>Multiplication</button>
      <button type="button" onClick={()=>{
        let a=600/4;
        alert(a);
        console.log(a);
      }}>Division</button>
      <button type="button" onClick={()=>{
        let a=150%5;
        alert(a);
        console.log(a);
      }}>Modulus</button>
      <button type="button" onClick={()=>{
        let a=1000;
        a++;
        alert(a);
        console.log(a);
      }}>Increment</button>
      <button type="button" onClick={()=>{
        let a=501;
        a--;
        alert(a);
        console.log(a);
      }}>Decrement</button>
      <hr></hr>
      <h2>2. Assignment Operator</h2>
      <button className="assignButton" type="button" onMouseMove={()=>{
        let a=50;
        a+=7;
        a-=5;
        a*=2;
        a/=2;
        a%=6;
        alert(a);
        console.log(a);
      }}>Assignment</button>
      <hr></hr>
      <h2>3. Comparision Operator</h2>
      <button className="comparisionButton" type="button" onClick={()=>{
        let a=70;
        let b=30;
        let c=(a==b)
        alert(c);
        console.log(c);
      }}>Equal</button>
      <button className="comparisionButton" type="button" onClick={()=>{
        let a=70;
        let b=70;
        let c=(a==b);
        alert(c);
        console.log(c);
      }}>Not Equal</button>
      <button className="comparisionButton" type="button" onClick={()=>{
        let a=70;
        let b=90;
        let c=(a>b);
        alert(c);
        console.log(c);
      }}>Greater than</button>
      <button className="comparisionButton" type="button" onClick={()=>{
        let a=70;
        alert(a<50);
        console.log(a<50);
      }}>Less than</button>
      <button className="comparisionButton" type="button" onClick={()=>{
        let a=70;
        alert(a>=50);
        console.log(a>=50);
      }}>Greater than or equal</button>
      <button className="comparisionButton" type="button" onClick={()=>{
        let a=70;
        let b=20;
        let c=(a<=b);
        alert(c);
        console.log(c);
      }}>Less than or equal</button>
    </div>
  )
}

export default Operators
