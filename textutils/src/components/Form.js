import React,{useState}from 'react'

export default function Form(props) {
  const handleUpClick=()=> {
  let newText=text.toUpperCase();
  setText(newText);
  props.showAlert("Converted to Uppercase!","success");
  }
  const handleLoClick=()=> {
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!","success");
    }
    const handleClearClick=()=> {
      setText('');
      props.showAlert("Text Cleared!","success");
      }
      const handleSpaceClick=() =>{
      let newString = text.replace(/\s+/g,' ').trim();
      setText(newString);
      props.showAlert("Extra Spaces Removed!","success");
      }
      const handleCopyClick=() =>{
        var copyText = document.getElementById("exampleFormControlTextarea1");
         copyText.select();
         document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(copyText.value);
         props.showAlert("Copied Text!","success");
      }
       const handleOnChange =(event) =>{
       setText(event.target.value)

  }
  const [text,setText]=useState('');
  return (
    <div className="container" style={{color: props.mode === 'light' ? 'black': 'white'}}>
      <h1 className='mb-2' >{props.heading}</h1>
          <div className="mb-3">
            <textarea onChange={handleOnChange} style={{backgroundColor: props.mode === 'light' ? 'white': '#285c44' ,color: props.mode === 'light' ? 'black': 'white'}} className="form-control" id="exampleFormControlTextarea1" value={text} rows="6">
            </textarea>
             </div>
              <button disabled={text.length===0} type="button" onClick={handleUpClick} className="btn btn-primary my-3 mx-2">Convert to Uppercase </button >
              <button disabled={text.length===0} type="button" onClick={handleLoClick} className="btn btn-primary my-3 mx-2">Convert to Lowercase </button>
             <button  disabled={text.length===0} type="button" onClick={handleClearClick} className="btn btn-primary my-3 mx-2">Clear all the Text</button>
             <button  disabled={text.length===0} type="button" onClick={handleSpaceClick} className="btn btn-primary my-3 mx-2">Remove Extra Spaces</button>
             <button  disabled={text.length===0} type="button" onClick={handleCopyClick} className="btn btn-primary my-3 mx-2">Copy text to Clipboard</button>
            <h2>Your Text Summary:</h2>
            <p>Total Words= {text.split(/\s+/).filter((element)=>{return element.length !== 0}).length  }</p>
            <p>Total Characters={text.length}</p>
            <p>Time Required to read={text.split(/\s+/).filter((element)=>{return element.length !== 0}).length *0.008} minutes</p>
             <h2 className='my-3'>Preview:</h2>
             <p>{text.length===0 ? "Nothing to Perview" : text}</p>
        </div> 
    
  )
}
