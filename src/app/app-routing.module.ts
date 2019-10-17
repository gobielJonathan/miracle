import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardGuard } from './services/guards/auth-guard.guard';
import { NotAuthGuard } from './services/guards/not-auth.guard';
import { TimelineComponent } from './module/timeline/timeline.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/job/active-job',
    pathMatch: 'full'
  },

  {
    path: 'auth/login',
    canActivate: [NotAuthGuard],
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },

  {
    path: 'announcement',
    canActivate: [AuthGuardGuard],
    loadChildren: () => import('./pages/announcement/announcement.module').then(m => m.AnnouncementModule)
  },

  {
    path: 'job',
    canActivate: [AuthGuardGuard],
    loadChildren: () => import('./pages/jobs/jobs.module').then(m => m.JobsModule)
  },
  {
    path: 'binusmaya/class-schedule',
    canActivate: [AuthGuardGuard],
    loadChildren: () => import('./pages/class-schedule/class-schedule.module').then(m => m.ClassScheduleModule)
  },
  {
    path: 'miscellaneous',
    canActivate: [AuthGuardGuard],
    children: [
      {
        path: 'room-transaction',
        loadChildren: () => import('./pages/room-transaction/room-transaction.module').then(m => m.RoomTransactionModule),
      },
      {
        path: 'room-generation',
        loadChildren: () => import('./pages/room-generation/room-generation.module').then(m => m.RoomGenerationModule),
      },
      {
        path: 'course-outline',
        loadChildren: () => import('./pages/course-outline/course-outline.module').then(m => m.CourseOutlineModule)
      },
      {
        path: 'questionnaire',
        loadChildren: () => import('./pages/questionnaire/questionnaire.module').then(m => m.QuestionnaireModule)
      },

    ]
  },
  {
    path: 'timeline',
    component: TimelineComponent  
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
