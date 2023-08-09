public with sharing class AccountContactController {
  @AuraEnabled(cacheable = true)
  public static List<AccountContactListWrapper> getAllAccountsWithContacts(){
    List<AccountContactListWrapper> accWrapperList = new List<AccountContactListWrapper>();
    List<Account> accList = [SELECT Id, NAme, BillingState, Website, Phone, 
    (SELECT Id, FirstName, LastName, Name, Email FROM Contacts) FROM Account LIMIT 5];
    if(!accList.isEmpty()){
        for(account acc : accList){
            AccountContactListWrapper accwrapper = new AccountContactListWrapper();
            accwrapper.accRecord = acc;
            accwrapper.contactList = acc.Contacts;
            accwrapper.contactCount = acc.Contacts.size();
            accwrapperList.add(accwrapper);
        }
    }
  
  return accwrapperList;

  }
//Wrapper Class with @Auraenabled and get set properties
public class AccountContactListWrapper {
    @AuraEnabled
   public Account accRecord{get;set;}
   @AuraEnabled
   public List<Contact> contactList{get;set;}
   @AuraEnabled
   public Integer contactCount{get;set;}
}

}