import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LaunchProgramComponent } from './launch-program/launch-program.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, LaunchProgramComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent, FooterComponent, LaunchProgramComponent
  ]
})
export class SpaceXCommonModule { }
