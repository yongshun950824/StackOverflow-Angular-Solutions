import './polyfills';
import { provideHttpClient, withNoXsrfProtection } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { NgbdDatepickerCustommonth } from './app/datepicker-custommonth';
import { NgbdModalBasic } from './app/modal-basic';

bootstrapApplication(NgbdModalBasic, {
  providers: [provideHttpClient(withNoXsrfProtection())],
})
  .then((ref) => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
      window['ngRef'].destroy();
    }
    window['ngRef'] = ref;

    // Otherwise, log the boot error
  })
  .catch((err) => console.error(err));
