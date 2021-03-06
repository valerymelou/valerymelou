import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from '../layout/layout.module';
import { AboutComponent } from './about/about.component';
import { SharedModule } from '../shared/shared.module';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [HomeComponent, AboutComponent, PortfolioComponent, ContactComponent],
  imports: [
    CommonModule,
    LayoutModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
