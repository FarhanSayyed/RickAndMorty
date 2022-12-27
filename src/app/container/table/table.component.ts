import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GetcharactersService } from 'src/app/services/getcharacters.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  chararr:any = []
  infoarr:any=[]
  @Output() emitdata:EventEmitter<any> = new EventEmitter();
  @Input() srchedvalue = ''
  constructor(private svc:GetcharactersService){}
  ngOnInit(): void {
   
    this.getpage();
    
  
  }
  
  getpage(){
    
    for(var i = 1; i<=42; i++){
      let path = 'character?page='+i
    this.svc.getdatafromserver(path).subscribe((data)=>{
      this.chararr.push(...data.results)
    })}
    

  }
  sendDataToParent(char_info:any){
    // alert(char_info.name)
    this.emitdata.emit(char_info)

  }

  


}
