import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SlidebarComponent} from './content/slidebar/slidebar.component';
import {ContactusComponent} from './content/contactus/contactus.component';
import {AboutComponent} from './content/about/about.component';
import {HelpComponent} from './content/help/help.component';
import {ReturnComponent} from './content/return/return.component';
import {ChatComponent} from './common/chat/chat.component';
import {Content} from '@angular/compiler/src/render3/r3_ast';
import {ContentComponent} from './content/content/content.component';
import {WelcomeComponent} from './content/welcome/welcome.component';

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: SlidebarComponent
  },
  {
    path: 'contactus',
    component: ContactusComponent,
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'help',
    component: HelpComponent
  },
  {
    path: 'return',
    component: ReturnComponent
  },
  {
    path: 'chat',
    component: ChatComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
