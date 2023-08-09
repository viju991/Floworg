import { LightningElement } from 'lwc';
import ACOUNT_OBJECT from '@salesforce/schema/Account'

export default class RecordEditCustom extends LightningElement {
    objectname=ACOUNT_OBJECT
    inputValue = ''

    handleChange(event){
        this.inputValue = event.target.value
    }

    submitHandler(event){
    event.preventDefault()
    const inputcmp = this.template.querySelectorAll('lightning-input')
    const value = inputcmp.value
    if(!value.contains('India')){
     inputcmp.setCustomValiity("The Account Name must include India")
    }
    else{
        inputcmp.setCustomValidity("")
        const fields = event.detail.fields
        fields.Name =value
        this.template.querySelectorAll('lightning-record-edit-form').submit(fields)
    }
    inputcmp.reportValidity()
    }

}