import { Component, OnInit } from '@angular/core';
import {MapDirectionsService} from '@angular/google-maps';
@Component({
  selector: 'app-direction-renderer',
  templateUrl: './direction-renderer.component.html',
  styleUrls: ['./direction-renderer.component.css']
})
export class DirectionRendererComponent implements OnInit {

  center :google.maps.LatLngLiteral= {
    lat:12.3900,
    lng:80.5787
  }

  constructor() { }

  ngOnInit() {
  }

}
