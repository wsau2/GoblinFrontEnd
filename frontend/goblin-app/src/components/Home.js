import React, {useCallback, useRef, useState} from 'react'
import "./Home.css"


import Webcam from "react-webcam"

function Home() {
    
    

    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);

    // Button onClick event. Captures webcam screenshot and saves it in a useState
    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);

        fetch('https://pokeapi.co/api/v2/pokemon/squirtle')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(json => console.log(json));

    }, [webcamRef, setImgSrc]);




    return (
        <div className=''>
            <h1>HackUMass</h1>
            <div className='d-flex justify-content-center'>
                <Webcam id="webcam" ref={webcamRef} screenshotFormat="image/jpeg" mirrored="true"/><br/>
            </div><br/>
            <div className='d-flex justify-content-center'>
                <button onClick={capture} className='btn btn-primary'>Capture photo</button><br/>
            </div>
            
            
            {imgSrc && (
                <img src={imgSrc} alt="webcam"/>
            )}
            
        </div>
    )
}



export default Home;