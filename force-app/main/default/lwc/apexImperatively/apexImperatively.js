import { LightningElement, track } from 'lwc';
import getAccountList from '@salesforce/apex/AccountHelper.getAccountList'

export default class ApexImperatively extends LightningElement {
    
    @track accounts
    @track error
    handleLoad(){
        getAccountList()
            .then(result=>{
                this.accounts = result
            })
            .catch(error=>{
                this.error = error
            })
        }
    }
