import { LightningElement } from 'lwc';

export default class ChildCmp extends LightningElement {
searchkey;
 
handleChange(event){
    this.searchkey = event.target.value;

//Create Event

const searchEvent =  new customEvent ("getsearchvalue",{
    detail:this.searchkey
});

//dispatchevent

this.dispatchEvent(searchEvent);

}

}