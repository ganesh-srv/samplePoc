import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-topfields',
  templateUrl: './topfields.component.html',
  styleUrls: ['./topfields.component.scss']
})
export class TopfieldsComponent implements OnInit {
  public selectForm: FormGroup;
  constructor(  private readonly fb: FormBuilder) { }
  public people:any;
  foods: any = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  ngOnInit() {
 


  }

}
