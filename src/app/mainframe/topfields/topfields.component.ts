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

  ngOnInit() {
this.selectForm = this.fb.group({
  personId: ['', Validators.nullValidator]
  /*   userComments1: ['', Validators.maxLength(this.commentsCharLengthLimit)] */
});

this.people = [{
'id':102,
'name':'Ganesh'
},
{
  'id':103,
  'name':'Ganesh srv'
  },
  {
    'id':104,
    'name':'kedar'
    }];
  }

}
