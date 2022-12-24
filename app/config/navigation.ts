
export type TNavigationElement = {
  to: string
  label: string
}
export const navigationConfig: TNavigationElement[] = [
  {
    label: "Główna",
    to: "/",
  }, {
    label: "Produkty",
    to: "/products",
  }, {
    label: "Sklepy",
    to: "/shops",
  }
]
