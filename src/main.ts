import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import {LibertyHighHatsModule} from "./lhh.module";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(LibertyHighHatsModule)
  .catch(err => console.error(err));
