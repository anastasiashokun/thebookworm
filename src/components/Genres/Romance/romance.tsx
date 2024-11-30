
import React from 'react';
import { Container, Typography, Box, Grid, Card, CardMedia, CardContent,} from '@mui/material';
import BasicModal from '../../Modal/modal';


const RomancePage: React.FC = () => {

  const books = [
    { title: 'Pride and Prejudice', author: 'Jane Austen', imageUrl: 'https://imgur.com/CHPKOwS.png' },
    { title: 'The Notebook', author: 'Nicholas Sparks', imageUrl: 'https://imgur.com/bNyc3Ew.png' },
    { title: 'Outlander', author: 'Diana Gabaldon', imageUrl: 'https://imgur.com/jdUtGHz.png' },
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
          backgroundImage: 'url(https://imgur.com/bhs31DW.png)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          opacity: 0.25,
         
        }}
      />
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Josefin Sans', fontWeight: 'bold' }}>
        Romance Books
                </Typography>
        <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Josefin Sans', marginBottom: 4 }}>
        Immerse yourself in tales of love and passion with our delightful collection of romance novels. From timeless classics to contemporary love stories, explore the emotions and adventures that come with falling in love. Experience the joy, heartbreak, and ultimate triumph of love through characters and plots that will capture your heart and imagination.        </Typography>
        
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

export default RomancePage;
