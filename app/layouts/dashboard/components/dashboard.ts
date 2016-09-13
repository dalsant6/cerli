import {Component, ViewEncapsulation} from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';

import {HomeComponent} from '../../../pages/home/components/home';
import {ChartComponent} from '../../../pages/charts/components/charts';
import {GridComponent} from '../../../pages/grid/components/grid';
import {FormComponent} from '../../../pages/forms/components/forms';
import {TableComponent} from '../../../pages/tables/components/tables';
import {BSElementComponent} from '../../../pages/bootstrap-element/components/bs_element';
import {BlankPageComponent} from '../../../pages/blank-page/components/blank_page';
import {NG2Component} from '../../../pages/component/components/component';

import {TopNavComponent} from '../../../shared/topnav/topnav';
import {SidebarComponent} from '../../../shared/sidebar/sidebar';
import {ClientHomeComponent} from "../../../pages/client-home/components/client-home";
import {UserService} from "../../../services/user.service";
import {JobsComponent} from "../../../pages/jobs/jobs.component";
import {JobDetailComponent} from "../../../pages/job-detail/job-detail.component";
import {ContractorOverviewComponent} from "../../../pages/contracter-overview/contractor-overview.component";

@Component({
  moduleId: module.id,
  selector: 'dashboard-cmp',
  templateUrl: 'dashboard.html',
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES, TopNavComponent, SidebarComponent]
})

@Routes([

    { path: '/home', component: HomeComponent },
    { path: '/chart', component: ChartComponent },
    { path: '/table', component: TableComponent },
	{ path: '/forms', component: FormComponent },
	{ path: '/element', component: BSElementComponent},
	{ path: '/grid', component: GridComponent },
	{ path: '/component', component: NG2Component },
	{ path: '/blank-page', component: BlankPageComponent },
  { path: 'client-home', component: ClientHomeComponent},
  { path: 'jobs', component: JobsComponent},
  { path: '/job-detail/:id', component: JobDetailComponent},
  { path: '/contractor/:id', component: ContractorOverviewComponent}

])


export class DashboardComponent {
  constructor(private _userService: UserService){

  }
}
