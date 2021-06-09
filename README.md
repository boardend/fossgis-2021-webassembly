# Webassembly: Wo wir sind und wo es hingehen könnte (DE)

Lightning Talk @ **[FOSSGIS 2021](https://www.fossgis-konferenz.de/2021/)** (English: "**_Webassembly: Where we are and where we are heading_**").

> **Video**: https://media.ccc.de/v/fossgis2021-9601-webassembly-wo-wir-sind-und-wo-es-hingehen-knnte

> **Slides**: https://boardend.github.io/fossgis-2021-webassembly/

> **Session**: https://www.fossgis-konferenz.de/2021/sessions/ZVFZQQ.php

## Description (DE)

Webassemblys Potential ist insbesondere für die Verarbeitung und Visualisierung von Geo-Daten noch nicht ausgeschöpft. In diesem Talk möchte ich Ihnen die aktuelle Adaption in FOSSGIS-Projekten, die technische Weiterentwicklung sowie mögliche Zukunftsszenarien von Webassembly aufzeigen.

## Scritps

- [`./scripts/gdal.html`](https://boardend.github.io/fossgis-2021-webassembly/scripts/gdal.html)

  - in-browser GDAL example, uses [gdal3.js](https://github.com/trylab-net/gdal3.js)

- [`./scripts/frames2mp4.html`](https://boardend.github.io/fossgis-2021-webassembly/scripts/frames2mp4.html)
  - stiches, fades and renders frames from [Google Earth Studio](https://www.google.com/intl/de/earth/studio/) with [ffmpeg.wasm](https://github.com/ffmpegwasm/ffmpeg.wasm) to a .mp4 video

## Acknowledgements

- **Links** in Slides
  - [WebAssembly - a new technology and its potential for geospatial application](https://media.ccc.de/v/bucharest-230-webassembly-a-new-technology-and-its-potential-for-geospatial-application) | Pirmin Kalberer @ FOSS4G 2019
  - [A Cartoon Intro to WebAssembly](https://github.com/matiassingers/awesome-readme) | Lin Clark @ JSConf 2017
  - [Building a new kind of ecosystem](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project) | Lin Clark @ WebAssembly Summit 2020
  - [How we're bringing Google Earth to the web (2019)](https://web.dev/earth-webassembly/)
  - [WebAssembly’s post-MVP future: A cartoon skill tree](https://hacks.mozilla.org/2018/10/webassemblys-post-mvp-future/)
- **Libraries** used

  - [impress.js](https://github.com/impress/impress.js/)
  - [gdal3.js](https://github.com/trylab-net/gdal3.js)
  - [ffmpeg.wasm](https://github.com/ffmpegwasm/ffmpeg.wasm)

- **Other Sources** where I've found inspiration
  - [An Introduction to WebAssembly for JavaScript Developers](https://pascalpares.appspot.ovh/webassembly-for-javascript-developers/#Introduction)
  - [Javascript and the next decade of data programming](http://benschmidt.org/post/2020-01-15/2020-01-15-webgpu/)
  - [WebAssembly Summit](https://www.youtube.com/channel/UCh9PqDCdacsTpyRaIryhA8g) @ Youtube
  - [WebAssembly Roadmap](https://webassembly.org/roadmap/)
  - [History of WebAssembly (Chrome University 2019)](https://www.youtube.com/watch?v=6r0NKEQqkz0)
  - [Is WebAssembly magic performance pixie dust?](https://surma.dev/things/js-to-asc/)
  - [Awesome Wasm](https://github.com/mbasso/awesome-wasm)
  - [Awesome WebAssembly Languages](https://github.com/appcypher/awesome-wasm-langs)
  - [Made with WebAssembly](https://madewithwebassembly.com/)

## **Adoption** of WebAssembly in the geo field

- Cesium
  - https://cesium.com/blog/2018/04/09/draco-compression/
  - https://loaders.gl/
    - https://github.com/BinomialLLC/basis_universal/blob/master/webgl/README.md
    - https://github.com/google/draco
  - https://github.com/zeux/meshoptimizer
- MapBox
  - https://github.com/mapbox/mapbox-gl-js/issues/4835
  - https://avnav.com/mbgl/
- spatiasql.js
  - http://jvail.github.io/spatiasql.js/?qry=SELECT%20*%20FROM%20toscana
- Wasm Geo Aggregator
  - https://stuartlynn.github.io/wasm_geo_agg/
- Google Earth
  - https://web.dev/earth-webassembly/
  - https://blog.chromium.org/2019/06/webassembly-brings-google-earth-to-more.html
- ESRI
  - https://www.esri.com/arcgis-blog/products/js-api-arcgis/mapping/introducing-the-client-side-projection-engine/
- Do you have more examples?
  - Sumit a PR 🤓

## License

[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
