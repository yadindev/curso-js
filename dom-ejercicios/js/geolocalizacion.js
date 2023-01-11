const d = document,
  n = navigator;

export default function geoLoc(id) {
  const $id = d.getElementById(id),
    options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

  const success = (position) => {
    let coords = position.coords;
    console.log(position);
    $id.innerHTML = `
    
    <p>Tu posicion actual es:</p>
    <ul>
      <li>Latitud <b>${coords.latitude}</b></li>
      <li>Longitud <b>${coords.longitude}</b></li>
      <li>Presicion <b>${coords.accuracy}</b></li>
    </ul>
    `;
  };

  const error = (err) => {
    $id.innerHTML = `<p>
      <mark>Error ${err.code}: ${err.message}</mark>
    </p>`;
    console.log(err);
  };

  n.geolocation.getCurrentPosition(success, error, options);
}
