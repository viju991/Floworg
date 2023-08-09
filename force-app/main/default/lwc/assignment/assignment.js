import { LightningElement, track } from 'lwc';
import getAssets from '@salesforce/apex/AssetName.getAssets'

export default class Assignment extends LightningElement {
    @track assets
    @track Region = 'East Coast';
    @track Route = 'Sussex';
    @track Area = 'Scotland';
    @track ELR = 'TAH2';
    @track RailwayId = '301';
    @track Assettype = 'Overline';
    @track StartMileage = 10.07;
    @track EndMileage = 10.07;

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

    handleClick() {
        getAssets({ Region: this.Region, Route: this.Route, Area: this.Area, ELR: this.ELR, RailwayId: this.RailwayId, Assettype: this.Assettype, StartMileage: this.StartMileage, EndMileage: this.EndMileage }).then(result => {
            console.log("Result", result);
            this.assets = result;
            //console.log('Asset', this.assets);
            //this.name = assets.Name;

        }).catch(error => {
            console.error(error)
        })

    }
}