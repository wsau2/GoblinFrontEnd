import React, { useState } from "react";
import Webcam from "react-webcam";



const About = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
        <h1>About Us</h1>
        <h2>Will Saulnier:</h2>
        <p>
            My pronouns are he/him.
            Hi, I'm Will a junior computer science major at Umass Amherst. 
            I'm excited to attend my first HackUmass XI 
            which is my first hackathon. I'm experienced in java, python, javascript,
            typescript, c, and advanced proficiency in ChatGPT. 
            Fun fact about me is I can juggle on a unicycle. 
        </p>
        <h2>Brandon Saulnier:</h2>
        <p>
            My pronouns are he/him. Hi, I'm Brandon a junior computer science major 
            at Umass Amherst. I'm excited to attend my first HackUmass XI, I did Hackher before this. 
            I'm experienced in python, javascript, typescript, advanced proficiency in ChatGPT and arts and crafts. 
            Fun fact about me: I'm a cat lover. I dislike dogs
        </p>
        <h2>Pablo Ghezzi:</h2>
        <p>
            My pronouns are he/him. Hi, I'm Pablo a junior computer science major at Umass Amherst.
            I'm experienced in python, javascript, c, typescript. java c++, rust, html, matlab, css
            typescript and advanced proficiency in ChatGPT . I'm a very accomplished computer
            science student and Identify as a genius. 
            Fun fact about me: I love doing homework early.
        </p>
        <h2>Ali Huangz:</h2>
        <p>
            My pronouns are he/him.
            Hi, I'm Ali a Senior computer science major at Umass Amherst.
            I'm excited to attend HackUmass XI.I'm experienced in python, javascript, java
            typescript, 3D computer graphics with three.js, c, and adobe photoshop, adobe afterworks,
            adobe illustrator, cinema4D.
            and intermediate proficiency in ChatGPT. 
            Fun Fact about me: This is my 2nd HackUmass.

        </p>
    </div>
  );
};

export default About;
