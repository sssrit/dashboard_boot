import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatDividerModule} from '@angular/material/divider';   
import {MatIconModule} from '@angular/material/icon'; 
import {MatMenuModule} from '@angular/material/menu'; 
import {MatCardModule} from '@angular/material/card';
import { IncomboxComponent } from './incombox/incombox.component'; 
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { TableboxComponent } from './tablebox/tablebox.component'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatButtonModule} from '@angular/material/button';
import { IncomboxCardsComponent } from './incombox-cards/incombox-cards.component';
import { SmallBoxesComponent } from './small-boxes/small-boxes.component';
import { SmallboxFourOptComponent } from './smallbox-four-opt/smallbox-four-opt.component';
import { NgChartsModule } from 'ng2-charts';
import { ChartOneComponent } from './chart-one/chart-one.component';
import { ChartTwoComponent } from './chart-two/chart-two.component';
import { ProfileBoxComponent } from './profile-box/profile-box.component';
import { ProfileQuickLinksComponent } from './profile-quick-links/profile-quick-links.component';
import { FontAwesomeModule,FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { ChartThreeComponent } from './chart-three/chart-three.component'; 


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    IncomboxComponent,
    TableboxComponent,
    IncomboxCardsComponent,
    SmallBoxesComponent,
    SmallboxFourOptComponent,
    ChartOneComponent,
    ChartTwoComponent,
    ProfileBoxComponent,
    ProfileQuickLinksComponent,
    ChartThreeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatProgressBarModule,
    MatTableModule,
    MatButtonModule,
    NgChartsModule,
    FontAwesomeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary)
  {
    library.addIconPacks(far,fas,fab);
  }
}
