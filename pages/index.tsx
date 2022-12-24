import { createStyles, Image, Text } from "@mantine/core"
import { products } from "app/mock/products"
import { PublicTemplate } from "src/components/templates/PublicTemplate"
import { Carousel } from "src/components/mantine/Carousel"

const useStyles = createStyles(({ colors, radius }) => ({
  carouselRoot: {
    borderRadius: radius.lg,
    overflow: "hidden",
  },
  carouselEl: {
    backgroundColor: colors.gray[2],
    height: "100%",
    borderRadius: radius.lg,
    display: "grid",
    gridTemplateColumns: "3fr 2fr",
    overflow: "hidden",
  },
  carouselElLabel: {
    textTransform: "uppercase",
    backgroundColor: colors.gray[3],
    padding: "0 10px",
  },
  carouselControls: {
    top: "50%",
    translate: "0 -50%",
  },
  carouselControl: {
    backgroundColor: "#fffc",
    borderRadius: radius.md,
    width: 20,
    height: 60,
  },
}))

export default function Home() {
  const { classes } = useStyles()

  return (
    <>
      <PublicTemplate activeLink="Główna" document={{ title: "Drzownica - najszypszy sklep" }}>

        <Carousel>
          {products.map((el) => (
            <>
              <Image
                src={el.imageUrl}
                height={300}
                width="100%"
                fit="contain"
              />
              <div style={{ display: "grid", gridTemplateRows: "1fr min-content" }}>
                <Text
                  px={10}
                  pt={25}
                >
                  {el.description}
                </Text>
                <Text
                  size={25}
                  weight="lighter"
                  className={classes.carouselElLabel}
                >
                  {el.name}
                </Text>
              </div>
            </>
          ))}
        </Carousel>

      </PublicTemplate>
    </>
  )
}
