import { LightningElement, wire } from 'lwc';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import INDUSTRY_PICKLIST from '@salesforce/schema/Account.Industry'

export default class GetPicklistValuesDemo extends LightningElement {

    @wire(getObjectInfo, {objectApiName : ACCOUNT_OBJECT})
    objectinfo

    @wire(getPicklistValues, {recordTypeId : '$objectinfo.data.defaultRecordTypeId', fieldApiName : INDUSTRY_PICKLIST})
    industrypicklist({data,error}){
        if(data){
            console.log('Picklist Value',data)
            this.industryoptions = this.generatepicklistvalue(data)
        }
        if(error){
            console.error(error)
        }
    }
    generatepicklistvalue(data){
        return data.values.map(item=>({label: item.label, value: item.value}))
    }


    selectedIndustry = '';
    industryoptions= [];

    // get industryoptions() {
    //     return [
    //         { label: 'New', value: 'new' },
    //         { label: 'In Progress', value: 'inProgress' },
    //         { label: 'Finished', value: 'finished' },
    //     ];
    // }

    industryChange(event) {
        this.selectedIndustry = event.detail.value;
    }

}

