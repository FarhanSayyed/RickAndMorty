import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchvalue:string = ''
  @Output() emitsearch:EventEmitter<string> = new EventEmitter<string>()
  constructor(){}

  searchevent(){
    // console.log(this.searchvalue)
    this.emitsearch.emit(this.searchvalue)
  }
}
