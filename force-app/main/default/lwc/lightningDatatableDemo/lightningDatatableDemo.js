import { LightningElement, api, wire, track } from 'lwc';
import getAccountList from '@salesforce/apex/AccountHelper.getAccountList'

export default class LightningDatatableDemo extends LightningElement {
    @track columns = [{
        label:'Account Name',
        fieldName: 'Name',
        type: 'text',
        sortable: true
    },
    {
    label:'Type',
    fieldName: 'Type',
    type: 'text',
    sortable: true
},
{
label:'Annual Revenue',
fieldName: 'AnnualRevenue',
type: 'Currency',
sortable: true
},

{
label:'Phone',
fieldName: 'Phone',
type: 'phone',
sortable: true
},
{
label:'Website',
fieldName: 'NWebsite',
type: 'url',
sortable: true
},
{
label:'Rating',
fieldName: 'Rating',
type: 'text',
sortable: true
}]
  
@track acclist
@track error 
@wire(getAccountList)
wiredAccounts({data,error}){
    if(data){
        console.log(data)
        this.acclist = data
    }
    if(error){
        this.error= error
    }
}
}