import { createStyles, MantineSize } from "@mantine/core"
import { NextLink as MNextLink } from "@mantine/next"

const useStyles = createStyles(({ white, fontSizes, colors, spacing, radius }, opt: { size: MantineSize, active?: boolean }) => ({
  link: {
    color: white,
    fontSize: fontSizes[opt.size] * 1.2,
    textDecoration: "none",
  },
  button: {
    backgroundColor: opt.active ? white : "#fff1",
    color: opt.active ? colors.green[8] : white,
    padding: `${spacing[opt.size] * .3}px ${spacing[opt.size]}px`,
    borderRadius: radius.lg * 0.8,
    "&:hover": {
      backgroundColor: opt.active ? colors.gray[2] : "#fff2",
    },
  },
}))

export type LinkProps = {
  children: React.ReactNode
  to: string
  size?: MantineSize
  onClick?: () => void
  buttonStyling?: boolean
  active?: boolean
}
export const Link: React.FC<LinkProps> = ({ children, to, onClick, buttonStyling = false, size = "md", active }) => {
  const { classes, cx } = useStyles({ size, active })

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
