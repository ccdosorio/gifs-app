import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'QxRaym6bQPc8ZBpnkkitVq9UJcD6Z9Ez';
  private _historial: string[] = [];

  public resultados: Gif [] = [];

  get historial () {
    return [...this._historial];
  }

  constructor(private http: HttpClient) { }

  buscarGifs(query: string) {

    query = query.trim().toLocaleLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
    }

    this._historial = this._historial.slice(0,10);

    // console.log(this._historial);

    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=QxRaym6bQPc8ZBpnkkitVq9UJcD6Z9Ez&q=${query}&limit=10`)
    .subscribe((res) => {
      this.resultados = res.data;
    });

  }
}
