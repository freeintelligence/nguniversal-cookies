export interface CookieAttributes {
  domain?: string,
  expires?: number | Date,
  path?: string,
  sameSite?: 'strict' | 'lax'
  secure?: boolean,
}
