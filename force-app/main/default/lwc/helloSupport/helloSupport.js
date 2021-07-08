import { LightningElement, track, api, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import getCases from '@salesforce/apex/CaseController.getCases';


export default class HelloSupport extends LightningElement {
    @api flexipageRegionWidth
    @api recordId;
    @track data;
    @track columns = [
        { label: 'Case Number', fieldName: 'CaseNumber', type: 'Auto Number'},
        { label: 'Contact Name', fieldName: 'ContactId', type: 'Lookup(Contact)'},
        { label: 'Subject', fieldName: 'Subject', type: 'Text(255)'},
        { label: 'Status', fieldName: 'Status', type: 'Picklist'},
        { label: 'Priority', fieldName: 'Priority', type: 'Picklist'},
        { label: 'Created Date', fieldName: 'CreatedDate', type: 'Date/Time'},
        { label: 'Case Owner', fieldName: 'OwnerId', type: 'Lookup(User,Group)'}
        
    ];
    @wire (getCases) CaseStatus({error, data}){
        if(data){
            this.data = data;
        }
        else if (error){
            this.data = undefined;
        }
    }
    

    contacts = [
        {
            Id: 1,
            Name: 'Nathaniel Manns',
            Title: 'Solution Architect',
        },
        {
            Id: 2,
            Name: 'Anna Shaffer',
            Title: 'Systems Administrator',
        }
    ];

    @track 
    isCreateCasesModalOpen = false;
    isMyCasesModalOpen = false;


    openModal(event) {
        // to open modal set isCreateCasesModalOpen track value as true
        if(event.target.label === 'Create Case'){
            this.isCreateCasesModalOpen = true;
        }
        else{
            this.isMyCasesModalOpen = true;
        }
    }
    closeModal() {
        // to close modal set isCreateCasesModalOpen track value as false
        this.isCreateCasesModalOpen = false;
        this.isMyCasesModalOpen = false;
    }
    submitDetails() {
        // to close modal set isCreateCasesModalOpen track value as false
        //Add your code to call apex method or do some processing
        this.isCreateCasesModalOpen = false;
        this.isMyCasesModalOpen = false;

    }
    // navigateToAllOpenCasesPage(){
    //     this[NavigationMixin.Navigate]({
    //         type: 'standard__recordPage',
    //         attributes: {
    //             recordId: this.recordId,
    //             objectApiName: 'Case',
    //             actionName: 'View'
    //         },
    //     });

    // }
    
}