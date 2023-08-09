import { LightningElement, track } from 'lwc';

export default class ParentCmp extends LightningElement {
    @track searchvalue;
    handlesearchvalue (event){
        this.searchvalue = event.detail;
    }
}