/**
 * Angular 2 decorators and services
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { environment } from 'environments/environment';
import { AppState } from './app.service';

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
  <section class="">
  <div>
    <div class="hero">

      <div class="container has-text-centered">
        <div class="hero-body ">
          <h1 class="title">
            Ng Exchange
          </h1>
          <h2 class="subtitle">
            Foreign exchange rates and currency conversion
          </h2>
        </div>
        <nav class="tabs is-boxed is-fullwidth">
          <a [routerLink]=" ['./landing'] "
            routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
            Landing
          </a>
          <a [routerLink]=" ['./'] "
            routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
            Index
          </a>
          <a [routerLink]=" ['./detail'] "
            routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
            Detail
          </a>
          <a [routerLink]=" ['./barrel'] "
            routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
            Barrel
          </a>
          <a [routerLink]=" ['./about'] "
            routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
            About
          </a>
          <a *ngIf="showDevModule" [routerLink]=" ['./dev-module'] "
            routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
            Dev
          </a>
        </nav>
      </div>
      
    </div>
      <main>
        <router-outlet></router-outlet>
      </main>

      <footer>
        <section class="hero is-primary">
          <div class="hero-body">
            <div class="container">
              <div class="columns is-vcentered">
                <div class="column is-one-third is-left">
                  <p class="title">Exchange <strong>Newsletter</strong></p>
                  <p class="subtitle">Get notified when is ready!</p>
                </div>
        
                <div class="column">
                  <form action="" method="POST" accept-charset="utf-8">
                      <div class="field is-grouped">
                        <div class="control has-icons-left is-expanded">
                          <input type="email" value="" name="email" 
                            class="input is-flat required email" 
                            placeholder="email address" required="" />
                          <span class="icon is-small is-left">
                          </span>
                        </div>
                        <div class="control">
                          <div class="is-hidden">
                            <input type="text" name="hp" id="hp">
                          </div>
                          <input type="hidden" name="list" value="So5UY3O9gHJkq892bn763Tyf4A">
                          <input type="submit" value="Subscribe" name="submit" 
                            class="button is-white is-outlined" />
                        </div>
                      </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  </section>
  `
})
export class AppComponent implements OnInit {
  public name = 'Ng Exchange';
  public twitter = 'https://twitter.com/zazk';
  public url = 'https://tipe.io';
  public showDevModule: boolean = environment.showDevModule;

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/**
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
