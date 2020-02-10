import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Person } from 'src/app/models/modelPerson';
import {APPState} from 'src/app.state';
import * as PersonActions from '../action/person.action'


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<APPState>) { }
  addPerson ( fName: string, lName: string){
    this.store.dispatch(new PersonActions.AddPerson({fName: fName, lName: lName}))
  }

  ngOnInit() {
  }

}
