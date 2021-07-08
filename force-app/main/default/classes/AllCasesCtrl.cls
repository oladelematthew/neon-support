public with sharing class AllCasesCtrl {

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList() {
        return [SELECT Id, Name,Title,Department,LeadSource FROM Contact LIMIT 10];
    }
}