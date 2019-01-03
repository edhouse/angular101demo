import {InjectionToken} from '@angular/core';

import { environment } from '../environments/environment';

export const API_URL = new InjectionToken<string>('apiUrl');

export const appConfigProviders = [
  {
    provide: API_URL,
    useValue: environment.apiUrl
  },
];
