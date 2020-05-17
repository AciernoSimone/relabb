import { Component, OnInit } from '@angular/core';
import { FeatureCollection } from '../models/featureCollection.model.js';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ang-maps';
  // google maps zoom level
  geoJsonObject: FeatureCollection; //Oggetto che conterrà il vettore di GeoJson
  obsGeoData: Observable<FeatureCollection>;

  constructor(public http: HttpClient) {
  //Facciamo iniettare il modulo HttpClient dal framework Angular (ricordati di importare la libreria)
  }

  //Metodo che scarica i dati nella variabile geoJsonObject
  prepareData = (data: FeatureCollection) => {
    this.geoJsonObject = data
    console.log( this.geoJsonObject );
  }

  //Una volta che la pagina web è caricata, viene lanciato il metodo ngOnInit scarico i    dati
  //dal server
  ngOnInit() {
    this.obsGeoData = this.http.get<FeatureCollection>("https://3000-b5234404-990e-49ae-a442-0feb58cb83d5.ws-eu01.gitpod.io/");
    this.obsGeoData.subscribe(this.prepareData);
  }
}
