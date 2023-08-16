import React from "react";
import WebCam from "react-webcam";
import { useCallback, useRef, useState } from "react"; // import useCallback
import { saveAs } from "file-saver";

export default function CameraPage() {
    const webcamRef = useRef(null); // create a webcam reference
    const [imgSrc, setImgSrc] = useState(null); // initialize it
    
    
    // 사진찍는 함수
    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
    }, [webcamRef]);


    // 다시 찍기
    const retake = () => {
        setImgSrc(null);
    };

    // 사진 저장
    const save = () => {
        saveAs(imgSrc, "test.jpg");
    }

return (
    <div>
        <div style={{width:'820px', height:'500px', backgroundColor:'skyblue'}}>
            {imgSrc ? ( 
                <img src={imgSrc} alt="webcam"></img>
            ) 
            : (<WebCam 
                ref={webcamRef}
                mirrored
                screenshotFormat="image/jpeg"
                screenshotQuality={0.8}
                style={{width:'80%', margin:'10px'}} />)}
            
            <div className="btn-container">
                {imgSrc ? (
                    <div>
                        <button onClick={retake}>Retake photo</button>
                        <button onClick={save}>Save photo</button>
                    </div>
                    ) : (
                    <button onClick={capture}>Capture photo</button>
                    )}
            </div>
        </div>

    </div>
);
}