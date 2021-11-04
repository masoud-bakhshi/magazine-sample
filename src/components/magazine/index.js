import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Container,
  SvgIcon,
  makeStyles,
  useTheme,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import FirstSec from "./FirstSec";
import OwlC from "./OwlC";
import FooterMag from "./footerMag";
import MagCard3 from "./MagCard3";
import Pagination from "@material-ui/lab/Pagination";
import ColomnA from "./columnA";
import ThemeProvider from "../../Material/PrimaryColor";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: theme.spacing(0),
    // marginLeft: theme.spacing(0),
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for 22content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    // position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    background: "#112233",
    color: "#fff",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    flexGrow: 1,
    background: "#3b4457",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: 2,
    paddingRight: 2,
  },
  devid: {
    background: "#fff",
    color: "#fff",
  },
  content3: {
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    flexGrow: 1,
    padding: theme.spacing(3),
    maxWidth: 1280,
    background: "#112233",
  },
  paging: {
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    marginTop: theme.spacing(2),
  },
}));
function Description(props) {
  return (
    <SvgIcon {...props}>
      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
    </SvgIcon>
  );
}
function Work(props) {
  return (
    <SvgIcon {...props}>
      <path d="M18 1.01L8 1c-1.1 0-2 .9-2 2v3h2V5h10v14H8v-1H6v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM10 15h2V8H5v2h3.59L3 15.59 4.41 17 10 11.41z" />
    </SvgIcon>
  );
}
function Magazine(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const dataR3 = [
    {
      title: "Live from DevCodeBase",
      text: "Bitcoin’s market cap of $1 trillion makes it too important to ignore. As long as asset managers and companies continue to enter the market, bitcoin prices could continue to rise.",
      writer: "Masoud Bakhshi",
    },
    {
      title: "Live from DevCodeBase",
      text: "Starlink is now delivering initial beta service both domestically and internationally, and will continue expansion to near global coverage of the populated world in 2021.",
      writer: "Masoud Bakhshi",
    },
  ];
  // useEffect(() => {
  //   // window.scrollTo({
  //   //   top: 0,
  //   //   behavior: "smooth",
  //   // });
  //   scroll({ y: 0, smooth: true });
  // }, []);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider className={classes.devid} />
      <List>
        {[
          "New Article",
          "Sience & Technology",
          "Developer Code",
          "Developer Community",
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? (
                <Description style={{ color: "#fff" }} />
              ) : (
                <Description style={{ color: "#fff" }} />
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <Divider className={classes.devid} />
      <List>
        {["Home", "Sign up", "Sign In"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? (
                <Work style={{ color: "#fff" }} />
              ) : (
                <Work style={{ color: "#fff" }} />
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <ThemeProvider>
      <div>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
              <img src="./devlogo.png" alt="bug" height={30} />
              <Typography variant="h6" noWrap>
                DevCodeMag
              </Typography>
            </Toolbar>
          </AppBar>
          <nav className={classes.drawer} aria-label="mailbox folders">
            <Hidden smUp implementation="css">
              <Drawer
                container={container}
                variant="temporary"
                anchor={theme.direction === "rtl" ? "right" : "left"}
                open={mobileOpen}
                onClose={handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper,
                }}
                ModalProps={{
                  keepMounted: true,
                }}
              >
                {drawer}
              </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
              <Drawer
                classes={{
                  paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
              >
                {drawer}
              </Drawer>
            </Hidden>
          </nav>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Container maxWidth="lg" className={classes.container}>
              <FirstSec />

              <OwlC />
              {/* <GlitchClip onHover={true}></GlitchClip> addin for code box*/}
              <ColomnA />
              {/* <CardLine /> */}

              {dataR3.map((data) => (
                <div key={data.title}>
                  <MagCard3 {...data} />
                </div>
              ))}

              <div className={classes.paging} style={{ marginBottom: "10px" }}>
                <Pagination count={10} variant="outlined" color="primary" />
              </div>
              <FooterMag />
            </Container>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

Magazine.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Magazine;
