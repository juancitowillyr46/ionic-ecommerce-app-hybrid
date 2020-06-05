import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-assigned-orders',
  templateUrl: './assigned-orders.page.html',
  styleUrls: ['./assigned-orders.page.scss'],
})
export class AssignedOrdersPage implements OnInit {

  private map;
  public segmentValue: string;
  public assignedOrders: AssignedOrdersDto[] = [];

  constructor() { 

  }

  ngOnInit() {
    this.segmentValue = 'list';
    this.assignedOrders = [
      {numOrder: 1, amount: 120.00, customer: "Juan Rodas", lat: -11.9941352, lng: -77.0019853},
      {numOrder: 2, amount: 150.00, customer: "Bryan Bolaños", lat: -12.0407, lng: -77.0760},
      {numOrder: 3, amount: 160.00, customer: "Yolanda Ibarra", lat: -12.1092, lng: -77.0375},
      {numOrder: 4, amount: 170.00, customer: "Juan Guerra", lat: -12.0192, lng: -77.0801},
      {numOrder: 5, amount: 180.00, customer: "Katy Chumbes", lat: -12.0917, lng: -77.0389},
      {numOrder: 6, amount: 190.00, customer: "Christian Vera", lat: -11.9748, lng: -77.0567},
      {numOrder: 7, amount: 220.00, customer: "Silvia Rodriguez", lat: -12.0071, lng: -77.0938}
    ];
  }

  ionViewDidEnter() {
    this.initMap();
  }

  ionViewWillLeave() {
    this.map.remove();
  }
  
  private initMap(): void {
    this.map = L.map('map', {
      center: [ -11.9910, -77.0729 ],
      zoom: 11
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.map);
  }

  private addMarkers(): void {
    let greenIcon = L.icon({
      iconUrl: 'https://raw.githubusercontent.com/Leaflet/Leaflet/master/dist/images/marker-icon-2x.png',
      iconSize: [25, 38],
    });

    this.assignedOrders.forEach(order => {
      L.marker([order.lat, order.lng], {icon: greenIcon}).addTo(this.map);
    });
    
  }

  public segmentChanged(event: any) {
    console.log(event.detail.value);
    this.segmentValue = event.detail.value;

    if(this.map) {
      this.map.remove();
    }

    setTimeout(() => {
      this.initMap();
      this.addMarkers();
    }, 1);
    
  }

  public doRefresh(event: any) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  public loadData(event: any) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      // if (data.length == 1000) {
      event.target.disabled = true;
      // }
    }, 500);
  }

}
