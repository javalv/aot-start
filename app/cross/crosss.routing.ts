import {Routes, RouterModule} from '@angular/router';
import {CrossListComponent} from "./cross.list";
import {CrossMainComponent} from "./cross.main";


const crossRoutes:Routes = <Routes>[
    {
        path: '',
        component: CrossMainComponent,
        children: [
            {path: '', component: CrossListComponent},
        ]
    }
];

export const crossRouting = RouterModule.forChild(crossRoutes);
