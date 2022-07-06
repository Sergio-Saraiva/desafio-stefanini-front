import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { IBGEUF } from 'src/app/shared/models/ibgeuf.model';
import { PersonService } from 'src/app/shared/services/person.service';
import { UfService } from 'src/app/shared/services/uf.service';

@Component({
  selector: 'app-add-person-modal',
  templateUrl: './add-person-modal.component.html',
  styleUrls: ['./add-person-modal.component.css'],
})
export class AddPersonModalComponent implements OnInit {
  formGroup: FormGroup;
  ufs: IBGEUF[] = [];
  constructor(
    private dialogRef: MatDialogRef<AddPersonModalComponent>,
    private formBuilder: FormBuilder,
    private personService: PersonService,
    private ufService: UfService
  ) {}

  ngOnInit(): void {
    this.ufService.getAll().subscribe((data) => {
      this.ufs = data;
    });
    this.formGroup = this.formBuilder.group({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(300),
        Validators.minLength(3),
      ]),
      cpf: new FormControl('', [
        Validators.required,
        Validators.maxLength(11),
        Validators.minLength(11),
      ]),
      age: new FormControl('', [
        Validators.required,
        Validators.max(170),
        Validators.min(0),
      ]),
      cityName: new FormControl('', [
        Validators.required,
        Validators.maxLength(200),
        Validators.minLength(3),
      ]),
      cityUF: new FormControl('', [
        Validators.required,
        Validators.maxLength(2),
        Validators.minLength(2),
      ]),
    });
  }

  submitForm() {
    console.log(this.formGroup.value);
    this.personService.create(this.formGroup.value).subscribe(
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
