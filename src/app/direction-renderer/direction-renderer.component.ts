import { Component, OnInit } from '@angular/core';
import {MapDirectionsService} from '@angular/google-maps';
import { Observable, map } from 'rxjs';
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

  zoom = 7;

  readonly directionsResults$: Observable<google.maps.DirectionsResult|undefined>;

  constructor(mapDirectionsService: MapDirectionsService) {
    const request: google.maps.DirectionsRequest = {
      destination: {lat:12.3900,lng:80.5787},
      origin: {lat:10.3999,lng:80.555},
      travelMode: google.maps.TravelMode.DRIVING
    };
    this.directionsResults$ = mapDirectionsService.route(request).pipe(map((response:any) => response.result));
  }

  ngOnInit() {
  }

}
