import { LightningElement, api } from 'lwc';

export default class SpinnerDemo extends LightningElement {
    @api isLoaded = false
    handleClick(){
        this.isLoaded=!this.isLoaded
    }
}