import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './base/layout/app.layout.module';
import { ProductService } from './base/demo/service/product.service';
import { CountryService } from './base/demo/service/country.service';
import { CustomerService } from './base/demo/service/customer.service';
import { EventService } from './base/demo/service/event.service';
import { IconService } from './base/demo/service/icon.service';
import { NodeService } from './base/demo/service/node.service';
import { PhotoService } from './base/demo/service/photo.service';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
