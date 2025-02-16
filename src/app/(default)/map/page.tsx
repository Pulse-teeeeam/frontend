'use client'
import Script from "next/script"
import geo_borders from './9.json'

export default function PageMap() {
  const initYmaps = () => {
    if (typeof ymaps !== "undefined") {
      var myMap = new ymaps.Map("map", {
        center: [51.768202, 55.096996],
        zoom: 10,
      });
  
      console.log(geo_borders);
      geo_borders.features.forEach((feature) => {
        const polygon = new ymaps.GeoObject(
          {
            geometry: {
              type: "Polygon",
              coordinates: feature.geometry.coordinates[0],
            },
            properties: {hintContent: feature.properties.name},
          }
        );
        myMap.geoObjects.add(polygon);
        console.log(polygon)
      });
    } else {
      console.error("Yandex Maps API not loaded");
    }
  };
  

  return (
    <>
      <Script
        onLoad={() => ymaps.ready(initYmaps)}
        src={`https://api-maps.yandex.ru/2.1/?apikey=06839ef3-ad7a-480e-8499-e1818b1c744c&lang=ru_RU`}
      />
      <div id="map" className="w-full h-full"></div>
    </>
  );
}
