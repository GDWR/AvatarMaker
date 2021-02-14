import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { MAT_COLOR_FORMATS, NgxMatColorPickerModule, NGX_MAT_COLOR_FORMATS } from '@angular-material-components/color-picker';
import { MatInputModule } from '@angular/material/input';
import { FlexModule, FlexLayoutModule } from '@angular/flex-layout';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    NgxMatColorPickerModule,
    MatInputModule,
    FormsModule,
    FlexModule,
    FlexLayoutModule,
    MatSelectModule,
    MatSliderModule,
  ],
  providers: [
    { provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
