import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersComponent } from './filters/filters.component';
import { ProgramListComponent } from './program-list/program-list.component';

import { LaunchProgramsRoutingModule } from './launch-programs-routing.module';
import { SpaceXCommonModule } from './../common/common.module';


@NgModule({
  declarations: [FiltersComponent, ProgramListComponent],
  imports: [
    CommonModule,
    LaunchProgramsRoutingModule,
    SpaceXCommonModule
  ]
})
export class LaunchProgramsModule { }
