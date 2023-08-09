import { LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import Id from '@salesforce/user/Id'

export default class WireDemoUserDetails extends LightningElement {
    userId = Id
    userDetails
    @wire(getRecord, {recordId:'0052w00000Ge42cAAB', fields:['user.Name','user.Email']})
    userdetailsdata({data,error}){
        if(data){
            console.log(data)
            this.userDetails = data.fields
        }
        if(error){
            console.error(error)
        }
    }

    @wire(getRecord, {recordId:'0052w00000Ge42cAAB', fields:['user.Name','user.Email']})
    userdetailproperty
}