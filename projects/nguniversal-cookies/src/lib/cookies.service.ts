import { Injectable, Inject } from '@angular/core'
import { set, get, getAll, remove, parse, encode } from 'es-cookie'

import { CookieAttributes } from './interfaces/cookie_attributes'

@Injectable()
export class NgUniversalCookiesService {

  constructor(@Inject('req') private readonly request: any) { }

  set(name: string, value: string, attributes?: CookieAttributes) {
    if(!this.isServer()) set(name, value, attributes)
  }

  get(name: string): string {
    return this.getAll()[name]
  }

  getAll(): any {
    return this.parse(this.isServer() ? this.request.cookies : document.cookie)
  }

  remove(name: string, attributes?: CookieAttributes): void {
    if(!this.isServer()) remove(name, attributes)
  }

  parse(cookieString): { [name: string]: string; } {
    return parse(cookieString)
  }

  encode(name: string, value: string, attributes: CookieAttributes): string {
    return encode(name, value, attributes)
  }

  private isServer(): boolean {
    return this.request !== null
  }

}
