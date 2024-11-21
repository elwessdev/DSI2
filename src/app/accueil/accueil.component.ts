import { Component } from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccueilComponent {

}
