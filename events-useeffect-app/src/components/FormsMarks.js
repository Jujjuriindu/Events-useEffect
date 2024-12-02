import React, { useRef } from "react";

function FormsMarks() {
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
      <h1>Student Marks Form</h1>
      <hr></hr>
      <form>
        <fieldset>
          <legend>Please enter your personal details</legend>
        </fieldset>
        <fieldset>
          <div>
            <label>First Name</label>
            <input type="text" ref={firstNameInputRef}
            onFocus={()=>{
              firstNameInputRef.current.style.backgroundColor="gray";
            }}
            onBlur={()=>{
              firstNameInputRef.current.style.backgroundColor="white";
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
              lastNameInputRef.current.style.backgroundColor="white";
            }}></input>
            <label ref={lastNameResultRef}></label>
          </div>
        </fieldset>
        <fieldset>
          <div>
            <label>English Marks</label>
            <input type="number" ref={englishInputRef}
            onFocus={()=>{
              englishInputRef.current.style.backgroundColor="pink";
            }}
            onChange={()=>{
              let Marks=englishInputRef.current.value;
              englishResultRef.current.innerHTML=Marks >=35 ? "Pass" : "Fail";
              englishResultRef.current.style.backgroundColor=Marks >=35 ? "green" : "red";
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
              teluguInputRef.current.style.backgroundColor="red";
            }}
            onChange={()=>{
              let Marks=teluguInputRef.current.value;
              teluguResultRef.current.innerHTML=Marks >=35 ? "Pass" : "Fail";
              teluguResultRef.current.style.backgroundColor=Marks >=35 ? "green" : "red";
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
              hindiInputRef.current.style.backgroundColor="green";
            }}
            onChange={()=>{
              let Marks=hindiInputRef.current.value;
              hindiResultRef.current.innerHTML=Marks >=35 ? "Pass" : "Fail";
              hindiResultRef.current.style.backgroundColor=Marks >=35 ? "green" : "red";
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
              mathsInputRef.current.style.backgroundColor="blue";
            }}
            onChange={()=>{
              let Marks=mathsInputRef.current.value;
              mathsResultRef.current.innerHTML=Marks >=35 ? "😜" : "😞";
              mathsInputRef.current.style.backgroundColor=Marks >=35 ? "green" : "red";
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
              scienceInputRef.current.style.backgroundColor="yellow";
            }}
            onChange={()=>{
              let Marks=scienceInputRef.current.value;
              scienceResultRef.current.innerHTML=Marks >=35 ? "Pass" : "Fail";
              scienceResultRef.current.style.backgroundColor=Marks >=35 ? "green" : "red";
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
              socialInputRef.current.style.backgroundColor="violet";
            }}
            onChange={()=>{
              let Marks=socialInputRef.current.value;
              socialResultRef.current.innerHTML=Marks >=35 ? "🙂" : "🥺";
              socialInputRef.current.style.backgroundColor=Marks >=35 ? "green" : "red";
            }}
            onBlur={()=>{
              socialInputRef.current.style.backgroundColor="white";
            }}></input>
            <label ref={socialResultRef}></label>
          </div>
        </fieldset>
        <div>
        <label style={{width: "700px"}} ref={resultLabelRef}>Please Enter your Marks and Calculate</label>
        </div>
        <div>
          <button
            type="button"
            onMouseMove={() => {
              let firstName = firstNameInputRef.current.value;
              let lastName = lastNameInputRef.current.value;
              let englishMarks = Number(englishInputRef.current.value);
              let teluguMarks = Number(teluguInputRef.current.value);
              let hindiMarks = Number(hindiInputRef.current.value);
              let mathsMarks = Number(mathsInputRef.current.value);
              let scienceMarks = Number(scienceInputRef.current.value);
              let socialMarks = Number(socialInputRef.current.value);

              let totalMarks = englishMarks +teluguMarks +hindiMarks +mathsMarks +scienceMarks +socialMarks;
              resultLabelRef.current.innerHTML=`${firstName} ${lastName} got Total Marks are ${totalMarks}`
            
              alert(`Total Marks are ${totalMarks}`);
            }}>Calculate</button>
        </div>
      </form>
    </div>
  );
}

export default FormsMarks;