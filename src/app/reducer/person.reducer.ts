
import * as PersonActions from '../action/person.action'
import { Action } from '@ngrx/store'
import { Person } from 'src/app/models/modelPerson'

// Section 1
const initialState: Person = {
    fName: 'Ram',
    lName: 'Sharma'
}

// Section 2
export function reducer(state: Person[] = [initialState], action: PersonActions.Actions) {


    switch(action.type) {
        case PersonActions.ADD_PERSON:
            return [...state, action.payload];
        
        // // Add this case:
        // case PersonActions.REMOVE_PERSON:
        //     state.splice(action.payload, 1)
        //     return state;
            
        default:
            return state;
}
}