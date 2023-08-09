import { LightningElement } from 'lwc';
import CONTACT_OBJ from '@salesforce/schema/Contact'
import ACCOUNT_FIELD from '@salesforce/schema/Contact.AccountId'
import NAME_FIELD from '@salesforce/schema/Contact.Name'
import TITLE_FIELD from '@salesforce/schema/Contact.Title'
import PHONE_FIELD from '@salesforce/schema/Contact.Phone'
import EMAIL_FIELD from '@salesforce/schema/Contact.Email'

export default class RecordEditForm extends LightningElement {
    objectname = CONTACT_OBJ

    fields = {
        accountfield:ACCOUNT_FIELD,
        namefield:NAME_FIELD,
        titlefield:TITLE_FIELD,
        phonefield:PHONE_FIELD,
        emailfield:EMAIL_FIELD
    }

    resetHandler(){
        const inputfields = this.template.querySelectorAll('lightning-input-field')
        if(inputfields){
            Array.from(inputfields).forEach(field => {
                field.reset()
            });
        }
    }
}