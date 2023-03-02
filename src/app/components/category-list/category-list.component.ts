import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Optional, Output } from '@angular/core';
import { Categories, CategoryItem } from '@core/models/category.interface';
import { CategoryService } from '@core/services/category.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
  providers: [CategoryService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryListComponent implements OnInit {
  categories$!: Observable<Categories>;
  
  @Output() categoryItem = new EventEmitter<CategoryItem>;

  constructor(
   @Optional() private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categories$ = this.categoryService.getCategories();
  }

  onClickCategory(value: any): void {
    this.categoryItem.emit(value);
  }
}
