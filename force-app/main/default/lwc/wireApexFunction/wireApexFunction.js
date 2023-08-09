import { LightningElement, wire, track } from 'lwc';
import getAccountList from '@salesforce/apex/AccountHelper.getAccountList'

export default class WireApexFunction extends LightningElement {
   
   @track accounts
    @wire(getAccountList)
    wiredAccounts ({data,error}){
        if(data){
            console.log(data)
            this.accounts = data
        }
        if(error){
            console.error(error)
        }
    }
}