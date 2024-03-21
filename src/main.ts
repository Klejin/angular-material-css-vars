import { enableProdMode } from "@angular/core";
import { environment } from "./environments/environment";
import { AppComponent } from "./app/app.component";
import { bootstrapApplication } from "@angular/platform-browser";
import { appConfig } from "./app/app.config";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, appConfig).catch((err: unknown) => {
  console.error(err);
});

declare global {
  interface Window {
    _app_base?: string;
  }
}
