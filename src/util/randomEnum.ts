/**
 * Gets a random enum value from all available enums.
 * @param anEnum Enum type
 * @returns Random enum value
 */
export default function<T>(anEnum: T): T[keyof T] {
  let enumValues = Object.keys(anEnum)
    .map(n => Number.parseInt(n))
    .filter(n => !Number.isNaN(n)) as unknown as T[keyof T][]

  if (enumValues.length == 0) {
    // seems to be a string enum - use values directly
    enumValues = Object.values(anEnum) as unknown as T[keyof T][]
  }

  const randomIndex = Math.floor(Math.random() * enumValues.length)
  return enumValues[randomIndex]
}
