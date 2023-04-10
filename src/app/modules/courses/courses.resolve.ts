import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    Router,
    RouterStateSnapshot,
} from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { Category, Course } from 'app/modules/courses/courses.types';
import { CoursesServices } from './courses.service';

@Injectable({
    providedIn: 'root',
})
export class CoursesResolve implements Resolve<any> {
    /**
     * Constructor
     */
    constructor(private _courseService: CoursesServices) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Category[]> {
        return this._courseService.getCategories();
    }
}

@Injectable({
    providedIn: 'root',
})
export class CourseResolve implements Resolve<any> {
  
    constructor(private _courseService: CoursesServices) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Course[]> {
        debugger
        return this._courseService.getCourses();
    }
}

@Injectable({
    providedIn: 'root',
})
export class CoursesesResolve implements Resolve<any> {

    constructor(
        private _router: Router,
        private _coursesService: CoursesServices
    ) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Course> {
        return this._coursesService
            .getCourseById(route.paramMap.get('id'))
            .pipe(
                catchError((error) => {
                    console.error(error);

                    const parentUrl = state.url
                        .split('/')
                        .slice(0, -1)
                        .join('/');

                    this._router.navigateByUrl(parentUrl);

                    return throwError(error);
                })
            );
    }
}
