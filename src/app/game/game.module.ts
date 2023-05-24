import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameRoutingModule } from './game-routing.module';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from "@angular/common/http";

import { GameComponent } from './pages/game/game.component';
import { GameoverComponent } from './pages/gameover/gameover.component';
import { PokemonViewComponent } from './components/pokemon-view/pokemon-view.component';
import { HabilitatsIsmaNaciriComponent } from './pages/game/habilitats-isma-naciri/habilitats-isma-naciri.component';



@NgModule({
  declarations: [
    GameComponent,
    GameoverComponent,
    PokemonViewComponent,
    HabilitatsIsmaNaciriComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class GameModule { }
