import { Component, OnInit, ElementRef } from '@angular/core';
import { EsriLoaderService } from "angular-esri-loader";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(
    private elRef: ElementRef,
    private esriLoader: EsriLoaderService
  ) {  }

  public map: any;
  public view: any;

  ngOnInit() {
    this.esriLoader.load({
      url: '//js.arcgis.com/4.5'
    }).then( () => {
      this.esriLoader.loadModules(['esri/Map', 'esri/views/SceneView'])
      .then( ([Map, SceneView]) => {
        this.map = new Map({
          basemap: 'streets',
          ground: 'world-elevation',
          logo: false
        });

        this.view = new SceneView({
          container: this.elRef.nativeElement.firstChild,
          map: this.map
        });
      });
    });
  }

}
