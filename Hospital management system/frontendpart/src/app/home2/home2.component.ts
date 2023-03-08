import { Component } from '@angular/core';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component {
  p:number=1;
  collection:any[]=[1];
  close:boolean=false;
  ngOnInit():void{}
    showBook(){
      this.close=!this.close;
    }
}
