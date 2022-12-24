import { createStyles, MantineSize, MantineColor, CSSObject } from "@mantine/core"
import { NextLink as MNextLink } from "@mantine/next"

const useStyles = createStyles(
  (
    { white, fontSizes, colors, spacing, radius },
    opt: {
      size: MantineSize
      active?: boolean
      color?: MantineColor
      hoverUnderline: boolean
      weight: CSSObject["fontWeight"]
    }
  ) => ({
    link: {
      color: opt.color ? colors[opt.color][9] : white,
      fontSize: fontSizes[opt.size] * 1.2,
      textDecoration: "none",
      fontWeight: opt.weight,
      "&:hover": {
        textDecoration: opt.hoverUnderline ? "underline" : "none",
      },
    },
    button: {
      backgroundColor: opt.active ? white : "#fff1",
      color: opt.active ? colors.green[8] : white,
      padding: `${spacing[opt.size] * 0.3}px ${spacing[opt.size]}px`,
      borderRadius: radius.lg * 0.8,
      "&:hover": {
        backgroundColor: opt.active ? colors.gray[2] : "#fff2",
      },
    },
  })
)

export type LinkProps = {
  children: React.ReactNode
  to: string
  size?: MantineSize
  onClick?: () => void
  buttonStyling?: boolean
  active?: boolean
  color?: MantineColor
  hoverUnderline?: boolean
  weight?: CSSObject["fontWeight"]
}
export const Link: React.FC<LinkProps> = ({
  children,
  to,
  onClick,
  buttonStyling = false,
  size = "md",
  active,
  color,
  hoverUnderline = false,
  weight = "normal",
}) => {
  const { classes, cx } = useStyles({ size, active, color, hoverUnderline, weight })

  return (
    <MNextLink
      legacyBehavior
      href={to}
      className={cx(classes.link, { [classes.button]: buttonStyling })}
      onClick={onClick}
    >
      {children}
    </MNextLink>
  )
}
