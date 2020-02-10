import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Person } from 'src/app/models/modelPerson';
import {APPState} from 'src/app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  Persons: Observable<Person[]>;


  constructor(private store: Store<APPState>) { 
    this.Persons = store.select('persons');
  }

  ngOnInit() {
  }

}
