import { Injectable, Inject } from '@angular/core'
import { REQUEST } from '@nguniversal/express-engine/tokens'

@Injectable()
export class NgUniversalRequestService {

  constructor(@Inject(REQUEST) private request: any) { }

  get cookies(): any {
    return !!this.request.headers.cookie ? this.request.headers.cookie : null
  }

}
