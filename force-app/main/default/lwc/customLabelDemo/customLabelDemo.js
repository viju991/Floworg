import { LightningElement } from 'lwc';
//Importing Custom Labels
import WelcomeLabel from '@salesforce/label/c.Custom_LabelDemo'
import HomePageLabel from '@salesforce/label/c.HomePageNews'
import NewCaseLabel from '@salesforce/label/c.NewCaseLabel'

export default class CustomLabelDemo extends LightningElement {
    label={
        WelcomeLabel,
        HomePageLabel,
        NewCaseLabel
    }
}