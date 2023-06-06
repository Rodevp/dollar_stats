import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { supabase } from 'src/libs/supabase';
import { ResponseScrap } from './response.model';

@Injectable({
  providedIn: 'root'
})
export class DollarService {

  private http = inject(HttpClient)
  private url = environment.urlScrap

  private handleError = (error: HttpErrorResponse) => {
    if (error) {
      console.error('error encontrado -> ', error?.message)
    }
    return throwError(() => new Error('Peticion incorrecta'))
  }

  getDollarToday = () => {
    return this.http.get<ResponseScrap>(this.url, {
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .pipe(
        catchError(this.handleError)
      )
  }

  saveHistory = async (decimal: string) => {

    const { error: errorHistory } = await supabase
      .from('history')
      .insert({ value: decimal })

    if (!errorHistory) {
      return decimal
    }

    return '0'

  }

  getHistory = async (): Promise<String[] | Number[]> => {
    const { data: history, error } = await supabase
      .from('history')
      .select('*')

    if (error) {
      return []
    }
    
    const values = history?.map(item => item["value"] )

    return values

  }


}
