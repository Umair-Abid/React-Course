import React, {useState} from 'react'

export default function Form(props) {
  const handleUpClick=()=> {
  let newText=text.toUpperCase();
  setText(newText);
  }
  const handleLoClick=()=> {
    let newText=text.toLowerCase();
    setText(newText);
    }
    const handleClearClick=()=> {
      setText('');
      }
      const handleSpaceClick=() =>{
      let newString = text.replace(/\s+/g,' ').trim();
      setText(newString);
      }
      const handleCopyClick=() =>{
        var copyText = document.getElementById("exampleFormControlTextarea1");
         copyText.select();
        //copyText.setSelectionRange(0, 99999); 
        navigator.clipboard.writeText(copyText.value);
      }
       const handleOnChange =(event) =>{
       setText(event.target.value)

  }
  const [text,setText]=useState('');
  return (
    <div>
      <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea onChange={handleOnChange} className="form-control" id="exampleFormControlTextarea1" value={text} rows="6">
            </textarea>
             </div>
              <button type="button" onClick={handleUpClick} className="btn btn-primary my-3 mx-2">Convert to Uppercase </button >
              <button type="button" onClick={handleLoClick} className="btn btn-primary my-3 mx-2">Convert to Lowercase </button>
             <button type="button" onClick={handleClearClick} className="btn btn-primary my-3 mx-2">Clear all the Text</button>
             <button type="button" onClick={handleSpaceClick} className="btn btn-primary my-3 mx-2">Remove Extra Spaces</button>
             <button type="button" onClick={handleCopyClick} className="btn btn-primary my-3 mx-2">Copy text to Clipboard</button>
            <h2>Text Summary</h2>
            <p>Total words {text.split(' ').length  }</p>
            <p>Total Characters={text.length}</p>
            <p>Time Required to read={text.length*0.008} minutes</p>
             <h2 className='my-3'>Preview</h2>
             <p>{text.length===0 ? "Enter text above in Textfield to preview it" : text}</p>
        </div> 
    
  )
}
