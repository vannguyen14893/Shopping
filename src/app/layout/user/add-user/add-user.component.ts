import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html'
})
export class AddUserComponent implements OnInit {
    checkoutForm: FormGroup;
    date = null;
    constructor(private fb: FormBuilder) {

    }
    ngOnInit() {
        this.checkoutForm = this.fb.group({
            email: '',
            password: '',
            datePicker: '',
            fullName: '',
            sex: '',
            roleIds: '',
            groups: this.fb.array([this.groupForm])

        });

    }
    get groupForm(): FormGroup {
        return this.fb.group({
            id: '',
            name: ''
        });
    }
    addGroup() {
        (this.checkoutForm.get('groups') as FormArray).push(this.groupForm);
    }
    deleteTeam(index) {
        (this.checkoutForm.get('groups') as FormArray).removeAt(index);
    }
    submitForm(): void {
    }
    _click(value) {
        this.checkoutForm.patchValue({ roleIds: value });
    }
}
