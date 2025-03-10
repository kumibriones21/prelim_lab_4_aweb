import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './admin/home/home.component';
import { UserComponent } from './admin/user/user.component';
import { PostComponent } from './admin/post/post.component';

export const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'post', component: PostComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule] 
})
export class AppRoutingModule {}
