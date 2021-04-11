/**
* @template T The type you want to know whether @arg's type is T.
* @template W (optional) The type to which @T extends.
* @param arg The arg which you want check type.
* @param prop The prop that is unique in arg Types.
* @return whether @prop exist in @arg.
*/
export const TypeIs = <T extends W, W = any,>(arg:W, prop: any): arg is T => {
    return prop in arg
}