import { MapContainer, TileLayer, Marker, Popup, Polygon, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { mapPin, pinShadow } from "../../assets/location";
import { locationData } from "../../data/location";
import { ampelokipoi, stavroupoli, evosmos, polichni } from "../../data/areas";
import PropTypes from "prop-types";

const AreasMapDisplay = ({ visibleAreas, isSmallScreen }) => {

  AreasMapDisplay.propTypes = {
    visibleAreas: PropTypes.object,
    isSmallScreen: PropTypes.bool,
  };

  const customMarker = new L.icon({
    iconUrl: mapPin,
    shadowUrl: pinShadow,
    iconSize: [40, 40],
    shadowSize: [40, 55],
    iconAnchor: [20, 40],
    shadowAnchor: [20, 40],
    popupAnchor: [0, -40]
  });

  const areas = [
    { name: 'Αμπελόκηποι', coordinates: ampelokipoi },
    { name: 'Σταυρούπολη', coordinates: stavroupoli },
    { name: 'Εύοσμος', coordinates: evosmos },
    { name: 'Πολίχνη', coordinates: polichni }
  ];

  return (
    <div>
      <MapContainer
        attribution='&amp;copy <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        center={{ lat: locationData.lat, lng: locationData.lng }}
        zoom={{ isSmallScreen } ? 11 : 13}
        scrollWheelZoom={false}
        className="w-[300px] md:w-[450px] xl:w-[600px] h-[250px] md:h-[320px] xl:h-[400px] z-0 object-contain drop-shadow-xl"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Marker
          key="Locksmith Leventeli A."
          position={{ lat: locationData.lat, lng: locationData.lng }}
          icon={customMarker}
        >
          <Popup>
            <h1 className="font-body font-bold text-lg">{locationData.title}</h1>
            <h2 className="font-title font-bold text-lg text-darkGold">{locationData.subtitle}</h2>
            <h3 className="font-body font-bold text-md">{locationData.text}</h3>
          </Popup>
        </Marker>

        {areas.map((area, id) => (
          visibleAreas[area.name] && (
            <Polygon
              key={id}
              positions={area.coordinates}
              pathOptions={{ color: 'red' }}
            >
              <Tooltip sticky>{area.name}</Tooltip>
            </Polygon>
          )
        ))}
      </MapContainer>
    </div>
  );
}

export default AreasMapDisplay;