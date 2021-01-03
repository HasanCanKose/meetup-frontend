import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EventListComponent } from './modules/event/event-list/event-list.component';
import {LoginComponent} from './modules/auth/login/login.component';
import {RegisterComponent} from './modules/auth/register/register.component';
import {AuthGuard} from './guards/auth.guard';
import {UserProfileComponent} from './modules/user/user-profile/user-profile.component';
import {EventsResolver} from './resolvers/events.resolver';
import {UserResolver} from './resolvers/user.resolver';

const appRoutes: Routes = [
  {path: '', resolve: [UserResolver],
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'events', component: EventListComponent, canActivate: [AuthGuard], resolve: {events: EventsResolver} },
      {path: 'profile/:id', component: UserProfileComponent}
    ]},
  { path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
