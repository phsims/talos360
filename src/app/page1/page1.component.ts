import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatFactsService } from '../cat-facts.service';
import { CatFactsGridComponent } from '../cat-facts-grid/cat-facts-grid.component';
import { RouterLink } from '@angular/router';
import { ICatFact } from '../interface';

@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [CommonModule, CatFactsGridComponent, RouterLink],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.scss'
})

export class Page1Component implements OnInit {
  title = 'Cat Facts';
  catFacts: ICatFact[] = [];
  catFactsFiltered: ICatFact[] | null = null;
  isDescendingOrder: boolean = false;
  searchTerm: string = '';
  buttonDisabled: boolean = false;

  constructor(private catFactsService: CatFactsService) { }

  getCatFacts() {
    this.buttonDisabled = true;
    this.catFactsService.getCatFacts().subscribe(data => {
      this.catFactsFiltered = null
      this.catFacts = data;
      this.buttonDisabled = false;
    });
  }

  orderBy() {
    this.isDescendingOrder = !this.isDescendingOrder;

    if (this.isDescendingOrder) {
      this.catFacts.sort((a, b) => b.catId - a.catId);
    } else {
      this.catFacts.sort((a, b) => a.catId - b.catId);
    }
  }

  filterResults(text: string) {
    if (!text) {
      this.catFactsFiltered = this.catFacts
      return;
    }
    this.catFactsFiltered = this.catFacts.filter(({ catFact }) => catFact.toLowerCase().includes(text.toLowerCase()));
  }

  ngOnInit() {
    this.getCatFacts()
  }
}
