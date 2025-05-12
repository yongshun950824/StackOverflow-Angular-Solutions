// zone.js setup for Angular testing
/*
import 'zone.js/dist/zone';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/proxy.js';
import 'zone.js/dist/jasmine-patch';
*/
import 'zone.js/dist/zone-testing';

// Angular testing utilities
import { TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// Jasmine UI (optional if you're running via browser and want HTML UI)
/*
import 'jasmine-core/lib/jasmine-core/jasmine.js';
import 'jasmine-core/lib/jasmine-core/jasmine-html.js';
import 'jasmine-core/lib/jasmine-core/boot.js';
*/

// Optional fix to avoid reload loop
const isKarma = typeof (window as any).__karma__ !== 'undefined';

declare const jasmine: any;

// Prevent Jasmine UI reload issue when running in browser
if ((window as any).jasmineRef) {
  if (!isKarma) {
    location.reload();
  }
} else {
  (window as any).onload?.(); // If onload is defined, call it
  (window as any).jasmineRef = jasmine.getEnv();
}

// Initialize Angular testing environment
TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

// ✅ Import your test files AFTER test environment is ready
const context = (require as any).context('./', true, /\.spec\.ts$/);
context.keys().forEach(context);
//import './app/menu/menu.component.spec.ts';