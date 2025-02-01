import { bootstrapApplication } from '@angular/platform-browser';
    import { TableFilterAdvancedDemo } from './app/table-filter-advanced-demo';
    import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

    bootstrapApplication(TableFilterAdvancedDemo, {
    providers: [provideAnimationsAsync()],
    }).catch((err) => console.error(err));