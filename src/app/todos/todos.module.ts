import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule, ActionReducer } from '@ngrx/store';
import { todosReducer } from '../todos/common/stores/todos/todos.reducers';
import { TodosEffects } from '../todos/common/stores/todos/todos.effects';
import { TodosService } from '../todos/common/services/todos.service';
import { storeLogger } from 'ngrx-store-logger';
import { EffectsModule } from '@ngrx/effects';

export function logger(reducer: ActionReducer<any>): any {
  return storeLogger()(reducer);
}

export const metaReducers = [logger];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('todos', todosReducer, { metaReducers }),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([TodosEffects])
  ],
  providers: [TodosService]
})
export class TodosModule { }
