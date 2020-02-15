require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";

import 'mapbox-gl/dist/mapbox-gl.css';
// internal imports
import { initMapbox } from '../plugins/init_mapbox';

initMapbox();
