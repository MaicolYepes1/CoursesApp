import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { academyRoutes } from './courses.routing';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { CourseDetailComponent } from './courseDetail/courseDetail.component';
import { ListCoursesComponent } from './listCourses/listCourses.component';

@NgModule({
    imports: [CommonModule, RouterModule.forChild(academyRoutes), SharedModule],
    declarations: [CoursesComponent, CourseDetailComponent, ListCoursesComponent],
    exports: [CoursesComponent],
})
export class CoursesModule {}
