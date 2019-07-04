import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainframeComponent } from './mainframe.component';
import { MdlTextFieldModule } from '@angular-mdl/core';
import { FormsModule, FormBuilder } from '@angular/forms';
import { MdlExpansionPanelModule } from '@angular-mdl/expansion-panel';
import { MdlSelectModule } from '@angular-mdl/select';
import { CardsComponent } from './cards/cards.component';
import { TopfieldsComponent } from './topfields/topfields.component';
@NgModule({
    imports: [
        CommonModule,
        MdlSelectModule,
        FormsModule,
        MdlExpansionPanelModule
    ],

    declarations: [MainframeComponent, CardsComponent, TopfieldsComponent],
    providers: [FormBuilder],
    exports: [MainframeComponent, CardsComponent, TopfieldsComponent]
})
export class MainFrameModule { }