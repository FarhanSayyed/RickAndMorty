import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetcharactersService {
  serverurl:string= "https://rickandmortyapi.com/api/"
  constructor(private http:HttpClient) { }

  getdatafromserver(Path:any){
    let url=this.serverurl + Path
    return this.http.get<any>(url)

  }










}
