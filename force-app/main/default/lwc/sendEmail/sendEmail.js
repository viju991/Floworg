import { LightningElement, track } from 'lwc';
import sendmail from '@salesforce/apex/emailclass.sendmail';

export default class SendEmail extends LightningElement {
@track email;
@track subject

handleemailChange(event){
    this.email=event.target.value;
}
handlesubjectChange(event){
    this.subject=event.target.value;
}
handleClick(){
    sendmail({email:this.email, subject:this.subject})
    .then(result=>{
        
        console.log('Result>>> ')
        closeModal();
    }).catch(error=>{
        console.error(error)
    })
}
}