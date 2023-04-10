import { Route } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { CourseResolve, CoursesResolve, CoursesesResolve } from './courses.resolve';
import { ListCoursesComponent } from './listCourses/listCourses.component';
import { CourseDetailComponent } from './courseDetail/courseDetail.component';


export const academyRoutes: Route[] = [
    {
        path     : '',
        component: CoursesComponent,
        resolve  : {
            categories: CoursesResolve
        },
        children : [
            {
                path     : '',
                pathMatch: 'full',
                component: ListCoursesComponent,
                resolve  : {
                    courses: CourseResolve
                }
            },
            {
                path     : ':id',
                component: CourseDetailComponent,
                resolve  : {
                    course: CoursesesResolve
                }
            }
        ]
    }
];
