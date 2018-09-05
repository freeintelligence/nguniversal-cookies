import { NgModule } from '@angular/core'
import { NgUniversalCookiesService } from './cookies.service'
import { NgUniversalRequestService } from './request.service'

@NgModule({
  imports: [
  ],
  declarations: [],
  exports: [],
  providers: [
    NgUniversalCookiesService,
    { provide: 'req', useClass: NgUniversalRequestService }
  ]
})
export class NgUniversalCookiesServerModule { }
