import { createStyles } from "@mantine/core"
import { Carousel as MCarousel } from "@mantine/carousel"

const useStyles = createStyles(({ colors, radius }) => ({
  carouselRoot: {
    borderRadius: radius.lg,
    overflow: "hidden",
  },
  carouselEl: {
    backgroundColor: colors.gray[2],
    height: "100%",
    borderRadius: radius.lg,
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

export type CarouselProps = {
  children: React.ReactNode[]
}
export const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const { classes } = useStyles()
  return (
    <MCarousel
      classNames={{
        root: classes.carouselRoot,
        control: classes.carouselControl,
        controls: classes.carouselControls,
      }}
      slideSize="70%"
      height={300}
      slideGap="xs"
      controlSize={28}
      loop
      dragFree
    >
      {children.map((child, i) => (
        <MCarousel.Slide key={i}>
          <div className={classes.carouselEl}>{child}</div>
        </MCarousel.Slide>
      ))}
    </MCarousel>
  )
}
