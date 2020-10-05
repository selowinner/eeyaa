import {Injectable, Injector} from '@angular/core';
import {ReclarationsService} from './reclarations.service';
import {Observable} from 'rxjs';
import {IResponse} from '../models/IResponse';
import {DeclarationsService} from './declarations.service';

@Injectable({
  providedIn: 'root',
})
export class FacadeService {
  /**
   * inject service
   */

// tslint:disable-next-line:variable-name
  private _reclamation: ReclarationsService;
// tslint:disable-next-line:variable-name
  private _declamation: DeclarationsService;

  constructor(private injector: Injector) {
  }

  public get reclamationsService(): ReclarationsService {
    if (!this._reclamation) {
      this._reclamation = this.injector.get(ReclarationsService);
    }
    return this._reclamation;
  }

  public get declamationsService(): DeclarationsService {
    if (!this._declamation) {
      this._declamation = this.injector.get(DeclarationsService);
    }
    return this._declamation;
  }

  /**
   * End inject service
   */

  /**
   * START RECLARATION
   */

  /**
   *
   * @param {number} startingFrom
   * @param {number} pageSize
   * @returns {Observable<IResponse<any[]>>}
   */
  getAllReclaration(
    startingFrom: number = 1,
    pageSize: number = 100,
  ): Observable<IResponse<any[]>> {
    return this.reclamationsService.getAllReclarations(startingFrom, pageSize);
  }

  /**
   * START DECLARATION
   */

  getAllDeclaration(
    startingFrom: number = 1,
    pageSize: number = 100,
  ): Observable<IResponse<any[]>> {
    return this.declamationsService.getAllDeclarations(startingFrom, pageSize);
  }
}
