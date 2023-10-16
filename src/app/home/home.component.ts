import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private service:BackendService){}
  public languages:any=[];
   ngOnInit()
   {
      this.service.getLanguages().subscribe((data:any)=>{
           console.log("[+]Language --->",data);
           if(data.data)
           {
            this.languages=data.data.languages;
           }
      })
   }
}
