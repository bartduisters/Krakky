import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './components/account/account.component';
import { StylingModule } from '../styling/styling.module';
import { ApiTokenComponent } from './components/api-token/api-token.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
@NgModule({
  declarations: [AccountComponent, ApiTokenComponent],
  imports: [CommonModule, StylingModule, ClipboardModule],
})
export class AccountModule {}
