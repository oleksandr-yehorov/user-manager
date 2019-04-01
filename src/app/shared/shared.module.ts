import {NgModule} from '@angular/core';
import {LoaderComponent} from './components/loader/loader.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FilterPipe} from './pipes/filter.pipe';

@NgModule({
  declarations: [
    LoaderComponent,
    FilterPipe
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    LoaderComponent
  ]
})

export class SharedModule {}
