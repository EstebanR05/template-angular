import { Component } from '@angular/core';
import { LayoutService } from 'src/app/base/layout/service/app.layout.service';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {

    public form!: FormGroup;

    valCheck: string[] = ['remember'];
    password!: string;

    constructor(
        public layoutService: LayoutService,
        private fb: FormBuilder,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.form = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    submit() {
        this.router.navigate(["dashboard"]);
    }

    getControl(control: string, form: FormGroup = this.form): AbstractControl {
        return form.controls[control];
    }
}
