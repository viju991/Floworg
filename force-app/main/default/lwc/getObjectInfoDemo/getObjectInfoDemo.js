import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getObjectInfos } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity'
export default class GetObjectInfoDemo extends LightningElement {
    
    objectNames = [ACCOUNT_OBJECT,OPPORTUNITY_OBJECT]
    defaultrecordtypeId
    objectapiname
    objectinfo

    @wire(getObjectInfo,{objectApiName: ACCOUNT_OBJECT})
    objectinfo({data,error}){
    if(data){
        console.log('Result',data)
        this.defaultrecordtypeId = data.defaultRecordTypeId
        this.objectapiname = data.apiName
    }
    if (error){
        console.error(error)
    }
}

@wire(getObjectInfos,{objectApiNames:'$objectNames'})
objectinfosHandler({data,error}){
if(data){
    console.log('Result objects',data)
    this.objectinfo = data
}
if (error){
    console.error(error)
}
}
}