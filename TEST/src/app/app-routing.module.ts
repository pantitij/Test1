
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseLayoutComponent } from './Layout/base-layout/base-layout.component';
import { ExamIComponent } from './pages/exam-i/exam-i.component';
import { ExamIIComponent } from './pages/exam-ii/exam-ii.component';
import { ExamIIIComponent } from './pages/exam-iii/exam-iii.component';
import { ExamIVComponent } from './pages/exam-iv/exam-iv.component';
import { ExamVComponent } from './pages/exam-v/exam-v.component';
import { ExamVIComponent } from './pages/exam-vi/exam-vi.component';
import { ExamVIIComponent } from './pages/exam-vii/exam-vii.component';
import { ExamVIIIComponent } from './pages/exam-viii/exam-viii.component';


const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      { path: '', component: ExamIComponent, data: { extraParameter: 'testMenu' } },
      { path: 'test/exam-I', component: ExamIComponent, data: { extraParameter: 'testMenu' } },
      { path: 'test/exam-II', component: ExamIIComponent, data: { extraParameter: 'testMenu' } },
      { path: 'test/exam-III', component: ExamIIIComponent, data: { extraParameter: 'testMenu' } },
      { path: 'test/exam-IV', component: ExamIVComponent, data: { extraParameter: 'testMenu' } },
      { path: 'test/exam-V', component: ExamVComponent, data: { extraParameter: 'testMenu' } },
      { path: 'test/exam-VI', component: ExamVIComponent, data: { extraParameter: 'testMenu' } },
      { path: 'test/exam-VII', component: ExamVIIComponent, data: { extraParameter: 'testMenu' } },
      { path: 'test/exam-VIII', component: ExamVIIIComponent, data: { extraParameter: 'testMenu' } }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
