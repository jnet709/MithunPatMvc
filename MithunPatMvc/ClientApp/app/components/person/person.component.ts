import { Component, OnInit } from "@angular/core";
import { PersonService, Person } from "./person.service";



@Component({
    selector: "my-app",
    template: require('./person.component.html') 
})

export class PersonComponent extends OnInit {

    constructor(private _service: PersonService) {
        super();
    }

    ngOnInit() {
        this._service.loadData().then(data => {
            this.persons = data;
        });
    }

    persons: Person[] = [];
}