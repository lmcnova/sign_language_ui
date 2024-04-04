import React, { useState, useRef } from "react";
import Webcam from 'react-webcam';

const AllCameras = () => {
    const [devices, setDevices] = useState([]);
    const [camerasEnabled, setCamerasEnabled] = useState(false);

    const handleDevices = React.useCallback((mediaDevices) => {
        setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput"));
    }, [setDevices]);

    React.useEffect(() => {
        navigator.mediaDevices.enumerateDevices().then(handleDevices);
    }, [handleDevices]);

    const toggleCameras = () => {
        setCamerasEnabled(!camerasEnabled);
    };

    return (
        <>
            <button onClick={toggleCameras}>
                {camerasEnabled ? "Disable Cameras" : "Enable Cameras"}
            </button>
            {camerasEnabled && (
                <>
                    {devices.map((device, key) => (
                        <div key={key}>
                            <Webcam audio={false} videoConstraints={{ deviceId: device.deviceId }}/>
                            {device.label || `Device ${key + 1}`}
                        </div>
                    ))}
                </>
            )}
        </>
    );
}

export default AllCameras;
