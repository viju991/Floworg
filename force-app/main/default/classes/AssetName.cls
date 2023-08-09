/************************************************************************************ 
Class Name:- AssetName
Description :- Controller for Fetching Asset Records in AssetDatatable component
Author:- Vijayendra
Date:- 22/03/2023
Last Modified By:-
Last Modified Date:-
************************************************************************************/

public with sharing class AssetName {
  @AuraEnabled
    public static list<Asset> getAssets(string Region,string Route, string Area, string ELR, string RailwayId, string Assettype, decimal StartMileage, decimal EndMileage ){
        // Dynamic query to retrive Asset Records with Track infos as inner query
        string query = 'SELECT Name,ST_Region__c,Asset_Flag__c, ST_Primary_ELR__r.ST_Route__c, ST_Area__r.Name,ST_Area__r.ST_Route__r.Name, ST_Primary_ELR__r.ST_ELR_Code__c, Description, ST_Asset_Type__c, ST_Railway_ID__c,(select ST_Start_Mileage__c ,ST_End_Mileage__c  from Track_Infos__r ) FROM Asset WHERE '; 
        //Region is mandatory, Null & Blank Check for other fields 
        if (Region != null && Region != '') {
        query += 'ST_Region__c LIKE \'%' + Region + '%\'';
    }
        if (Route != null && Route != '') {
        query += ' AND ST_Area__r.ST_Route__r.Name LIKE \'%' + Route + '%\'';
    }
       if (Area != null && Area != '') {
        query += ' AND ST_Area__r.Name LIKE \'%' + Area + '%\'';
    }
        if (ELR != null && ELR != '') {
        query += ' AND ST_Primary_ELR__r.ST_ELR_Code__c LIKE \'%' + ELR + '%\'';
    }
        if (RailwayId != null && RailwayId != '') {
        query += ' AND ST_Railway_ID__c LIKE \'%' + RailwayId + '%\'';
    }
        if (Assettype != null && Assettype != '') {
        query += ' AND ST_Asset_Type__c LIKE \'%' + Assettype + '%\'';
    }
        if (StartMileage != null && StartMileage!= 10.07) {
        query += ' AND id in (select ST_Asset__c from Track_Info__c where ST_Start_Mileage__c  = '+StartMileage+')';
            
    }
        if (EndMileage != null && EndMileage != 10.07 ) {
        query += ' AND id in (select ST_Asset__c from Track_Info__c where ST_End_Mileage__c  = '+EndMileage+')';
            
    }
        return Database.query(query);
        
        
       
    }
}