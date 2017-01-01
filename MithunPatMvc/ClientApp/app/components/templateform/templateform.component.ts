import {Component, OnInit} from "@angular/core";

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
        this.model.dob = new Date();
        this.model.name = "Hero Johnson";
        this.model.salary = 30000;
    }

    onSubmit() { this.submitted = true; }
}

export class TemplateHero {
    name: string;
    city: string;
    dob: Date;
    salary: number;
}