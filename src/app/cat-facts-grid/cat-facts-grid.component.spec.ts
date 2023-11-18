import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatFactsGridComponent } from './cat-facts-grid.component';

describe('CatFactsGridComponent', () => {
  let component: CatFactsGridComponent;
  let fixture: ComponentFixture<CatFactsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatFactsGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatFactsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
