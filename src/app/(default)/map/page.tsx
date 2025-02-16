'use client'
import Script from "next/script"
import { useEffect } from "react";

declare var NgwMap: any;

export default function PageMap() {
  const initYmaps = () => {
    NgwMap.create({
      baseUrl: 'https://geois2.orb.ru/resource/8800',
      target: 'map',
      center: [51.768205, 55.097000],
      auth: {
          login: "hackathon_25",
          password: "hackathon_25_25"
      },
      zoom: 12,
      adapterOptions: {
          selectable: !0
      }
    });

  };


  return (
    <>
      <Script
        src={`https://unpkg.com/@nextgis/ngw-maplibre-gl`}
        onLoad={() => initYmaps()}
        onError={() => console.error("Script failed to load")}
      />
      <div id="map" className="w-full h-full" style={{ height: '500px' }}></div>
    </>
  );
}