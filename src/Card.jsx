import React, {useState} from 'react';
import './App.css';


function Card( {frontSide, backSide}) {

    const [isFront, changeFace] = useState(frontSide)
  const clickHandle = ()=> {
    changeFace(oldState => !oldState)
  }

  const text = isFront ? frontSide : backSide;
  const sideClass = isFront ? "front" : "back";
  const classList = `card ${sideClass}`;
    return (
        <div className={classList} onClick={clickHandle}>
            <div>{text}</div>
        </div>
    )
}

export default Card
