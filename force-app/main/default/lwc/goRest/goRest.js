import { LightningElement } from 'lwc';
import getUser from '@salesforce/apex/goRestClass.getUser'

export default class GoRest extends LightningElement {
    userDetails
   
    handleClick(){
        getUser({}).then(result=>{
            console.log('Response'+result)

            this.userDetails = JSON.parse(result)
            console.log('Result' +this.userDetails)
        })
    }

}