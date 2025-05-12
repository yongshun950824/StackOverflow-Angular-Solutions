import { Page } from './page.class';

/**
 * An array of data with an associated page object used for paging
 */
export class PagedData<T> {
  results = new Array<T>();
  page = new Page();
}