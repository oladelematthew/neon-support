import { LightningElement, track, api } from 'lwc';
import searchCases from '@salesforce/apex/searchQuestions.searchCases';

export default class SearchQuestions extends LightningElement {
    @track cases
    @api
    searchCases(){
        console.log('searchKey - ' + this.searchKey);
        searchCases({keyword: this.searchKey})
            .then(result => {
                console.log('result...');
                console.log(result);
                this.cases = result;
                if(result.length > 0) {
                    this.showCases = true;
                    this.activeSections = ['A'];
                    console.log('showCases - ' + this.showCases);
                } else{
                    this.showCases = false;
                }
            })
            .catch(error => {
                console.log('error...')
            });
        }  
}