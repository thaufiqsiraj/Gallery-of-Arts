import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
    const [index, setIndex] = useState(0);
    const [show, setShow] = useState(false);
    const hasNext = index < sculptureList.length-1;

    function handleNext() {
        if (hasNext) {
            setIndex(index + 1);
        }
        else{
            setIndex(0);
        }
    }

    function handleShow(){
        setShow(!show);
    }

    let sculpture = sculptureList[index];
    return (
        <div>
            <button onClick={handleNext}>Next</button>
            <h1>{sculpture.name} by {sculpture.artist}</h1>
            <p>{index+1} of {sculptureList.length}</p>
            <button onClick={handleShow}>{show ? 'Hide' : 'Show'} Details</button>
            {show && <p>{sculpture.description}</p>}
            <img src={sculpture.url}/>
        </div>
    );
}