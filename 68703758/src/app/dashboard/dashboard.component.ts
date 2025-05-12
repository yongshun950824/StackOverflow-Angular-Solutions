import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
//import {Poste} from "@/Model/Poste";
import { Poste } from '../model/posts/poste.model';
//import {PosteService} from "@services/poste.service";
import { PosteService } from '../services/poste.service';
import { HttpErrorResponse } from '@angular/common/http';
//import {SharedDataService} from "@services/shared-data.service";
import { SharedDataService } from '../services/shared-data.service';
import { ToastrService } from 'ngx-toastr';

// default icon (blue)
let iconDefault = L.icon({
  iconUrl: 'assets/marker-icon.png',
  shadowUrl: 'assets/marker-shadow.png',

  iconSize: [25, 41], // size of the icon
  shadowSize: [41, 41], // size of the shadow
  iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
  shadowAnchor: [12, 41], // the same for the shadow
  popupAnchor: [1, -34] // point from which the popup should open relative to the iconAnchor
});
// red icon
let redIcon = L.icon({
  iconUrl: 'assets/marker-icon-red.png',
  shadowUrl: 'assets/marker-shadow.png',

  iconSize: [25, 41], // size of the icon
  shadowSize: [41, 41], // size of the shadow
  iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
  shadowAnchor: [12, 41], // the same for the shadow
  popupAnchor: [1, -34] // point from which the popup should open relative to the iconAnchor
});
// user icon
let userIcon = L.icon({
  iconUrl:
    'https://assets.mapquestapi.com/icon/v2/flag-Moi-3B5998-22407F-lg.png',
  popupAnchor: [1, -34] // point from which the popup should open relative to the iconAnchor
});

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  public postes: Poste[];
  public map;
  public posteInfo: Poste;
  public delegations: number[];
  public selectedDeleg: number;
  public markerGroup;
  public rangeValues: number[] = [0, 100];

  constructor(
    private posteService: PosteService,
    private sharedDataService: SharedDataService,
    private toastr: ToastrService
  ) {
    this.selectedDeleg = 0;
  }

  ngAfterViewInit() {
    this.createMap();

    L.Routing.control({
      waypoints: [L.latLng(57.74, 11.94), L.latLng(57.6792, 11.949)]
    }).addTo(this.map);
  }

  createMap() {
    const Casablanca = {
      lat: 33.5731104,
      lng: -7.5898434
    };

    const ZoomLevel = 12;
    this.map = L.map('map', {
      center: [Casablanca.lat, Casablanca.lng],
      zoom: ZoomLevel
    });

    const mainLayer = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        minZoom: 11,
        maxZoom: 17,
        attribution: '&copy; Carte LYDEC '
      }
    );
    mainLayer.addTo(this.map);
    this.getPostes();
  }

  getPostes() {}

  // ERROR
}
