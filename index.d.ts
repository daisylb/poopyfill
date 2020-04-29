declare global {
  interface Array<T> {
    eat: Array<T>['unshift']
    vomit: Array<T>['shift']
    poop: Array<T>['pop']
    ꓽO: Array<T>['push']
  }
}
export {}