import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpTestingController } from '@angular/common/http/testing';
import { ProgramsService } from './programs.service';
import { Program } from './../../models/program';
import { environment } from 'src/environments/environment';
import { api_path } from 'src/app/utils/constants/api.constants';

describe('ProgramsService', () => {
  let service: ProgramsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ProgramsService]
    });
    service = TestBed.inject(ProgramsService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('be able to retrieve programs from the API via GET', () => {
    const dummyPrograms: Program[] = [{
      flight_number: 1,
      mission_name: "FalconSat",
      upcoming: false,
      launch_year: 2006,
      launch_date_unix: 1143239400,
      is_tentative: false,
      tentative_max_precision: "hour",
      tbd: false,
      launch_window: 0
    }];
    service.fetchLaunches({ limit: 100 }).subscribe(posts => {
      expect(posts).toEqual(dummyPrograms);
    });
    const request = httpMock.expectOne(`${environment.base_url + api_path.api_version + api_path.launches}`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyPrograms);
  });

  afterEach(() => {
    httpMock.verify();
  });

});
