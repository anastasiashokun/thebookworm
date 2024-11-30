import React from 'react';
import { Container, Typography, Box, Grid, Card, CardMedia, CardContent,} from '@mui/material';
import BasicModal from '../../Modal/modal';


const DetectivesPage: React.FC = () => {

  const books = [
    { title: 'Sherlock Holmes: The Complete Novels and Stories', author: 'Arthur Conan Doyle', imageUrl: 'https://imgur.com/VHiWZmK.png' },
    { title: 'The Girl with the Dragon Tattoo', author: 'Stieg Larsson', imageUrl: 'https://imgur.com/fE56A0K.png' },
    { title: 'Gone Girl', author: 'Gillian Flynn', imageUrl: 'https://imgur.com/XdZ78fj.png' },
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
          backgroundImage: 'url(https://imgur.com/EIrBrrG.png)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          opacity: 0.2,
         
        }}
      />
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Josefin Sans', fontWeight: 'bold' }}>
          Detective Books
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Josefin Sans', marginBottom: 4 }}>
          Dive into the world of mystery and crime with our selection of detective books. From classic tales of Sherlock Holmes to modern thrillers, discover stories that will keep you on the edge of your seat.
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

export default DetectivesPage;
