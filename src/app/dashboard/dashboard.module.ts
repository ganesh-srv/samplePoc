import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [DashboardComponent],
    providers: [],
    exports: [DashboardComponent]
})
export class DashBoardModule { }