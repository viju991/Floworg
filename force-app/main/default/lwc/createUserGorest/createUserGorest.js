import { LightningElement, track } from 'lwc';
import createUser from '@salesforce/apex/goRestClass.createUser'
import { ShowToastEvent} from 'lightning/platformShowToastEvent'

export default class CreateUserGorest extends LightningElement {
@track name
@track email
@track gender
@track status

nameChange(event){
    this.name=event.target.value
}
emailChange(event){
    this.email=event.target.value
}
genderChange(event){
    this.gender=event.target.value
}
statusChange(event){
    this.status=event.target.value
}

handleSave(event){
    createUser({ Name: this.name, Email:this.email, Gender:this.gender, Status:this.status })
    .then(result=>{
        console.log('Response' +result)
        console.log("Result"+JSON.parse(result))
        this.showToast('Success!!','User: '+JSON.parse(result).name + ''+ 'Created' + 'Record Id :' +JSON.parse(result).id );
       this.template.querySelectorAll('lightning-input[data-id="reset"]').forEach(element => {
        element.value = null;
       });

    }).catch(error=>{
        console.log("error"+JSON.stringify(error.body))
        this.showToast('Error Creating User', error.body.message, 'error');
    })
}
showToast(title, message, variant){
    this.dispatchEvent(new ShowToastEvent({
        title,
        message,
        variant: variant || 'success'
    }))
}



}