import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IBGEUF } from 'src/app/shared/models/ibgeuf.model';
import { Person } from 'src/app/shared/models/person.model';
import { PersonService } from 'src/app/shared/services/person.service';
import { UfService } from 'src/app/shared/services/uf.service';

@Component({
  selector: 'app-edit-person-modal',
  templateUrl: './edit-person-modal.component.html',
  styleUrls: ['./edit-person-modal.component.css'],
})
export class EditPersonModalComponent implements OnInit {
  formGroup: FormGroup;
  ufs: IBGEUF[] = [];
  constructor(
    private dialogRef: MatDialogRef<EditPersonModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Person,
    private personService: PersonService,
    private ufService: UfService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.ufService.getAll().subscribe((data) => {
      this.ufs = data;
    });
    this.formGroup = this.formBuilder.group({
      name: new FormControl(this.data.name, [
        Validators.required,
        Validators.maxLength(300),
        Validators.minLength(3),
      ]),
      cpf: new FormControl(this.data.cpf, [
        Validators.required,
        Validators.maxLength(11),
        Validators.minLength(11),
      ]),
      age: new FormControl(this.data.age, [
        Validators.required,
        Validators.max(170),
        Validators.min(0),
      ]),
      cityName: new FormControl(this.data.city.name, [
        Validators.required,
        Validators.maxLength(200),
        Validators.minLength(3),
      ]),
      cityUF: new FormControl(this.data.city.uf, [
        Validators.required,
        Validators.maxLength(2),
        Validators.minLength(2),
      ]),
    });
  }

  submitForm() {
    let updatedPerson: Person = { id: this.data.id, ...this.formGroup.value };
    this.personService.update(updatedPerson).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.dialogRef.close();
      }
    );
  }
}
