import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';

const routes = [
    {
        path: '',
        component: LoginComponent,
    },
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
    declarations: [LoginComponent]
})
export class LoginModule {}
