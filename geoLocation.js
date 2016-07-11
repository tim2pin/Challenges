/**
Create function `getGeo()` that returns a Promise.

This Promise will resolve to a coordinates object like: 
{ lat: ..., long: ... } 

if the `navigator.getGeolocation()` call is successful, 
and will reject with an error message if not.
**/

function getGeo(){
    return new Promise(function (resolve, reject){
    navigator.geolocation.getCurrentPosition(function (pos){
      var coordinates = {
        lat: pos.coords.latitude,
        long: pos.coords.longitude
      };
      resolve(coordinates);
    });
    });
}
getGeo().then(function(coordinates){
  console.log(coordinates);
});
