import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { EmployeeComponent } from "./components/employee/employee.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { FormsModule } from "@angular/forms";
import { HeroDetailComponent } from "./components/hero-detail/hero-detail.component";
import { RouterModule } from "@angular/router";
import { routes } from "./Routes/app-routing.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HeroInfoComponent } from "./components/heroes/hero-info/hero-info.component";
import { LoginComponent } from "./components/login/login.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import * as components from "./components/index";
import { GenderPipePipe } from "./pipes/gender-pipe.pipe";
import { LeaveListComponent } from "./components/leave-list/leave-list.component";
import { HeaderComponent } from "./components/header/header.component";
import { NgxPaginationModule } from "ngx-pagination";
import { UpdateComponent } from "./components/update/update.component";
import { DetailsComponentComponent } from "./components/details-component/details-component.component";
import { approvePipe } from "./pipes/approve-pipe.pipe";
import { AuthService } from "./auth/auth.service";
import { AuthGuardService } from "./auth/auth-guard.service";
import { JwtHelperService } from "@auth0/angular-jwt";
import { RoleGuardService } from "./auth/role-guard.service";
import { RevisionComponent } from "./components/revision/revision.component";
import { FormsComponent } from "./components/revision/forms/forms.component";
import { NgxStarsModule } from "ngx-stars";
import { RatingModule } from "ngx-rating";
import { from } from "rxjs";
import { HighlightdirectiveDirective } from "./directives/highlightdirective.directive";
import { MyInterceptor } from "./interceptor";
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingSpinnerComponent } from './components/loading/loading';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config: SocketIoConfig = { url: 'http://localhost:9001', options: {} };



@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HeroesComponent,
    HeroDetailComponent,
    PageNotFoundComponent,
    HeroInfoComponent,
    LoginComponent,
    components.DashboardComponent,
    components.AdminComponent,
    components.NotadminComponent,
    GenderPipePipe,
    approvePipe,
    LeaveListComponent,
    HeaderComponent,
    UpdateComponent,
    DetailsComponentComponent,
    RevisionComponent,
    FormsComponent,
    HighlightdirectiveDirective,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
	  FormsModule,
	  SocketIoModule.forRoot(config),
    HttpClientModule,
    BrowserModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    RatingModule,
    FormsModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.wanderingCubes,
        backdropBackgroundColour: 'rgba(0.1,0.1,.3,0.1)', 
        backdropBorderRadius: '16px',
        primaryColour: '	#000000', 
        secondaryColour: '#696969', 
        tertiaryColour: '	#A9A9A9'
    }),
    NgxStarsModule,
    RouterModule.forRoot(routes),
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    ToastContainerModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    JwtHelperService,
    RoleGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptor,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
