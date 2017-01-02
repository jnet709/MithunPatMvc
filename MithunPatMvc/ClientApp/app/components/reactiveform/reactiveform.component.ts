import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'; // https://scotch.io/tutorials/using-angular-2s-model-driven-forms-with-formgroup-and-formcontrol

import moment = require('moment');  // http://stackoverflow.com/questions/33938561/how-to-use-momentjs-in-typescript-with-systemjs/41419573#41419573
import Templateformcomponent = require("../templateform/templateform.component"); 


@Component({
    selector: 'reactiveform',
    template: require('./reactiveform.component.html')
})

export class ReactiveFormComponent implements OnInit {
    // https://scotch.io/tutorials/using-angular-2s-model-driven-forms-with-formgroup-and-formcontrol
    public myForm: FormGroup; // our model driven form
    public submitted: boolean; // keep track on whether form is submitted

    public user: Templateformcomponent.TemplateHero;
    
    constructor(private _fb: FormBuilder) { } // form builder simplify form initialization

    ngOnInit() {
        let today = moment(new Date()).format('MM/DD/YYYY').toString();
        let salary = "2000.19";

        this.myForm = this._fb.group({
            name: ["Hero Johnson", [Validators.required]],
            city: ["Plano", [Validators.required]],
            dob: [today,null],
            salary: [salary, [Validators.required, Validators.pattern("[0-9]*[\.]{0,1}[0-9]+")]]
        });
    }

    onSubmit() {
        this.user = new Templateformcomponent.TemplateHero();

        // book page 420: Asp.Net Core and Angular 2 by Valerio De Sanctis
        this.user.name = this.myForm.value.name;
        this.user.city = this.myForm.value.city;
        this.user.dob = this.myForm.value.dob;
        this.user.salary = this.myForm.value.salary;

        this.submitted = true;

    }
}