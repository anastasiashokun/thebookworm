
import React from 'react';
import { Container, Typography, Box, Grid, Card, CardMedia, CardContent,} from '@mui/material';
import BasicModal from '../../Modal/modal';


const FantasyPage: React.FC = () => {

  const books = [
    { title: 'Six of Crows', author: 'Leigh Bardugo', imageUrl: 'https://imgur.com/KJrU6LK.png' },
    { title: 'The Rage of Dragons ', author: 'Evan Winter', imageUrl: 'https://imgur.com/1qcvbpl.png' },
    { title: 'The Hundred Thousand Kingdoms', author: 'N.K. Jemisin', imageUrl: 'https://imgur.com/GKEFZlY.png' },
  ];

  return (
    <div>
    <Container sx={{ position: 'relative', minHeight: '100vh', padding: '20px', maxWidth: '1500px'}}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(https://imgur.com/hSmMRrz.png)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          opacity: 0.2,
         
        }}
      />
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Josefin Sans', fontWeight: 'bold' }}>
        Fantasy Books
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Josefin Sans', marginBottom: 4 }}>
        Embark on an epic journey into the realm of fantasy with our enchanting collection of novels. From mythical creatures and magical realms to heroic quests and timeless battles, immerse yourself in stories that transport you to worlds beyond imagination. Get lost in the adventure, where anything is possible, and every page unveils a new wonder.


        </Typography>
        
        <Grid container spacing={4}>
          {books.map((book, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ backgroundColor: 'white', borderRadius: '10px' }}>
                <CardMedia
                  component="img"
                  height="350px"
                  width='200px'
                  image={book.imageUrl}
                  alt={book.title}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontFamily: 'Josefin Sans', fontWeight: 'bold', }}>
                    {book.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Josefin Sans' }}>
                    by {book.author}
                  </Typography>
                  <BasicModal/>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
    </div>
  );
};

export default FantasyPage;
