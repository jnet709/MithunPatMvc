import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';  // ReactiveFormsModule for FormBuilder http://stackoverflow.com/questions/39397326/angular-2-rc-5-original-exception-no-provider-for-formbuilder
import { RouterModule } from "@angular/router";
import { UniversalModule } from "angular2-universal";
import { AppComponent } from "./components/app/app.component";
import { NavMenuComponent } from "./components/navmenu/navmenu.component";
import { HomeComponent } from "./components/home/home.component";
import { FetchDataComponent } from "./components/fetchdata/fetchdata.component";
import { CounterComponent } from "./components/counter/counter.component";

import { PersonComponent } from "./components/person/person.component";
import { PersonService } from "./components/person/person.service";

import { TemplateFormComponent } from "./components/templateform/templateform.component";
import { ReactiveFormComponent } from "./components/reactiveform/reactiveform.component";

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        PersonComponent,
        TemplateFormComponent,
        ReactiveFormComponent
        ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        FormsModule,
        ReactiveFormsModule, // https://scotch.io/tutorials/using-angular-2s-model-driven-forms-with-formgroup-and-formcontrol
        RouterModule.forRoot([
            { path: "", redirectTo: "home", pathMatch: "full" },
            { path: "home", component: HomeComponent },
            { path: "counter", component: CounterComponent },
            { path: "fetch-data", component: FetchDataComponent },
            { path: "person", component: PersonComponent },
            { path: "template-form", component: TemplateFormComponent },
            { path: "reactive-form", component: ReactiveFormComponent },
            { path: "**", redirectTo: "home" }
        ])
    ],
    providers: [PersonService]
})
export class AppModule {
}
