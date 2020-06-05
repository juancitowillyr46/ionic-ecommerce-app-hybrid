import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit {

  private map;

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    // this.map = L.map('map', {
    //   center: [ -12.0264987, -77.2679746 ],
    //   zoom: 13
    // });
    // const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   maxZoom: 19,
    //   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    // });

    // tiles.addTo(this.map);
    // L.marker([-11.9941352, -77.0019853]).addTo(this.map);
  }

}
