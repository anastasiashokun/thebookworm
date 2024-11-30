import React from 'react';
import { AppBar, Container, Typography, Link, List, ListItem, ListItemText, Divider,  Grid } from '@mui/material';
import Routes from '../../../hooks/router/routes.enum';

const genresArr = [
  {title: 'Detectives', url: Routes.Detectives }, 
  {title: 'Horror', url: Routes.Horror },
  { title: 'Romance', url: Routes.Romance }, 
  { title: 'Psychology', url: Routes.Psychology }, 
  { title: 'Fantasy', url: Routes.Fantasy}
  ];


const Footer: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#9d8376', paddingTop: '30px', paddingBottom: '20px', alignItems: 'left'}}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Josefin Sans', fontWeight: 'bold' }}>
              About the Developer
            </Typography>
            <Divider sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)', marginBottom: 2 }} />
            <List >
              <ListItem>
                <ListItemText 
                  primary="Email:" 
                  secondary={
                    <Link href="mailto:developer@example.com" color="inherit">
                      nastyashokun@gmail.com
                    </Link>
                  }
                  sx={{ color: '#fff', fontFamily: 'Josefin Sans' }} 
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Phone:" 
                  secondary={
                    <Link href="tel:+1234567890" color="inherit">
                      +380955157151
                    </Link>
                  }
                  sx={{ color: '#fff', fontFamily: 'Josefin Sans' }} 
                />
              </ListItem>
            </List >
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Josefin Sans', fontWeight: 'bold' }}>
              Book Genres
            </Typography>
            <Divider sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)', marginBottom: 2 }} />
            <List >
            
               {genresArr.map((genresArr) => (
                <ListItem sx={{padding: 0}}>
                <ListItemText 
                  primary={
                    <Link href={genresArr.url} color="inherit">
                      {genresArr.title}
                    </Link>
                  } 
                  sx={{ color: '#fff', fontFamily: 'Josefin Sans', paddingTop: '-5px', paddingBottom: '-5px' }} 
                />
              </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
        <Typography 
          variant="body2" 
          color="textSecondary" 
          align="center" 
          sx={{ mt: 4, fontFamily: 'Josefin Sans' }}
        >
          &copy; 2024 Your Company. All rights reserved.
        </Typography>
      </Container>
    </AppBar>
  );
};

export default Footer;
