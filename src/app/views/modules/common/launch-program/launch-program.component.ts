import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-launch-program',
  templateUrl: './launch-program.component.html',
  styleUrls: ['./launch-program.component.scss']
})
export class LaunchProgramComponent implements OnInit, OnChanges {

  @Input() program : any;
  successLanding: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.successLanding = this.program && this.program.rocket && this.program.rocket && this.program.rocket.first_stage.cores && this.program.rocket.first_stage.cores.length && this.program.rocket.first_stage.cores[0].land_success;
  }

}
