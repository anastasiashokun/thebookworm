
import React from 'react';
import { Container, Typography, Box, Grid, Card, CardMedia, CardContent,} from '@mui/material';
import BasicModal from '../../Modal/modal';


const PsychologyPage: React.FC = () => {

  const books = [
    { title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', imageUrl: 'https://imgur.com/erZw4pp.png' },
    { title: 'Mans Search for Meaning', author: 'Viktor E. Frankl', imageUrl: 'https://imgur.com/ACfSjZv.png' },
    { title: 'The Power of Habit: Why We Do What We Do in Life and Business', author: 'Charles Duhigg', imageUrl: 'https://imgur.com/D6ombI7.png' },
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
          backgroundImage: 'url(https://imgur.com/eOAyPlc.png)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          opacity: 0.2,
         
        }}
      />
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Josefin Sans', fontWeight: 'bold' }}>
          Psychology Books
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Josefin Sans', marginBottom: 4 }}>
        Dive deep into the human mind with our captivating collection of psychology books. From understanding the intricacies of behavior and emotions to exploring the depths of mental health and cognitive processes, these books offer profound insights into what makes us who we are. Embark on a journey of self-discovery and knowledge that will challenge your perceptions and expand your understanding of the human psyche.        </Typography>
        
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

export default PsychologyPage;
