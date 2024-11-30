
import React from 'react';
import { Container, Typography, Box, Grid, Card, CardMedia, CardContent,} from '@mui/material';
import BasicModal from '../../Modal/modal';


const HorrorPage: React.FC = () => {

  const books = [
    { title: 'The Exorcist', author: 'William Peter Blatty', imageUrl: 'https://imgur.com/R923ozp.png' },
    { title: 'It', author: 'Stephen King', imageUrl: 'https://imgur.com/jo2RtPI.png' },
    { title: 'The Haunting of Hill House', author: 'Shirley Jackson', imageUrl: 'https://imgur.com/EnMLAkn.png' },
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
          backgroundImage: 'url(https://imgur.com/6ZVQt3R.png)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          opacity: 0.25,
         
        }}
      />
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Josefin Sans', fontWeight: 'bold' }}>
        Horror Books
                </Typography>
        <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Josefin Sans', marginBottom: 4 }}>
        Delve into the chilling world of horror with our curated selection of spine-tingling novels. From the eerie classics to modern-day fright fests, explore stories that will haunt your dreams and keep you awake at night.
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

export default HorrorPage;
