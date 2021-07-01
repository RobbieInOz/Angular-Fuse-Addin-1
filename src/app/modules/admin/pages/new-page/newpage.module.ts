import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { newpageComponent } from 'app/modules/admin/pages/new-page/newpage.component';
import { newpageRoutes } from 'app/modules/admin/pages/new-page/newpage.routing';

@NgModule({
    declarations: [
        newpageComponent
    ],
    imports     : [
        RouterModule.forChild(newpageRoutes)
    ]
})
export class newpageModule
{
}
