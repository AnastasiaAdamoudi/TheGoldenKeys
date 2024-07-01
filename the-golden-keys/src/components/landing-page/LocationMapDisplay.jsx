import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { locationData } from "../../data/location";
import { mapPinRed, pinShadow } from "../../assets/location";

const LocationMapDisplay = () => {
  const customMarker = new L.icon({
    iconUrl: mapPinRed,
    shadowUrl: pinShadow,
    iconSize: [40, 40],
    shadowSize: [40, 55],
    iconAnchor: [20, 40],
    shadowAnchor: [20, 40],
    popupAnchor: [0, -40],
  });

  return (
    <div>
      <MapContainer
        attribution='&amp;copy <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        center={[40.65195326692388, 22.924308881924105]}
        zoom={13}
        scrollWheelZoom={false}
        className="w-[320px] h-[320px] lg:w-[400px] lg:h-[400px] z-0 object-contain drop-shadow-xl"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Marker
          key="Locksmith Leventeli A."
          position={[40.65195326692388, 22.924308881924105]}
          icon={customMarker}
        >
          <Popup className="w-[250px] h-auto">
            <Popup>
              <h1 className="font-body font-bold text-lg">
                {locationData.title}
              </h1>
              <h2 className="font-title font-bold text-lg text-darkGold">
                {locationData.subtitle}
              </h2>
              <h3 className="font-body font-bold text-md">
                {locationData.text}
              </h3>
            </Popup>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LocationMapDisplay;
