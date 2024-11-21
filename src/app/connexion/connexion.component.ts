import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-connexion',
  standalone: true,
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.scss',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule,MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConnexionComponent {

}
