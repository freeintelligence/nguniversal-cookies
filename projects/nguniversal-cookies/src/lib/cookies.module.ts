import { NgModule } from '@angular/core'
import { NgUniversalCookiesService } from './cookies.service'

@NgModule({
  imports: [
  ],
  declarations: [],
  exports: [],
  providers: [
    NgUniversalCookiesService,
    { provide: 'req', useValue: null }
  ]
})
export class NgUniversalCookiesModule { }
