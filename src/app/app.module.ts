import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModalModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './root/app.component';
import {SlidebarComponent} from './content/slidebar/slidebar.component';
import {FooterComponent} from './footer/footer/footer.component';
import {AboutComponent} from './content/about/about.component';
import {ContactusComponent} from './content/contactus/contactus.component';
import {ContentComponent} from './content/content/content.component';
import {HeaderComponent} from './header/header/header.component';
import {RandomImgComponent} from './content/random-img/random-img.component';
import {ModalComponent} from './common/modal/modal.component';
import {HelpComponent} from './content/help/help.component';
import {ReturnComponent} from './content/return/return.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatGridListModule, MatInputModule,
  MatProgressSpinnerModule
} from '@angular/material';
import {ChatComponent} from './common/chat/chat.component';
import { WelcomeComponent } from './content/welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SlidebarComponent,
    ContentComponent,
    FooterComponent,
    ContactusComponent,
    AboutComponent,
    RandomImgComponent,
    ModalComponent,
    HelpComponent,
    ReturnComponent,
    ChatComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    AppRoutingModule,
    NgbModule,
    NgbModalModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule { }
