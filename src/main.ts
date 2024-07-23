import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { registerLicense } from '@syncfusion/ej2-base';
import { AppModule } from './app/app.module';
registerLicense(
  'ORg4AjUWIQA/Gnt2U1hhQlJBfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hTX5UdEZjWnxYdXNcR2Zf'
);
platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    ngZoneEventCoalescing: true,
  })
  .catch((err) => console.error(err));
