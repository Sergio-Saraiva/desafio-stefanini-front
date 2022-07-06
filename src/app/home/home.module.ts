import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AddPersonModalComponent } from './add-person-modal/add-person-modal.component';
import { EditPersonModalComponent } from './edit-person-modal/edit-person-modal.component';
import { IConfig, NgxMaskModule } from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    HomeComponent,
    AddPersonModalComponent,
    EditPersonModalComponent,
  ],
  imports: [CommonModule, SharedModule, NgxMaskModule.forRoot()],
  exports: [HomeComponent, AddPersonModalComponent, EditPersonModalComponent],
})
export class HomeModule {}
