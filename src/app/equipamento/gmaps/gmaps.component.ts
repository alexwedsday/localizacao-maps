import { Component, Input, OnInit,  } from '@angular/core';
import { Equipamento } from '../modelo';

declare var google: any;

@Component({
  selector: 'app-gmaps',
  templateUrl: './gmaps.component.html',
  styleUrls: ['./gmaps.component.css']
})
export class GmapsComponent implements OnInit {

  @Input() equipamentos: Array<Equipamento> = [];
  infoWindow: any;
  options: any;
  overlays: any[] = [];

  constructor() { 
    
    this.options = {
      center: { lat: -26.209215, lng: -52.695735},
      zoom: 12,
    };
    
  }

  ngOnInit() {
    this.initOverlays();
    this.infoWindow = new google.maps.InfoWindow();
  }

  initOverlays() {
    if (!this.overlays || !this.overlays.length) {
      for (let e in this.equipamentos) {
        let latitude = Number(this.equipamentos[e].localization.latitude.toFixed(6));
        let longitude = Number(this.equipamentos[e].localization.longitude.toFixed(6));
        let title = this.equipamentos[e].serial;

        this.overlays.push(
          new google.maps.Marker({
            position: { lat: latitude, lng: longitude },
            title: title,
          })
        );
      }
    }
  }

}
