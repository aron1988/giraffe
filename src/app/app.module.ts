import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './comps/parent/parent.component';
import { ChildComponent } from './comps/child/child.component';
import { JPageComponent } from './comps/jiraff-admin/j-page/j-page.component';
import { JItemComponent } from './comps/jiraff-admin/j-item/j-item.component';
import { JDetailsComponent } from './comps/jiraff-admin/j-details/j-details.component';
import { JLabalSpanComponent } from './comps/jiraff-admin/j-labal-span/j-labal-span.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    JPageComponent,
    JItemComponent,
    JDetailsComponent,
    JLabalSpanComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
