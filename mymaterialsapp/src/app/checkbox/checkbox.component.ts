import { Component } from '@angular/core';

import { MatCheckboxModule } from '@angular/material/checkbox';  // Import MatCheckboxModule
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css'
})
export class CheckboxComponent {

  someprop : number =1;
}
