import { Map as ReactMap, Marker, NavigationControl } from '@vis.gl/react-maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import Pointer from '../../atoms/pointer/pointer.jsx';
import './css/map.css';

const center = {
  longitude: -3.7038,
  latitude: 40.4168,
};

const mapStyle = {
  version: 8,
  sources: {
    osm: {
      type: 'raster',
      tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
      tileSize: 256,
      attribution: 'OpenStreetMap',
    },
  },
  layers: [
    {
      id: 'osm',
      type: 'raster',
      source: 'osm',
    },
  ],
};

export default function Map() {
  return (
    <section className="map">
      <ReactMap
        initialViewState={{
          ...center,
          zoom: 12,
        }}
        mapStyle={mapStyle}
      >
        <NavigationControl position="top-right" />
        <Marker longitude={center.longitude} latitude={center.latitude} anchor="bottom">
          <Pointer />
        </Marker>
      </ReactMap>
    </section>
  );
}
