

function tilt (tilt) {
    var display= document.getElementById('tilt');
    display.innerHTML = JSON.stringify(tilt);
    
}


if (window.DeviceOrientationEvent) {
		window.addEventListener("deviceorientation", function(event) 
		{
            var tilt = {
                x:Math.round(event.gamma),
                y:Math.round(event.beta),
                rot:Math.round(event.alpha),
            }

			tilt(tilt)
		}, true);
	} else {
	alert("Sorry, your browser doesn't support Device Orientation");
	}