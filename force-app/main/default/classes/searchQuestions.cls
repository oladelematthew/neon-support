public with sharing class searchQuestions {
    public searchQuestions() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Case> searchCases(String keyword){
        List<List<SObject>> searchResults =  [FIND :keyword IN ALL FIELDS RETURNING Case(AccountId)];
        system.debug('searchResults...');
        system.debug(searchResults);
        return (Case[])searchResults[0];
    }
}
