import { BackgroundImage, createStyles, Image, Text } from "@mantine/core"
import { productsMock } from "app/mock/products"
import { PublicTemplate, PublicTemplateProps } from "src/components/templates/PublicTemplate"
import { Carousel } from "src/components/mantine/Carousel"
import { Link } from "src/components/mantine/Link"

const useStyles = createStyles(({ radius, white, spacing }) => ({
  carouselElText: {
    backgroundImage: `linear-gradient(90deg, transparent 0%, #0008 40%, #000c 100%)`,
    textAlign: "right",
    color: white,
    padding: `${spacing.md}px ${spacing.lg}px`,
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
  
  const breadcrumb: PublicTemplateProps['breadcrumb'] = [
    {
      label: "Główna",
      url: "/",
    },
  ]

  return (
    <PublicTemplate
      activeLink="Główna"
      document={{ title: "Drzownica - najszypszy sklep" }}
      breadcrumb={breadcrumb}
    >
      <Carousel>
        {productsMock.map((el) => (
          <Link
            to={`products/${el.id}`}
            key={el.id}
          >
            <BackgroundImage
              src={el.imageUrl}
              sx={{
                width: "100%",
                height: "100%",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateRows: "min-content 1fr",
                  gridColumn: "2/3",
                }}
                className={classes.carouselElText}
              >
                <Text
                  size={35}
                  sx={{ textTransform: "uppercase" }}
                >
                  {el.name}
                </Text>
                <div
                  style={{
                    height: 1,
                    width: "100%",
                    backgroundImage:
                      "linear-gradient(90deg, transparent 0%, #fffa 40%, #fffc 100%)",
                  }}
                />
                <Text
                  px={10}
                  pt={25}
                >
                  {el.description}
                </Text>
              </div>
            </BackgroundImage>
          </Link>
        ))}
      </Carousel>
    </PublicTemplate>
  )
}
