import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { GalleryComponent } from './gallery.component';
import { CommonModule } from '@angular/common';
import { SimpleBlockModule } from '@shared/components/simple-block';
import { SplitBlockModule } from '@shared/components/split-block';
import { DirectivesModule } from '@shared/directives';
import { GalleryRoutingModule } from './gallery-routing.module';
import {Angular2ImageGalleryModule} from "angular2-image-gallery";
import {HammerModule} from "@angular/platform-browser";

@NgModule({
  declarations: [GalleryComponent],
  imports: [CommonModule, GalleryRoutingModule, TranslateModule,  SimpleBlockModule, SplitBlockModule, DirectivesModule, Angular2ImageGalleryModule, HammerModule]
})
export class GalleryModule {}
