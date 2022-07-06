import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedImportedModules } from './shared.imported-module';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { SharedDeclaredModules } from './shared-declared-modules';

@NgModule({
  declarations: [...SharedDeclaredModules],
  imports: [CustomMaterialModule, ...SharedImportedModules],
  exports: [CustomMaterialModule, ...SharedDeclaredModules],
})
export class SharedModule {}
