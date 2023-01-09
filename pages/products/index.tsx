import { TProduct } from "app/mock/products"
import { GetServerSideProps } from "next"
import { PublicTemplate, PublicTemplateProps } from "src/components/templates/PublicTemplate"
import { productsMock } from "app/mock/products"
import { BackgroundImage, Text, createStyles } from "@mantine/core"
import { Link } from "src/components/mantine/Link"

const useStyles = createStyles(({ colors, black, fontSizes, fn }) => ({
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "1rem",
  },
  gridElement: {
    transition: ".1s grid-template-rows",
    height: 250,
    display: "grid !important",
    gridTemplateRows: "5fr 2fr",
    overflow: "hidden",
    backgroundPositionY: "-40px !important",
    "&:hover": {
      gridTemplateRows: "5fr 3fr",
    },
  },
  gridBottom: {
    display: "grid",
    gridTemplateRows: "min-content 1fr",
    backgroundColor: colors.gray[4],
    borderTop: `7px solid ${colors.green[8]}`,
    color: black,
    padding: "4px 10px",
  },
  gridName: {
    textTransform: "uppercase",
    fontSize: fontSizes.xl,
    fontWeight: "bold",
  },
  gridDescription: {
    fontSize: fontSizes.lg,
    fontWeight: "lighter",
  },
}))

type ProductsProps = {
  products: TProduct[]
}
const Products: React.FC<ProductsProps> = ({ products }) => {
  const { classes } = useStyles()
  const breadcrumb: PublicTemplateProps["breadcrumb"] = [
    {
      label: "Produkty",
      url: "/products",
    },
  ]

  return (
    <PublicTemplate
      document={{
        title: "Drzownica | Produkty",
      }}
      breadcrumb={breadcrumb}
      activeLink="Produkty"
    >
      <div className={classes.grid}>
        {products.map((p) => (
          <Link
            key={p.id}
            to={`/products/${p.id}`}
          >
            <BackgroundImage
              key={p.id}
              src={p.imageUrl}
              radius="lg"
              className={classes.gridElement}
            >
              <div />
              <div className={classes.gridBottom}>
                <Text className={classes.gridName}>{p.name}</Text>
                <Text className={classes.gridDescription}>{p.description}</Text>
              </div>
            </BackgroundImage>
          </Link>
        ))}
      </div>
    </PublicTemplate>
  )
}
export default Products

export const getServerSideProps: GetServerSideProps<ProductsProps> = async (context) => {
  return {
    notFound: false,
    props: {
      products: productsMock,
    },
  }
}
