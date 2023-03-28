import React, { useRef } from "react";

// Importing geolocated reducer function
import { useGeolocated } from "react-geolocated";

const LocationButton = () => {
	// Check geolocation supported in
	// browser or not
	const checkRef = useRef();
	const handleClick = (e) => {
		e.preventDefault();
		console.log(checkRef.current.value);
	}
		
	const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });

    return !isGeolocationAvailable ? (
        <div>Your browser does not support Geolocation</div>
    ) : !isGeolocationEnabled ? (
        <div>Geolocation is not enabled</div>
    ) : coords ? (
        <table>
            <tbody>
                <tr>
                    <td>latitude</td>
                    <td>{coords.latitude}</td>
                </tr>
                <tr>
                    <td>longitude</td>
                    <td>{coords.longitude}</td>
                </tr>
                <tr>
                    <td>altitude</td>
                    <td>{coords.altitude}</td>
                </tr>
                <tr>
                    <td>heading</td>
                    <td>{coords.heading}</td>
                </tr>
                <tr>
                    <td>speed</td>
                    <td>{coords.speed}</td>
                </tr>
            </tbody>
        </table>
    ) : (
        <div>Getting the location data&hellip; </div>
    );

		// return(
		// 	<div>
		// 		<input type="checkbox" ref={checkRef}/>
		// 		<button onClick={handleClick}>click</button>
		// 	</div>
		// )
}

// Binding geolocated() reducer function to
// App component, while exporting it
export default LocationButton;