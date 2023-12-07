import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";

const About = () => {
  return (
    <section style={{marginTop: '40px'}}>
      <div style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', paddingBottom: '40px'}}>
        <h1 style={{padding: '20px', fontSize: '30px'}}>Про нас</h1>
        
        <p style={{padding: '20px', fontSize: '20px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis et error laborum magni ea obcaecati fuga quae? Officiis, repellendus illo consequuntur sed doloremque repellat vero fugiat quam in magni aliquam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti iure architecto labore! Optio, velit facere, odit ipsa laborum commodi a eius delectus illo quam facilis possimus nobis maiores fugit iste.
        </p>
        <p style={{padding: '20px', fontSize: '24px', fontWeight: 'bold'}}>(063) 135 35 52</p>
        <div className="icons">
          <a href="https://www.facebook.com/petro.zabila?locale=uk_UA"><FacebookIcon /></a>
          <a href="https://www.instagram.com/petro_zabila/"><InstagramIcon /></a>
          <a href="https://www.facebook.com/petro.zabila?locale=uk_UA"><TwitterIcon /></a>
          <a href="https://www.facebook.com/petro.zabila?locale=uk_UA"><PinterestIcon /></a>
        </div>
      </div>

    </section>
    
  );
};

export default About;
