import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { DetailsComponent } from './details/details.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Details Page'
    },
    {
        path: 'projects',
        component: ProjectsComponent,
        title: 'Projects'
    },
        {
        path: 'contact',
        component: ContactComponent,
        title: 'Contact'
    },
];

export default routeConfig;