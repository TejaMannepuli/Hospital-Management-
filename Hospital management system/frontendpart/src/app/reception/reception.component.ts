import { Component } from '@angular/core';

@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.css']
})
export class ReceptionComponent {
  constructor(){}
  p:number=1;
  collection:any[]=[1];
  close:boolean=false;
  ngOnInit():void{}
    showBook(){
      this.close=!this.close;
    }
}
