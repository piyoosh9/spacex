import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  launchYears: number[] = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020 ];
  isLaunchFilter: string = '';
  isLandFilter: string = '';
  isYearFilter: number = 0;

  @Output() yearFilter: EventEmitter <any> = new EventEmitter();
  @Output() landFilter: EventEmitter <any> = new EventEmitter();
  @Output() launchFilter: EventEmitter <any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleLaunchYear(year: number) {
    this.isYearFilter = year;
    this.yearFilter.emit(year);
  }

  landSuccess(success: string) {
    this.isLandFilter = success;
    this.landFilter.emit(this.getEmitValue(success));
  }

  launchSuccess(success: string) {
    this.isLaunchFilter = success;
    this.launchFilter.emit(this.getEmitValue(success));
  }

  getEmitValue(type: string) {
    return type == 'true' ? true : false;
  }

}
