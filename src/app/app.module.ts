import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipamentoComponent } from './equipamento';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { LocalizacaoService } from './shared/servico/localizacao.service';

@NgModule({
  declarations: [
    AppComponent,
    EquipamentoComponent
    
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    BrowserAnimationsModule,
    SelectButtonModule,
    InputNumberModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LocalizacaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
