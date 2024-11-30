
import React from 'react';
import '../Home/home.css'
import { IonIcon } from '@ionic/react';
import { logoDiscord, logoTwitter, logoFacebook } from 'ionicons/icons'; 

const HomePage: React.FC = () => {
  return (
        <div className='main'>
       <div className="home-container">
         <h1 className="animated-title">The forum</h1>
         <div className='main-content'>
         <div className="content-block">
           <img src="https://imgur.com/amxPfvg.png" alt="Book" className="book-image" />
           <div className="text-block">
             <p>A forum is an online platform or place where people can discuss various topics, ask questions, share information and experiences, and get answers and advice from other participants. A forum is usually structured in the form of topics (threads) where each user can post a comment or reply.</p>
           </div>
         </div>
         <div className="content-block diagonal reverse">
           <img src="https://imgur.com/K0uMnTH.png" alt="Book" className="book-image" />
           <div className="text-block">
             <p>The book forum is a great opportunity to share your thoughts and suggestions about the books you've read, as well as to find something for yourself.</p>
           </div>

           </div>
           </div>
          

           <div className='wrapper-talk'>
           <div className="wrapper">
   
          <h2 className="h2">Let's Talk</h2>

            <p>
            Do you want to learn more about how I can help your company overcome problems? Let us have a
            conversation.
           </p>

          <div className="social-link">

          <div className='icon-box discord'>
          <a href="https://discord.com" className="icon-box discord" target="_blank" rel="noopener noreferrer"> 
          <IonIcon icon={logoDiscord} /> 
          </a>
          </div>

          <div className='icon-box twitter'>
          <a href="https://twitter.com" className="icon-box twitter" target="_blank" rel="noopener noreferrer"> 
          <IonIcon icon={logoTwitter} /> 
          </a>
         </div>

         <div className='icon-box facebook'>
         <a href="https://facebook.com" className="icon-box facebook" target="_blank" rel="noopener noreferrer">
         <IonIcon icon={logoFacebook} />
         </a>
        </div>

         </div>
       </div>
       </div>

       
       <div className="tags">

       <div className="wrapper">

       <button className="hashtag">#forums</button>
       <button className="hashtag">#bookforums</button>
       <button className="hashtag">#detectives</button>
       <button className="hashtag">#romance</button>
       <button className="hashtag">#fantasy</button>
       <button className="hashtag">#psychology</button>
       <button className="hashtag">#horror</button>

      </div>

      </div>
       </div>
       </div>
   
  );
};
  
export default HomePage;
