export const getIonChangeEvent = (value: string) => {
  return new CustomEvent('ionChange', { detail: { value: value } })
}