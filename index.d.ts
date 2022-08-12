/// <reference types="node" />

export enum Agent {
  trident,
  presto,
  webKit,
  gecko,
  mobile,
  ios,
  android,
  iPhone,
  iPad,
  webApp,
  weixin,
  qq
}
export declare function isElementInViewport(el?: Element):boolean;

export declare function addEventListener(target:Element, type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): {remove: () => void}

export declare function getClientRect(el:Element): Record<'x'|'y'|'top'|'left', number>

export declare function scrollLoad(listener: (callback: Function) => void): { remove: () => void }

export declare function disabledSrroll(el?: Element):{ remove: () => void }

export declare function queryString(string): Object

export declare function plus(...args: number[]): number

export declare function minus(...args: number[]): number

export declare function times(...args: number[]): number

export declare function div(...args: number[]): number

export declare const Storage: {
  getItem: (key: string) => any,
  setItem: (key: string, value: any, expire?: number) => void
}

export declare const Regex: Record<'HTML_NOTE' | 'REPEAT_WORD' | 'CHINESE' | 'DATE' | 'HEX' | 'BASE64' | 'STRENGTH', RegExp>

export declare function getTerminal(): Record<keyof typeof Agent, boolean>

export declare function isMobile(): boolean

export interface CupStatic {
  isElementInViewport(el?: Element): boolean
  addEventListener(target:Element, type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): {remove: () => void}
  getClientRect(el:Element): Record<'x'|'y'|'top'|'left', number>
  scrollLoad(listener: (callback: Function) => void): { remove: () => void }
  disabledSrroll(el?: Element):{ remove: () => void }
  queryString(string): Object
  plus(...args: number[]): number
  minus(...args: number[]): number
  times(...args: number[]): number
  div(...args: number[]): number
  Storage: {
    getItem(key: string): any,
    setItem(key: string, value: any, expire?: number)
  }
  Regex: Record<'HTML_NOTE' | 'REPEAT_WORD' | 'CHINESE' | 'DATE' | 'HEX' | 'BASE64' | 'STRENGTH', RegExp>
  getTerminal(): Record<keyof typeof Agent, boolean>
  isMobile(): boolean
}

declare const cup: CupStatic
export default cup