import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetcharactersService } from '../services/getcharacters.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  selectedchar:any={}
  recievedSearchedValue:string=''
  constructor(){}
  ngOnInit(): void {
   
  }
  recievedSearchValue(srchdval:string){
   this.recievedSearchedValue = srchdval;
  //  console.log(this.recievedSearchedValue);
   
   
   
  }


}
