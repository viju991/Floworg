public with sharing class AccountHelper {
    @AuraEnabled(cacheable = true)
    public static list<Account> getAccountList(){
        return [SELECT Id, Name, Type, Rating, Phone, website, AnnualRevenue FROM Account LIMIT 10];
    }
}