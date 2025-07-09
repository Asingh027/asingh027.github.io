import React from 'react';
import { Link } from 'react-router-dom';
import styled, {keyframes} from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import profPic from '../images/profpic.png';

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-30px);
  }
`;

// Styled Components
const ContactBox = styled.div`
  margin-top: 10px; // Space between icons and contact box
  padding: 15px;
  color: white;
  text-align: center;
`;

const ContactText = styled.p`
  margin: 1px; // Remove default margin
  font-size: 1.4em;
  a {
    color: white;
    margin: 10px;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: gray;
    }
  }
`;

const HomeContainer = styled.div`
  height: 100vh; // Full viewport height
  display: flex;
  flex-direction: column;
  justify-content: center; // Vertically center
  align-items: center; // Horizontally center
  position: relative; // Relative positioning for navigation links
  background-color: black; // Optional: Set a background color
  animation: ${float} 10s ease-in-out infinite;
`;

const ProfileImage = styled.img`
  height: 300px;
  border-radius: 50%;
  opacity: 1;

  @media (max-width: 600px) {
    height: 120px;
  }
`;

const SocialLinks = styled.div`
  margin-top: 20px; // Space between name and icons

  a {
    color: white;
    margin: 10px;
    text-decoration: none;
    font-size: 28px;
    transition: color 0.3s;

    &:hover {
      color: gray;
    }
  }
`;

const Title = styled.div`
  margin: 0 20px;
  font-size: 35px;
  color: white;
  text-decoration: none;
  transition: transform 0.3s;
`

const Navigation = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  top:50%;
  left: 0; // Align to the left edge
  right: 0; // Align to the right edge
  transform: translateY(0);

  a {
    margin: 0 20px;
    font-size: 35px;
    color: white;
    text-decoration: none;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.2);
    }

    @media (max-width: 600px) {
      margin: 0 10px;
      display: flex;
      font-size: 20px;
      align-items: flex-end;
      height: 320px;

      &:hover {
      transform: scale(1);
    }
    }
  }
`;

function Home() {
  return (
    <HomeContainer>
      <ProfileImage src={profPic} alt="Profile Picture"/>
      <Title>Avneet Singh</Title>
      <ContactBox>
        <ContactText>Software Engineer @<a href="https://ves.solutions">VES Solutions</a></ContactText>
        <ContactText>Resume available upon request</ContactText>
      </ContactBox>
      <SocialLinks>
        <a href="mailto:avneetsingh.007@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com/in/avneetsinghurl" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Asingh027" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </SocialLinks>
      <Navigation>
        <Link to="/career">← Career History</Link>
        <Link to="/projects">Projects →</Link>
      </Navigation>
    </HomeContainer>
  );
}

export default Home;
