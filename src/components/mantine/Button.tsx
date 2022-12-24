import { Button as MButton, createStyles, MantineSize } from "@mantine/core"
import { IconType } from "react-icons"

const useStyles = createStyles(({ white, fontSizes, spacing, radius }, opt: { square: boolean }) => ({
  root: {
    backgroundColor: "#fff1",
    color: white,
    padding: !opt.square ? `0 ${spacing.lg}px` : '0',
    aspectRatio: opt.square ? '1' : 'none',
    height: spacing.md * 2.7,
    borderRadius: radius.lg * 0.8,
    "&:hover": {
      backgroundColor: "#fff2",
    },
  },
}))

export type ButtonProps = {
  children?: React.ReactNode
  Icon?: IconType
  iconSize?: MantineSize
  onClick: () => void
  square?: boolean
}
export const Button: React.FC<ButtonProps> = ({ Icon, children, iconSize, onClick, square = false }) => {
  const { classes, theme: { fontSizes } } = useStyles({ square })

  return (
    <MButton classNames={{ root: classes.root }} onClick={onClick}>
      {children}
      {Icon && <Icon size={fontSizes[iconSize ?? "md"] * 1.7} />}
    </MButton>
  )
}
