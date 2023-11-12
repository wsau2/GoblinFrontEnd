import React, {useCallback, useRef, useState} from 'react'
import "./Home.css"


import Webcam from "react-webcam"

function Home() {
    
    

    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);

    const [videoSrc, setVideoSrc] = useState(null);

    const [playing, setPlaying] = useState(false);
    

    // Button onClick event. Captures webcam screenshot and saves it in a useState
    const capture = React.useCallback(async () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);

        const blob = await fetch(imageSrc).then(res => res.blob());

        const formData = new FormData();
        formData.append('face', blob, 'webcam_frame.jpg');

        fetch('http://127.0.0.1:5000/Lipsync', {
            method: 'POST',
            body: formData,
        })
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(json => {
            const returnedVideoUrl = json.output.output_video
            setVideoSrc(returnedVideoUrl);
            setPlaying(true);
        })
        .catch(error => console.error('Error sending image to API:', error));
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

        {videoSrc && (
            <div>
            <video
                src={videoSrc}
                autoPlay={playing} // Auto-play the video if it's playing
            />
            </div>
        )}
            
        </div>
    )
}



export default Home;