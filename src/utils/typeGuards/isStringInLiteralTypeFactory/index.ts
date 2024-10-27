export function isStringInLiteralTypeFactory<LiteralType extends string>(
   obj: Record<LiteralType, string>,
) {
   return (str: string): str is LiteralType => {
      const s: readonly string[] = Object.values(obj)

      return s.includes(str)
   }
}
