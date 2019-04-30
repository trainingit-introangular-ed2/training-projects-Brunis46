import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from '../projects.interface';

/**
 * Data source for the List view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ListDataSource extends DataSource<Project> {
  data: Project[];

  constructor(private paginator: MatPaginator, private sort: MatSort, private projs: Observable<Project[]>) {
    super();
    projs.subscribe(projects => {
      this.data = projects;
    });
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Project[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [this.projs, this.paginator.page, this.sort.sortChange];

    // Set the paginator's length
    this.paginator.length = this.data == undefined ? 0 : this.data.length;

    return merge(...dataMutations).pipe(
      map(() => {
        return [...this.data];
      })
    );
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
