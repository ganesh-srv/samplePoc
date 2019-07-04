import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TopfieldsComponent } from './topfields.component';
import { MdlTextFieldModule } from '@angular-mdl/core';

@NgModule({
    imports: [
        CommonModule,
        MdlTextFieldModule
    ],
    declarations: [TopfieldsComponent],
    providers: [],
    exports: [TopfieldsComponent]
})
export class TopfieldsModule { }