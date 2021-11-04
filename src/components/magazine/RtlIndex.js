import React from "react";
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
  makeStyles,
  useTheme,
  Container,
  SvgIcon,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import FirstSec from "./FirstSec";
import OwlC from "./OwlC";
import FooterMag from "./footerMag";
import MagCard3 from "./MagCard3";
import Pagination from "@material-ui/lab/Pagination";
import ColomnA from "./columnA";
//import GlitchClip from "react-glitch-effect/core/Clip";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
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
      marginRight: drawerWidth,
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
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
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
function RtlIndex(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div dir="rtl">
      <div className={classes.toolbar} />
      <Divider className={classes.devid} />
      <List>
        {[
          "مقاله جدید",
          "علم و تکنولوژی",
          "بازی های کامپیوتری",
          "استایل زندگی",
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
        {["خانه", "ثبت نام", "ورود"].map((text, index) => (
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
    <div dir="rtl">
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
              anchor={theme.direction === "rtl" ? "right" : "right"}
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
              anchor="right"
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Container maxWidth="lg" className={classes.container}>
            <FirstSec />
            <div dir="ltr">
              <OwlC />
            </div>

            {/* <GlitchClip onHover={true}></GlitchClip> addin for code box*/}
            <ColomnA />
            {/* <CardLine /> */}

            <div>
              <MagCard3 />
              <MagCard3 />
              <MagCard3 />
              <MagCard3 />
            </div>
            <div className={classes.paging}>
              <Pagination count={10} variant="outlined" color="primary" />
            </div>
          </Container>
          <FooterMag />
        </main>
      </div>
    </div>
  );
}

RtlIndex.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default RtlIndex;
