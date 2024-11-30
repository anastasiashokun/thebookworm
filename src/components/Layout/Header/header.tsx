import React from 'react';
import { AppBar, Box, Toolbar, IconButton, Container, Typography, Link,  Menu, MenuItem,
  Tooltip } from '@mui/material';
import Routes from '../../../hooks/router/routes.enum';
import {  useNavigate } from 'react-router-dom';

const settings = [
  {title: 'Detectives', url: Routes.Detectives },
  { title: 'Horror', url: Routes.Horror }, 
  { title: 'Romance', url: Routes.Romance }, 
  { title: 'Psychology', url: Routes.Psychology }, 
  { title: 'Fantasy', url: Routes.Fantasy}
];

function Header() {
  const navigate = useNavigate()
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSelect = (url: string) => {
    navigate(url)
    handleCloseUserMenu();
  };

  return (
   
    <AppBar position="static" sx={{ backgroundColor: '#9d8376' }}>
       
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Josefin Sans',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            
            }}
          >
            <img src="https://imgur.com/vI5GUlO.png" alt="THE BOOKWORM" width={'40px'} height={'37px'} style={{borderRadius: '40px'}} />
          </Typography>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex' },
              flexGrow: 1,
              fontFamily: 'Josefin Sans',
              fontWeight: 1000,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            THE BOOKWORM
          </Typography>
          <Box sx={{  position: 'relative', mr: '920px', pr: '50px'}}>
              <Link
                sx={{  color: '#433120', display: 'block',  fontFamily: 'Josefin Sans', fontWeight: 700, fontSize: 20, }}
                href={Routes.Home}
              >
              HOME              
              </Link>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, fontFamily: 'Josefin Sans', fontWeight: 700, fontSize: 20 } }>
                GENRES
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.title} onClick={() => handleSelect(setting.url)}>
                  <Typography sx={{ textAlign: 'center' }}>{setting.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;


