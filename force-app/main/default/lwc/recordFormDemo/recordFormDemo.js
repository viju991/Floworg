import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import NAME_FIELD from '@salesforce/schema/Account.Name'
import ANNUAL_FIELD from '@salesforce/schema/Account.AnnualRevenue'
import TYPE_FIELD from '@salesforce/schema/Account.Type'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import PHONE_FIELD from '@salesforce/schema/Account.Phone'

export default class RecordFormDemo extends LightningElement {
    objectname = ACCOUNT_OBJECT;
    fields = [NAME_FIELD,ANNUAL_FIELD,TYPE_FIELD,INDUSTRY_FIELD,PHONE_FIELD]

    successHandler(event){
        console.log(event.detail.id)

        const toastevent = new ShowToastEvent ({
            title : "Account Created Successfully",
            message: "Record Id is : " +event.detail.id,
            variant: "success"
        })
        this.dispatchEvent(toastevent)
    }
}