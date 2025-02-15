// export default function PageMap() {
//     return <>
//         <iframe id='nextgis-iframe' src="https://geois2.orb.ru/resource/8898/display/tiny?base=basemap_0&lon=56.0944&lat=52.4383&angle=0&zoom=11&styles=8801%2C7986%2C7975%2C2092&linkMainMap=true&events=true&panel=none&controls=zo%2Czi%2Cma%2Cmd&panels=" className="w-screen h-screen md:w-full md:h-full overflow-hidden mt-8 md:rounded-2xl"></iframe>
//     </>
// }


'use client'

import { useEffect } from 'react';

export default function PageMap() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://unpkg.com/@nextgis/ngw-leaflet@3.0.0-alpha.16/lib/ngw-leaflet.global.prod.js";
    script.async = true;
    // script.onload = () => {
    //   if (window.NgwMap) {
    //     new window.NgwMap({
    //       baseUrl: 'https://geois2.orb.ru/resource/8898/display?base=basemap_0&lon=56.0935&lat=52.4135&angle=0&zoom=10&styles=8801,7986,7975,2092',
    //       target: 'map',
    //       qmsId: [448, 'baselayer'],
    //     });
    //   }
    // };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="map" style={{ width: '100%', height: '500px' }} />;
}
