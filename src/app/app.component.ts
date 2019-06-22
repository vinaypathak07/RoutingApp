import { Component } from '@angular/core';
import { Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routingPrj';
  loading; boolean = true;
  constructor(private router: Router) {
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true;
    }
    if (event instanceof NavigationEnd) {
      setTimeout(() => { // here
        this.loading = false;
      }, 2000);
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      setTimeout(() => { // here
        this.loading = false;
      }, 2000);
    }
    if (event instanceof NavigationError) {
      setTimeout(() => { // here
        this.loading = false;
      }, 2000);
    }
  }
}
