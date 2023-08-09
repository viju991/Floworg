import { LightningElement, track } from 'lwc';
import GetPin from '@salesforce/apex/PinCode.GetPin';

export default class PinCode extends LightningElement {
    @track pin;
    @track response = [];

    handleInputChange(event){
        this.pin = event.target.value
    }
    handleClick(){
        GetPin({Pin:this.pin})
        .then(result=>{
            //this.response = result
            console.log('Response '+result);
        }).catch(error=>{
            console.error(error)
        })

    }
    
}