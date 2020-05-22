import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
  
    
  constructor() { }

  ngOnInit() {
  }
  counter(i:number){
    return new Array(i)
  }
  crew: string[] = ["Jessica Watkins", "Raja Chari", "Jasmin Moghbeli"];
}
