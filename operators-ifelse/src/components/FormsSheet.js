import React, { useRef } from 'react'

function FormsSheet() {
  let firstNameInputRef = useRef();
  let lastNameInputRef = useRef();
  let englishInputRef = useRef();
  let teluguInputRef = useRef();
  let hindiInputRef = useRef();
  let mathsInputRef = useRef();
  let scienceInputRef = useRef();
  let socialInputRef = useRef();

  let firstNameResultRef = useRef();
  let lastNameResultRef = useRef();
  let englishResultRef = useRef();
  let teluguResultRef = useRef();
  let hindiResultRef = useRef();
  let mathsResultRef = useRef();
  let scienceResultRef = useRef();
  let socialResultRef = useRef();

  let resultLabelRef = useRef();
  return (
    <div>
      <h1>If-else Condition</h1>
      <hr></hr>
      <form>
        <fieldset>
          <legend>Please enter your marks</legend>
        </fieldset>
        <div>
            <label>First Name</label>
            <input type="text" ref={firstNameInputRef}
            onFocus={()=>{
              firstNameInputRef.current.style.backgroundColor="gray";
            }}
            onBlur={()=>{
              firstNameInputRef.current.style.backgroundColor="white"
            }}></input>
            <label ref={firstNameResultRef}></label>
        </div>
        <div>
            <label>Last Name</label>
            <input type="text" ref={lastNameInputRef}
            onFocus={()=>{
              lastNameInputRef.current.style.backgroundColor="gray";
            }}
            onBlur={()=>{
              lastNameInputRef.current.style.backgroundColor="white"
            }}></input>
            <label ref={lastNameResultRef}></label>
        </div>
        <div>
            <label>English Marks</label>
            <input type="number" ref={englishInputRef}
            onFocus={()=>{
              englishInputRef.current.style.backgroundColor="lightgreen";
            }}
            onChange={()=>{
              if(englishInputRef.current.value>=35){
                englishResultRef.current.innerHTML="Pass";
                englishResultRef.current.style.backgroundColor="green";
              }
              else{
                englishResultRef.current.innerHTML="Fail";
                englishResultRef.current.style.backgroundColor="red";
              }
            }}
            onBlur={()=>{
              englishInputRef.current.style.backgroundColor="white";
            }}></input>
            <label ref={englishResultRef}></label>
        </div>
        <div>
            <label>Telugu Marks</label>
            <input type="number" ref={teluguInputRef}
            onFocus={()=>{
              teluguInputRef.current.style.backgroundColor="pink";
            }}
            onChange={()=>{
              if(teluguInputRef.current.value>=35){
                teluguResultRef.current.innerHTML="😜";
                teluguResultRef.current.style.backgroundColor="green";
              }
              else{
                teluguResultRef.current.innerHTML="😞";
                teluguResultRef.current.style.backgroundColor="red";
              }
            }}
            onBlur={()=>{
              teluguInputRef.current.style.backgroundColor="white";
            }}></input>
            <label ref={teluguResultRef}></label>
        </div>
        <div>
            <label>Hindi Marks</label>
            <input type="number" ref={hindiInputRef}
            onFocus={()=>{
              hindiInputRef.current.style.backgroundColor="blue";
            }}
            onChange={()=>{
              if(hindiInputRef.current.value>=35){
                hindiResultRef.current.innerHTML="Pass";
                hindiResultRef.current.style.backgroundColor="green";
              }
              else{
                hindiResultRef.current.innerHTML="Fail";
                hindiResultRef.current.style.backgroundColor="red";
              }
            }}
            onBlur={()=>{
              hindiInputRef.current.style.backgroundColor="white";
            }}></input>
            <label ref={hindiResultRef}></label>
        </div>
        <div>
            <label>Maths Marks</label>
            <input type="number" ref={mathsInputRef}
            onFocus={()=>{
              mathsInputRef.current.style.backgroundColor="yellow";
            }}
            onChange={()=>{
              if(mathsInputRef.current.value>=35){
                mathsResultRef.current.innerHTML="🤩";
                mathsResultRef.current.style.backgroundColor="green";
              }
              else{
                mathsResultRef.current.innerHTML="😞";
                mathsResultRef.current.style.backgroundColor="red";
              }
            }}
            onBlur={()=>{
              mathsInputRef.current.style.backgroundColor="white";
            }}></input>
            <label ref={mathsResultRef}></label>
        </div>
        <div>
            <label>Science Marks</label>
            <input type="number" ref={scienceInputRef}
            onFocus={()=>{
              scienceInputRef.current.style.backgroundColor="violet";
            }}
            onChange={()=>{
              if(scienceInputRef.current.value>=35){
                scienceResultRef.current.innerHTML="🙂";
                scienceResultRef.current.style.backgroundColor="green";
              }
              else{
                scienceResultRef.current.innerHTML="🥺";
                scienceResultRef.current.style.backgroundColor="red";
              }
            }}
            onBlur={()=>{
              scienceInputRef.current.style.backgroundColor="white";
            }}></input>
            <label ref={scienceResultRef}></label>
        </div>
        <div>
            <label>Social Marks</label>
            <input type="number" ref={socialInputRef}
            onFocus={()=>{
              socialInputRef.current.style.backgroundColor="orange";
            }}
            onChange={()=>{
              if(socialInputRef.current.value>=35){
                socialResultRef.current.innerHTML="Pass";
                socialResultRef.current.style.backgroundColor="green";
              }
              else{
                socialResultRef.current.innerHTML="Fail";
                socialResultRef.current.style.backgroundColor="red";
              }
            }}
            onBlur={()=>{
              socialInputRef.current.style.backgroundColor="white";
            }}></input>
            <label ref={socialResultRef}></label>
        </div>
        <div>
          <label style={{width:"600px"}} ref={resultLabelRef}>Please enter your Marks and Calculate</label>
        </div>
        <div>
          <button type="button" onMouseMove={()=>{
            let firstName=firstNameInputRef.current.value;
            let lastName=lastNameInputRef.current.value;
            let englishMarks=Number(englishInputRef.current.value);
            let teluguMarks=Number(teluguInputRef.current.value);
            let hindiMarks=Number(hindiInputRef.current.value);
            let mathsMarks=Number(mathsInputRef.current.value);
            let scienceMarks=Number(scienceInputRef.current.value);
            let socialMarks=Number(socialInputRef.current.value);

            let totalMarks=englishMarks+teluguMarks+hindiMarks+mathsMarks+scienceMarks+socialMarks;
            resultLabelRef.current.innerHTML=`${firstName} ${lastName} got Total Marks are ${totalMarks}`;
            
            alert(`Total Marks are ${totalMarks}`);
            console.log(totalMarks);
          }}>Click Here</button>
        </div>
      </form>
    </div>
  )
}

export default FormsSheet
