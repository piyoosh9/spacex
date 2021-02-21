import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProgramsService } from 'src/app/services/programs/programs.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as e from 'express';


@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.scss']
})
export class ProgramListComponent implements OnInit, OnDestroy {

  launchFilters: any = {
    limit: 100
  };
  routeUnsubscribe : any;
  programs = [];
  isSearching = false;
  isLaunchFilter: string = '';
  isLandFilter: string = '';
  isYearFilter: number = 0;

  constructor(private _programsService: ProgramsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeUnsubscribe = this.route.params.subscribe(params => {
      if(params.launch_success){
        this.launchFilters['launch_success'] = params.launch_success;
        this.isLaunchFilter = params.launch_success;
      } else {
        this.isLaunchFilter = '';
      }
      if(params.land_success){
        this.launchFilters['land_success'] = params.land_success;
        this.isLandFilter = params.land_success;
      } else {
        this.isLandFilter = '';
      }
      if(params.launch_year){
        this.launchFilters['launch_year'] = params.launch_year;
        this.isYearFilter = params.launch_year;
      } else {
        this.isYearFilter = 0;
      }
      this.isSearching = true;
      setTimeout(() => {
        this.fetchLaunches();
      }, 100);
    });
  }

  ngOnDestroy() {
    this.routeUnsubscribe.unsubscribe();
  }

  fetchLaunches() {
    this._programsService.fetchLaunches(this.launchFilters).subscribe(data => {
      this.isSearching = false;
      this.programs = data;
    }, error => {
      this.isSearching = false;
    });
  }

  yearFilter(event: number){
    this.launchFilters['launch_year'] = event;
    this.setUrlParams();
  }

  landFilter(event: boolean){
    this.launchFilters['land_success'] = event;
    this.setUrlParams();
  }

  launchFilter(event: boolean){
    this.launchFilters['launch_success'] = event;
    this.setUrlParams();
  }

  setUrlParams(){
    this.router.navigate(['launches', this.launchFilters]);
  }

  clearFilter(){
    if(this.launchFilters.launch_year){
      delete this.launchFilters.launch_year;
    }
    if(this.launchFilters.launch_success){
      delete this.launchFilters.launch_success;
    }
    if(this.launchFilters.land_success){
      delete this.launchFilters.land_success;
    }
    this.setUrlParams();
  }

}
