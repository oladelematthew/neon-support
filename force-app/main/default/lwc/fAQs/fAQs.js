import { LightningElement } from 'lwc';

export default class FAQs extends LightningElement {
    handleKeyUp(event) {
        console.log(event.target.value);
        this.template.querySelector('c-search-questions').searchContacts(event.target.value);
    }
}