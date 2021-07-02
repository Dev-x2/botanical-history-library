import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';

import { PageDetailsComponent } from '../../components/page-details/page-details.component';
import { NzCardModule } from 'ng-zorro-antd/card';

import { CommonModule } from '@angular/common';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';

@NgModule({
  imports: [
    WelcomeRoutingModule,
    NzCardModule,
    CommonModule,
    NzGridModule,
    NzDividerModule,
    NzIconModule,
    NzImageModule,
    NzButtonModule,
    NzLayoutModule,
    NzSkeletonModule,
    NzEmptyModule,
    NzSpinModule,
    NzBackTopModule
  ],
  declarations: [WelcomeComponent, PageDetailsComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule {}
