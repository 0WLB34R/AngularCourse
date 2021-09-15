import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedMaterialModule} from "../../shared/shared-material.module";
import {MessageSenderModule} from "../../shared/modules/message-sender/message-sender.module";
import {PostModule} from "../../shared/modules/post/post.module";

const routes: Routes = [
  {path: '', component: ProfileComponent}
]

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MessageSenderModule,
    PostModule,
    SharedMaterialModule
  ]
})
export class ProfileModule { }
