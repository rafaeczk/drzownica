import { productsMock, TProduct } from "app/mock/products"
import { GetServerSideProps } from "next"
import { PublicTemplate, PublicTemplateProps } from "src/components/templates/PublicTemplate"
import { Grid, Image, Text } from "@mantine/core"



const longDescription = (text: string) => {
  for(let i = 0; i < 7; i++)
    text += " " + text
  return text
}


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
      url: product ? `/products/${product.id}` : "/products",
    },
  ]

  return (
    <PublicTemplate
      activeLink="Produkty"
      document={{ title: `Drzownica | ${product?.name}` }}
      breadcrumb={breadcrumb}
    >
      <Grid
        sx={(th) => ({
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          padding: th.spacing.xs,
          gap: th.spacing.md,
        })}
      >
        <Image
          src={product?.imageUrl}
          radius="lg"
        />
        <Grid
          sx={(th) => ({
            display: "grid",
            padding: th.spacing.xs,
            gridTemplateColumns: "1fr",
            gridTemplateRows: "min-content 1fr",
            gap: th.spacing.md,
          })}
        >
          <Text
            sx={(th) => ({
              fontSize: 45,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: 12,
              color: th.white,
              backgroundColor: th.colors.gray[6],
              borderRadius: th.radius.lg,
              padding: `0 ${th.spacing.md}px`,
            })}
          >
            {product?.name}
          </Text>
          <Text
            sx={(th) => ({
              color: th.white,
              backgroundImage: `linear-gradient(to bottom, ${th.colors.gray[6]}, transparent)`,
              borderRadius: th.radius.lg,
              padding: th.spacing.md,
            })}
          >
            {longDescription(product?.description ?? "")}
          </Text>
        </Grid>
      </Grid>
    </PublicTemplate>
  )
}
export default Product

export const getServerSideProps: GetServerSideProps<ProductProps> = async (context) => {
  const { id } = context.query
  const product = productsMock.find((p) => p.id == id)

  return { notFound: !product, props: { product } }
}
