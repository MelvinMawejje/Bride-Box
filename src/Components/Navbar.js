import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MoreIcon from '@mui/icons-material/MoreVert';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Button, Drawer } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Auth from '../Firebase/Authentication/auth';
import { Logout } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';

const pages = [
    {
      pageName: "Home",
      link: "/",
    },
    {
      pageName: "Products",
      link: "/products",
    },
    {
      pageName: "Contact",
      link: "/contact",
    }
  ];
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#B3EA1F",
  '&:hover': {
    backgroundColor: "darkgreen",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function NavBar() {
    const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };
  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {pages.map((page) => (
          <ListItem key={page.link} sx={{ marginTop: "10px" }} disablePadding>
            <Link
              to={page.link}
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItemIcon>
                <ListItemText sx={{marginLeft:"30px"}} primary={page.pageName} />
              </ListItemIcon>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const navigate = useNavigate()

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleLogout = async () => {
    await Auth.logout()
    navigate("/")

  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {Auth.getUser() != null ?
      <>
       <MenuItem onClick={handleLogout}>
       <IconButton
         size="large"
         color="inherit"
       >
         <Logout/>
       </IconButton>
       <p>Log Out</p>
     </MenuItem>
     <MenuItem>
       <IconButton
         size="large"
         color="inherit"
         onClick={() => navigate("/additem")}
       >
         <AddIcon/>
       </IconButton>
       <p>Add Item</p>
     </MenuItem>
     </>
       :
       <Link to="/login">
       <MenuItem>
         <IconButton
           size="large"
           color="inherit"
         >
           <AccountCircleIcon/>
         </IconButton>
         <p>Log In</p>
       </MenuItem>
       </Link>
       }
    </Menu>
  );


  return (
    <Box sx={{ flexGrow: 1 }}>
          <Drawer anchor={"left"} open={state} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
      <AppBar sx={{paddingBottom:{xs:"13px"}, backgroundColor:"#B3EA1F"}} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon sx={{display:{md:"none", xs:"block"}}}/>
          </IconButton>
          <Link to="/">
          <Typography
            variant="h6"
            noWrap
            component="span"
            sx={{ display: { xs: 'none', sm: 'flex' } }}
          >
            {
              //<img style={{height:"30px", marginRight:"10px"}} src="./favicon.png"/>
            }
            HerBrideBoxUg
          </Typography>
          </Link>
          <Box sx={{ flexGrow: 10}}/>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link to={page.link} style={{ textDecoration: "none" }}>
                <Button
                  key={page.pageName}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.pageName}
                </Button>
              </Link>
            ))}
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {Auth.getUser() != null ?
            <>
               <IconButton
               onClick={handleLogout}
               size="large"
               color="inherit"
             >
             <Logout/>
             </IconButton>
              <IconButton
              size="large"
              color="inherit"
              onClick={() => navigate("/additem")}
            >
            <AddIcon/>
            </IconButton>
            </>
             
             :
             <Link to="/login">
             <IconButton
                 size="large"
                 aria-label="show 17 new notifications"
                 color="inherit"
               >
               <AccountCircleIcon />
               </IconButton>
               </Link>
             }
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}