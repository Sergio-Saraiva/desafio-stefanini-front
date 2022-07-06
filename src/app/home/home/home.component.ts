import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Person } from 'src/app/shared/models/person.model';
import { PersonService } from 'src/app/shared/services/person.service';
import { AddPersonModalComponent } from '../add-person-modal/add-person-modal.component';
import { EditPersonModalComponent } from '../edit-person-modal/edit-person-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'age',
    'cpf',
    'city',
    'uf',
    'edit',
    'delete',
  ];
  dataSource = new MatTableDataSource<Person>();

  constructor(private personService: PersonService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getAllPersons();
  }

  private getAllPersons() {
    this.personService.getAll().subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  openAddPersonDialog() {
    const dialogRef = this.dialog.open(AddPersonModalComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.getAllPersons();
    });
  }

  openEditPersonDialog(element) {
    const dialogRef = this.dialog.open(EditPersonModalComponent, {
      data: element,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getAllPersons();
    });
  }

  deletePerson(personId: string) {
    this.personService.delete(personId).subscribe(
      () => {},
      () => {},
      () => {
        this.getAllPersons();
      }
    );
  }
}
