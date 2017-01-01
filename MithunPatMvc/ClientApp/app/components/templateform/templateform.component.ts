import {Component, OnInit} from "@angular/core";
import moment = require('moment'); // http://stackoverflow.com/questions/33938561/how-to-use-momentjs-in-typescript-with-systemjs/41419573#41419573


@Component({
    selector: "templateform",
    template: require('./templateform.component.html')
})

export class TemplateFormComponent {
    model: TemplateHero;
    submitted = false;


    ngOnInit() {
        this.model = new TemplateHero();
        this.model.city = "Dallas";
        // http://stackoverflow.com/questions/14474555/how-to-format-a-date-using-ng-model
        // http://momentjs.com/
        this.model.dob = moment(new Date()).format('MM/DD/YYYY'); 
        this.model.name = "Hero Johnson";
        this.model.salary = 30000.19;
        console.log("this.model.salary=", this.model.salary);
    }

    onSubmit() { this.submitted = true; }
}

export class TemplateHero {
    name: string;
    city: string;
    dob: string;
    salary: number;
}