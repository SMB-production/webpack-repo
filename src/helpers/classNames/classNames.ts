type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods, additional: string[]): string {
   return [
      cls,
      ...additional,
      Object.entries(mods)
         .filter(([key, value]) => Boolean(value))
         .map(([key, value]) => `${key} ${value ? 'true' : 'false'}`),
   ].join(' ')
}

classNames('removeBtn', {hovered: true, selectable: true, red: false}, ['pdg'])
