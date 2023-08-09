import { LightningElement, track } from 'lwc';

export default class ModalpopupDemo extends LightningElement {
    //Boolean tracked variable to ndicate if modal is open or not default value is false as modal is closed when pge is loaded
    @track isModalOpen = false;
    openModal(){
        //to open modal set value as true
        this.isModalOpen=true;
    }
    closeModal(){
        //to close modal set value as false
        this.isModalOpen=false;
    }
    submitDetails(){
        //to close modal set value as false
        //Add your code to call apex method or do some processing
        this.isModalOpen=false;
    }
}