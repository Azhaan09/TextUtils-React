import React, {useState} from "react";
export default function TextForm(props){
  const handleUpClick = () =>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  }

  const handleLoClick = () =>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  }

  const handleOnChange = (event) =>{
    setText(event.target.value);
  }

  const handleFindChange = (event) =>{
    findWord(event.target.value);
  }

  const handleReplaceChange = (event) =>{
    replaceWord(event.target.value);
  }
const handleReplaceClick = () =>{
  let newText = text.replaceAll(fWord, rWord);
  setText(newText);
  props.showAlert("Word has been replaced successfully", "success");
}

const handleCopy = () =>{
  var text = document.getElementById("myBox");
  text.select();
  text.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(text.value);
  props.showAlert("Copied to Clipboard", "success");
}

const handleClearText = () =>{
  let newText = '';
  setText(newText);
  props.showAlert("Text has been cleared", "success");
}

const handleExtraSpace = () =>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Extra space has been removed", "success");
}

  const [text, setText] = useState('');
  const [fWord, findWord] = useState('');
  const [rWord, replaceWord] = useState('');

    return(
    <>
    <div>
  <h1>{props.heading}</h1>    
  <div className="mb-3">
    
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
  </div>
  <button className="btn btn-warning mx-2" onClick={handleUpClick}>convert to UpperCase</button>
  <button className="btn btn-warning mx-2" onClick={handleLoClick}>convert to LowerCase</button>
  <button className="btn btn-warning mx-2" onClick={handleClearText}>Clear Text</button>
  <button className="btn btn-warning mx-2" onClick={handleCopy}>Copy Text</button>
  <button className="btn btn-warning mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>
  </div>
  <div className="my-3">
    <h3>Find Word To Replace</h3>
   <textarea className="mx-2"value={fWord} onChange={handleFindChange} rows={1} placeholder="Find" ></textarea>
   <textarea className="mx-2" value={rWord} onChange={handleReplaceChange} rows={1} placeholder="Replace"></textarea>
   </div>
   <div>
   <button className="btn btn-warning mx-3" onClick={handleReplaceClick}>Find & Replace</button>
   </div>
  <div className='container my-3'>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
  </>
  )
}