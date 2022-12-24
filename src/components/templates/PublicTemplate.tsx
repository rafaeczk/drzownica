import { createStyles, Group, Text } from "@mantine/core"
import { useMediaQuery, useScrollLock } from "@mantine/hooks"
import Image from "next/image"
import { Link } from "src/components/mantine/Link"
import { Button } from "src/components/mantine/Button"
import Logo from "resources/images/white-logo.png"
import { CgMenuRight } from "react-icons/cg"
import { RxCross2 } from "react-icons/rx"
import { useState } from "react"
import { navigationConfig } from "app/config/navigation"
import Head from "next/head"

const useStyles = createStyles(
  ({ colors, white, fn }, { sideBarOpened }: { sideBarOpened: boolean }) => ({
    root: {
      transition: "translate .1s",
      translate: sideBarOpened ? "-100vw 0" : 0,
    },
    header: {
      backgroundColor: colors.green[8],
      color: white,
      height: 110,
      padding: "0 120px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      [fn.smallerThan("md")]: {
        padding: "0 80px",
      },
      [fn.smallerThan("sm")]: {
        padding: "0 30px",
      },
    },
    sidebar: {
      transition: "right .1s",
      position: "fixed",
      right: sideBarOpened ? 0 : "-100vw",
      top: 0,
      bottom: 0,

      backgroundColor: colors.green[9],
      width: "100vw",
      height: "100vh",
      padding: `0 80px`,
      [fn.smallerThan("xs")]: {
        padding: "0 35px",
      },
    },
    sidebarTop: {
      height: 110,
      padding: "0 30px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    sidebarList: {
      flexDirection: "column",
    },
    main: {
      padding: `60px 14%`,
      [fn.smallerThan("md")]: {
        padding: `60px 40px`,
      },
      [fn.smallerThan("sm")]: {
        padding: `60px 10px`,
      },
      minHeight: "100vh",
    },
  })
)

export type PublicTemplateProps = {
  children: React.ReactNode
  document: {
    title: string
    description?: string
  }
  activeLink?: string
}
export const PublicTemplate: React.FC<PublicTemplateProps> = ({ children, document, activeLink }) => {
  const [sideBarOpened, setSideBarOpened] = useState<boolean>(false)

  const {
    classes,
    theme: { breakpoints },
  } = useStyles({ sideBarOpened })
  const smallerThanMd = useMediaQuery(`(max-width: ${breakpoints.md}px)`)

  return (
    <>
      <Head>
        <title>{document.title}</title>
        <meta name="description" content={document.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={classes.root}>
        <header className={classes.header}>
          <Image
            src={Logo}
            alt="LOGO"
            height={smallerThanMd ? 50 : 75}
          />
          {!smallerThanMd && (
            <Group>
              {navigationConfig.map((el, i) => (
                <Link
                  key={i}
                  buttonStyling
                  to={el.to}
                  active={activeLink == el.label}
                >
                  {el.label}
                </Link>
              ))}
            </Group>
          )}
          {smallerThanMd && (
            <Button
              onClick={() => {
                setSideBarOpened(true)
              }}
              Icon={CgMenuRight}
            />
          )}
        </header>

        <main className={classes.main}>{children}</main>
      </div>

      <div className={classes.sidebar}>
        <Group className={classes.sidebarTop}>
          <Button
            onClick={() => setSideBarOpened(false)}
            Icon={RxCross2}
            square
          />

          <Text
            size="xl"
            weight="lighter"
            color="white"
          >
            Jak tam żyćko?
          </Text>
        </Group>

        <Group className={classes.sidebarList}>
          {navigationConfig.map((el, i) => (
            <Link
              key={i}
              buttonStyling
              to={el.to}
              onClick={() => setSideBarOpened(false)}
              size="xl"
              active={activeLink == el.label}
            >
              {el.label}
            </Link>
          ))}
        </Group>
      </div>
    </>
  )
}
