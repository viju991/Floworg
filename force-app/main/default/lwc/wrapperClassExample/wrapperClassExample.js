import { LightningElement, track, wire } from 'lwc';
import getAllAccountsWithContacts from '@salesforce/apex/AccountContactController.getAllAccountsWithContacts';

export default class WrapperClassExample extends LightningElement {
    @track accountsWithContact;
    @track error;
    @wire(getAllAccountsWithContacts)
    wiredAccountsWithContacts({data,error}){
        if(data){
            console.log(data)
            this.accountsWithContact = data;
        }
        if(error){
            this.error = error;
        }
    }
}