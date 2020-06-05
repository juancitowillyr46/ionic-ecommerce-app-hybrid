import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map-orders',
  templateUrl: './map-orders.page.html',
  styleUrls: ['./map-orders.page.scss'],
})
export class MapOrdersPage implements OnInit {

  private map;

  constructor() { }

  ionViewDidEnter() {
    this.initMap();
  }

  // ionViewWillLeave() {
  //   this.map.remove();
  // }

  ngOnInit() {
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [ -11.9910, -77.0729 ],
      zoom: 10
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
    // https://raw.githubusercontent.com/Leaflet/Leaflet/master/dist/images/marker-icon-2x.png
    var greenIcon = L.icon({
      iconUrl: 'https://raw.githubusercontent.com/Leaflet/Leaflet/master/dist/images/marker-icon-2x.png',
      // shadowUrl: 'https://raw.githubusercontent.com/Leaflet/Leaflet/master/dist/images/marker-shadow.png',
      iconSize: [25, 38],
      // iconSize:     [20, 20], // size of the icon
      // shadowSize:   [50, 64], // size of the shadow
      // iconAnchor:   [20, 20], // point of the icon which will correspond to marker's location
      // shadowAnchor: [4, 62],  // the same for the shadow
      // popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    L.marker([-11.9941352, -77.0019853], {icon: greenIcon}).addTo(this.map);
    L.marker([-12.0407, -77.0760], {icon: greenIcon}).addTo(this.map);
    L.marker([-12.1092, -77.0375], {icon: greenIcon}).addTo(this.map);
    L.marker([-12.0192, -77.0801], {icon: greenIcon}).addTo(this.map);
    L.marker([-12.0917, -77.0389], {icon: greenIcon}).addTo(this.map);
    L.marker([-11.9748, -77.0567], {icon: greenIcon}).addTo(this.map);
    L.marker([-12.0071, -77.0938], {icon: greenIcon}).addTo(this.map);
  }

}
