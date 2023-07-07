import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Test23StudentListComponent } from './test23-student-list/test23-student-list.component';
import { Test23CourseListComponent } from './test23-course-list/test23-course-list.component';
import { Test23RoutingPageNotFoundComponent } from './test23-routing-page-not-found/test23-routing-page-not-found.component';
import { Test23CourseDetailsComponent } from './test23-course-details/test23-course-details.component';
import { Test23CourseDurationComponent } from './test23-course-duration/test23-course-duration.component';
import { Test23CourseFeeComponent } from './test23-course-fee/test23-course-fee.component';
import { AdminAccessGuard } from './admin-access.guard';
import { AdminHomeComponent } from './admin-home/admin-home.component';

const routes: Routes = [
    {path: '', redirectTo: '/student', pathMatch: "full"},
    {path: 'student', component: Test23StudentListComponent},
    {path: 'course-mylist', component: Test23CourseListComponent},
    {path: 'course-mylist/:id', 
    component:Test23CourseDetailsComponent,
    children: [
        {path: 'duration', component: Test23CourseDurationComponent },
        {path: 'fee', component: Test23CourseFeeComponent}
    ]
    },
    { path: 'faculty', loadChildren: () => import('./faculty/faculty.module').then(m => m.FacultyModule) },
    { path: 'admin', 
        component: AdminHomeComponent,
        canActivate: [AdminAccessGuard],
    },


    //need to declare in last
    {path: '**', component:Test23RoutingPageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
export const myRouting = [
    Test23StudentListComponent,
    Test23CourseListComponent,
    Test23RoutingPageNotFoundComponent,
    Test23CourseDetailsComponent,
    Test23CourseDurationComponent,
    Test23CourseFeeComponent

];