import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-data-visualization',
  templateUrl: './data-visualization.component.html',
  styleUrls: ['./data-visualization.component.scss']
})
export class DataVisualizationComponent implements OnInit {
  loginForm:FormGroup;
  initialDate = new FormControl();
  lastDate = new FormControl();
  constructor() {
   }

  ngOnInit() { }

  onSubmit(){
    console.log(this.initialDate.value + " " + this.lastDate.value);
    const date1 = new Date (this.initialDate.value);
    const date2 = new Date (this.lastDate.value);
    
    console.log(date1 +"  "+ date2)
  }

}
