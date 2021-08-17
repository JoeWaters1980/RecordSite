// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import{ HttpClient}from '@angular/common/http';
import { AccessComponent } from './app/Components/access/access.component';


describe ('AccountService',()=>{
  let httpCLient: HttpClient;
  let httpMock:HttpTestingController;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[AccessComponent]
    });
    httpMock= TestBed.get(HttpTestingController);
    httpCLient=TestBed.inject(HttpClient);
  })
})

declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
    keys(): string[];
    <T>(id: string): T;
  };
};

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
