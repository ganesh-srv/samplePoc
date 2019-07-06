import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { MdlTextFieldModule } from '@angular-mdl/core';
import { MdlLayoutModule, MdlScreenSizeService } from '@angular-mdl/core';
import { MainFrameModule } from '../mainframe/mainframe.module';

// import { DashBoardModule } from '../dashboard/dashboard.module';


@NgModule({
    imports: [
        CommonModule,
        MdlLayoutModule,
        RouterModule,
        MdlTextFieldModule,
        MainFrameModule
    ],
    declarations: [HeaderComponent],
    providers: [
        MdlScreenSizeService
    ],
    exports: [HeaderComponent]
})
export class HeaderModule { }