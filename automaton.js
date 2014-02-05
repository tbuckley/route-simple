var MPATH = "./route/modules/";

/* Import Route */
var Route = require(MPATH + "../route").Route;

/* Import supported devices */
// var Hue = require(MPATH + "hue").Hue;
// var Sonos = require(MPATH + "sonos").Sonos;
var Web = require(MPATH + "web").Web;

/* Create route instance */
var route = new Route({debug: false});

/* Define a device */
var web = route.addDevice({
  type: Web,
  name: "Web",
  init: {
    port: 8000,
    dir: "./web/",
  },
});

// route.addEventMap({
//   "Web.PlayMusic": "Sonos.Main.Play",
//   "Web.PauseMusic": "Sonos.Main.Pause",
//   "Web.PlayPause": "Sonos.Main.PlayPause",
//   "Web.NextTrack": "Sonos.Main.NextTrack",
//   "Web.PrevTrack": "Sonos.Main.PrevTrack",
// });

/* Dummy handler: handles "Echo" events from web by printing parameters through
 * a call to console.log().
 */
route.map("Web.Echo", function(command, params) {
  console.log("echo: " + params);
});