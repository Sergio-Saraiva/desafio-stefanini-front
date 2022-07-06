import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedImportedModules } from './shared.imported-module';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { SharedDeclaredModules } from './shared-declared-modules';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [...SharedDeclaredModules],
  imports: [
    CustomMaterialModule,
    CommonModule,
    HttpClientModule,
    ...SharedImportedModules,
  ],
  exports: [
    CustomMaterialModule,
    ...SharedDeclaredModules,
    ...SharedImportedModules,
  ],
})
export class SharedModule {}
