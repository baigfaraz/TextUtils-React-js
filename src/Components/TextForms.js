import React, { useState } from 'react';

export default function TextForms(props) {

    const whenClick1 = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const whenClick2 = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const whenClick3 = () => {
        
        setText("");
    }
    const textChange = (event) => {
        setText(event.target.value);
    }
    const copyToClipBoard = () =>{
        var text = document.getElementById("myBox");
        text.Select();
        navigator.clipboard.writeText(text.value);
    }

    const [text, setText] = useState("Enter here");

    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label for="myBox" class="form-label"></label>
                <textarea className="form-control" value={text} onChange={textChange} id="myBox" rows="8"></textarea>
            </div>
            <div className='container'>
                <button className='btn btn-primary mx-1' onClick={whenClick1} >Convert to UpperCase</button>
                <button className='btn btn-primary mx-1' onClick={whenClick2} >Convert to LowerCase</button>
                <button className='btn btn-primary mx-1' onClick={whenClick3} >Remove Content</button>
                <button className='btn btn-primary mx-1' onClick={copyToClipBoard} >Copy Text</button>
            </div>
        </div>
        <div className='container my-3'>
            <h1>Your text summary</h1>
            <p>Total words {(text.split(" ").length) -1}</p>
            <p>Total characters {text.length}</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div> 
        </>
    )
}
