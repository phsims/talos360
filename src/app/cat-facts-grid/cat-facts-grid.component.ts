import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cat-facts-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cat-facts-grid.component.html',
  styleUrl: './cat-facts-grid.component.scss'
})
export class CatFactsGridComponent {
  @Input() catFacts: any[];

  constructor() {
    this.catFacts = [];
  }
  trackByFn(fact: any): number {
    return fact.id;
  }
}
