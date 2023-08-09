import { LightningElement, api } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'

export default class FileUpload extends LightningElement {
    @api recordId;
    get acceptedFormats(){
        return ['.pdf','.png','.jpg','.jpeg']
    }
    handleUploadFinished(event){
        //Get List of Uploaded Files
        const uploadedFiles = event.detail.files;
        let uploadedFilesNames = ''
        for(let i=0; i<uploadedFiles.length; i++){
            uploadedFilesNames += uploadedFiles[i].name + ',';
        }
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success',
                message : uploadedFiles.length + ' Files Uploaded Successfully : ' +uploadedFilesNames,
                variant: 'Success',
            }),
        );
    }
}