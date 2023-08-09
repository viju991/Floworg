import { LightningElement, track } from 'lwc';
import getAssets from '@salesforce/apex/AssetName.getAssets';

const columns = [
    { label: 'Asset Name', fieldName: 'Name', type: 'url', typeAttributes: { label: { fieldName: 'Name' }, target: '_blank' } },
    { label: 'ELR', fieldName: 'ELRCode', type: 'text' },
    { label: 'Mileage Start', fieldName: 'MilegeStart', type: 'decimal' },
    { label: 'Mileage End', fieldName: 'MilegeEnd', type: 'decimal' },
    { label: 'Railway Id', fieldName: 'ST_Railway_ID__c' },
    { label: 'Region', fieldName: 'ST_Region__c' },
    { label: 'Route', fieldName: 'Route' },
    { label: 'Area', fieldName: 'Area' },
    { label: 'Asset Type', fieldName: 'ST_Asset_Type__c' },
    { label: 'Description', fieldName: 'Description' }

];

export default class AssetDatatable extends LightningElement {
    @track assets
    @track Region = '';
    @track Route = '';
    @track Area = '';
    @track ELR = '';
    @track RailwayId = '';
    @track Assettype = '';
    @track StartMileage = 10.0726;
    @track EndMileage = 10.0738;
    Assignment = '';

    pageSizeOptions = [5, 10, 25, 50, 75, 100]; //Page size options
    records = [];
    totalRecords = 0; //Total no.of records
    pageSize; //No.of records to be displayed per page
    totalPages; //Total no.of pages
    pageNumber = 1; //Page number    
    recordsToDisplay = []; //Records to be displayed on the page



    // Data and Columns for Data Table
    assets = [];
    columns = columns;

    // Set options for picklist
    get regionoptions() {
        return [
            { label: 'Scotland', value: 'Scotland' },
            { label: 'East Coast', value: 'East Coast' },
            { label: 'Western', value: 'Western' },
            { label: 'Southern', value: 'Southern' }
        ];
    }
    get routeoptions() {
        return [
            { label: 'Anglia', value: 'Anglia' },
            { label: 'Sussex', value: 'Sussex' },
            { label: 'Wessex', value: 'Wessex' },
            { label: 'East Coast', value: 'East Coast' }
        ];
    }
    get areaoptions() {
        return [
            { label: 'Scotland', value: 'Scotland' },
            { label: 'East Coast', value: 'East Coast' },

        ];
    }
    get elroptions() {
        return [
            { label: 'TAH1', value: 'TAH1' },
            { label: 'TAH2', value: 'TAH2' },
            { label: 'TAH3', value: 'TAH3' }

        ];
    }
    get assetoptions() {
        return [
            { label: 'Overline', value: 'Overline' },
            { label: 'Underline', value: 'Underline' },
            { label: 'Footbridge', value: 'Footbridge' }

        ];
    }
    get assignoptions() {
        return [
            { label: 'Assesment', value: 'Assesment' },
            { label: 'Inventory', value: 'Inventory' },


        ];
    }


    //handle change events for Inputs
    regionChange(event) {
        this.Region = event.detail.value;
    }
    RouteChange(event) {
        this.Route = event.detail.value;
    }
    AreaChange(event) {
        this.Area = event.detail.value;
    }
    ElrChange(event) {
        this.ELR = event.detail.value;
    }
    AssetChange(event) {
        this.Assettype = event.detail.value;
    }
    smchange(event) {
        this.StartMileage = event.target.value;
    }
    emchange(event) {
        this.EndMileage = event.target.value;
    }
    railwayidchange(event) {
        this.RailwayId = event.target.value;
    }
    assignChange(event) {
            this.Assignment = event.target.value;
            this.paginationHelper(this.Assignment);
        }
        //
    get bDisableFirst() {
        return this.pageNumber == 1;
    }
    get bDisableLast() {
        return this.pageNumber == this.totalPages;
    }

    // Method for button click
    handleClick() {

        getAssets({ Region: this.Region, Route: this.Route, Area: this.Area, ELR: this.ELR, RailwayId: this.RailwayId, Assettype: this.Assettype, StartMileage: this.StartMileage, EndMileage: this.EndMileage })
            .then(result => {
                // iterating through data 
                result.forEach(assetrec => {

                    assetrec.ELRCode = assetrec.ST_Primary_ELR__r.ST_ELR_Code__c
                    assetrec.Area = assetrec.ST_Area__r.Name
                    assetrec.Route = assetrec.ST_Area__r.ST_Route__r.Name
                    assetrec.MilegeStart = assetrec.Track_Infos__r[0].ST_Start_Mileage__c
                    assetrec.MilegeEnd = assetrec.Track_Infos__r[0].ST_End_Mileage__c
                    console.log("Elr", assetrec.ELRCode);


                })
                this.records = result; //

                this.totalRecords = result.length; // update total records count                 
                this.pageSize = this.pageSizeOptions[0]; //set pageSize with default value as first option
                this.paginationHelper(); // call helper menthod to update pagination logic 


                console.log("Result", result);
                this.assets = result;

            }).catch(error => {
                console.error(error)
            })

    }
    handleReset() {
            this.template.querySelectorAll('lightning-input').forEach(element => {
                element.value = null;
            });
            this.template.querySelectorAll('lightning-combobox').forEach(each => {
                each.value = null;
            })
        }
        //Pagination functions
    handleRecordsPerPage(event) {
        this.pageSize = event.target.value;
        this.paginationHelper();
    }
    previousPage() {
        this.pageNumber = this.pageNumber - 1;
        this.paginationHelper();
    }
    nextPage() {
        this.pageNumber = this.pageNumber + 1;
        this.paginationHelper();
    }
    firstPage() {
        this.pageNumber = 1;
        this.paginationHelper();
    }
    lastPage() {
            this.pageNumber = this.totalPages;
            this.paginationHelper();
        }
        // JS function to handel pagination logic 
    paginationHelper(assertflag) {
        let availablerecords = this.records.map(rec => rec);
        if (assertflag && assertflag != '') {

            availablerecords = availablerecords.filter(rec => rec.Asset_Flag__c === assertflag)
        }
        this.totalRecords = availablerecords.length;
        this.recordsToDisplay = [];
        // calculate total pages
        this.totalPages = Math.ceil(this.totalRecords / this.pageSize);
        // set page number 
        if (this.pageNumber <= 1) {
            this.pageNumber = 1;
        } else if (this.pageNumber >= this.totalPages) {
            this.pageNumber = this.totalPages;
        }
        // set records to display on current page 
        for (let i = (this.pageNumber - 1) * this.pageSize; i < this.pageNumber * this.pageSize; i++) {
            if (i === this.totalRecords) {
                break;
            }
            this.recordsToDisplay.push(availablerecords[i]);
        }
    }



}