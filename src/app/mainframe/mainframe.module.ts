import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainframeComponent } from './mainframe.component';
import { MdlTextFieldModule } from '@angular-mdl/core';
import { FormsModule, FormBuilder } from '@angular/forms';
import { MdlSelectModule } from '@angular-mdl/select';
import { CardsComponent } from './cards/cards.component';
import { TopfieldsComponent } from './topfields/topfields.component';
import { MatExpansionModule, MatLabel, MatFormFieldModule } from '@angular/material';
import { AnalyticsComponent } from './analytics/analytics.component';
import { SmpComponent } from './smp/smp.component';
import { ChartModule } from '@syncfusion/ej2-ng-charts';
import { CategoryService, ColumnSeriesService } from '@syncfusion/ej2-ng-charts';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
    imports: [
        CommonModule,
        MdlSelectModule,
        FormsModule,
        MatExpansionModule,
        ChartModule,
        MatSelectModule,
        MatFormFieldModule
    ],

    declarations: [MainframeComponent, CardsComponent, TopfieldsComponent, AnalyticsComponent, SmpComponent],
    providers: [FormBuilder, CategoryService, ColumnSeriesService],
    exports: [MainframeComponent, CardsComponent, TopfieldsComponent, AnalyticsComponent]
})
export class MainFrameModule { }