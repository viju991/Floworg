import { LightningElement } from 'lwc';
import My_Resource from '@salesforce/resourceUrl/myResource'
export default class StaticResourceExample extends LightningElement {
    spring23Logo = My_Resource + '/images.download.JPEG'
    summer23Logo = My_Resource + '/images.download(1).JPEG'
}