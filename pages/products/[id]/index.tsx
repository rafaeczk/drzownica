import { productsMock, TProduct } from "app/mock/products"
import { GetServerSideProps } from "next"
import { PublicTemplate, PublicTemplateProps } from "src/components/templates/PublicTemplate"

type ProductProps = {
  product: TProduct | undefined
}
const Product: React.FC<ProductProps> = ({ product }) => {

  const breadcrumb: PublicTemplateProps["breadcrumb"] = [
    {
      label: "Produkty",
      url: "/products",
    },
    {
      label: product ? `"${product?.name}"` : "Nie znaleziono!",
      url: product ? `/products/${product.id}` : '/products',
    },
  ]

  return (
    <PublicTemplate
      activeLink="Produkty"
      document={{ title: `Drzownica | ${product?.name}` }}
      notFound={!product}
      breadcrumb={breadcrumb}
    >
      {product?.name}
    </PublicTemplate>
  )
}
export default Product

export const getServerSideProps: GetServerSideProps<ProductProps> = async (context) => {
  const { id } = context.query
  const product = productsMock.find((p) => p.id == id)

  return { notFound: false, props: { product } }
}
