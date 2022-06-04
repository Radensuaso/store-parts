import { catchError, map, Observable, of, take } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { Part } from './Part';

const url = 'http://localhost:8081/store';

export function getParts(
  query: string,
  type: string
): Observable<Part[] | null> {
  const params =
    query.length > 0 && type.length > 0
      ? `query=${query}&type=${type}`
      : query.length > 0 && type.length === 0
      ? `query=${query}`
      : query.length === 0 && type.length > 0
      ? `type=${type}`
      : '';

  return ajax.getJSON<Part[]>(`${url}/parts?${params}`).pipe(
    map((res) => res),
    catchError(() => of(null)),
    take(1)
  );
}

export function getTypes(): Observable<string[] | null> {
  return ajax.getJSON<string[]>(`${url}/part-types`).pipe(
    map((res) => res),
    catchError(() => of(null)),
    take(1)
  );
}
