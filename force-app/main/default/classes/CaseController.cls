public with sharing class CaseController {
    public CaseController() {

    }

    @AuraEnabled(cacheable=true)
    public static List<Case> getCases(){
        return [ SELECT ID, Case.ContactId, Case.CaseNumber, Case.Subject, Case.Status, Case.Priority, Case.CreatedDate, Case.OwnerId from Case limit 10 ];
    }
}