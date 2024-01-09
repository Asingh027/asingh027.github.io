import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import positions from '../positions.json';
import RackN from '../images/RackN.png';
import BDR from '../images/BDR.png';
import VVH from '../images/VVH.png';

// Styled components
const CareerPage = styled.div`
  padding: 40px;
  background-color: #000; // Black background for the page
  min-height: 100vh;
  color: white;
  text-align: center;
`;

const StyledLink = styled(Link)`
  margin: 0 20px;
  font-size: 20px;
  color: white;
  text-decoration: none;
  transition: transform 0.3s;
  position: fixed;
  display: flex;
  top:50%;
  right: 0;

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
      top:5%;
    }
  }
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  font-size: 2.5em;
  color: #fff; // White color for the title
`;

const CareerHistory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const PositionContainer = styled.div`
  background-color: #222; // Dark gray for the card background
  border-radius: 10px;
  box-shadow: 0 10px 30px -15px rgba(255, 255, 255, 0.3); // White shadow for depth
  padding: 20px;
  width: 100%;
  max-width: 700px;
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-5px);
  }
`;

const PositionHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;

const PositionImage = styled.img`
  height: auto;
  width: 96px; // Adjusted size as per your request
  margin-right: 20px;
  border-radius: 10px;
`;

const PositionTitle = styled.h3`
  font-size: 1.8em;
  color: #ccc;
`;

const PositionDetails = styled.p`
  font-size: 1.1em;
  color: #ccc;
`;

const TaskList = styled.ul`
  list-style-type: disc; // This will create bullet points
  text-align: left;
  color: #ccc;
`;

const Task = styled.li`
  &:before {
    color: #ccc; // Bullet points in teal color
  }
`;

// Function to select the image based on position id or title
const getImageForPosition = (positionTitle) => {
  switch (positionTitle) {
    case 'RackN':
      return RackN;
    case 'BigDataRhino':
      return BDR;
    case 'ViViHealth':
      return VVH;
    default:
      return ''; // Default image or empty string
  }
};

function Career() {
  return (
    <CareerPage>
      <Title>Career History</Title>
      <CareerHistory>
        {positions.map((position) => (
          <PositionContainer key={position.id}>
            <PositionHeader>
              <a href={position.link} target="_blank" rel="noreferrer">
              <PositionImage src={getImageForPosition(position.id)} alt={position.title} /> 
              </a>
              <div>
                <PositionTitle>{position.title}</PositionTitle>
                <PositionDetails>
                  {position.location} — {position.duration}
                </PositionDetails>
              </div>
            </PositionHeader>
            <TaskList>
              {position.tasks.map((task, taskIndex) => (
                <Task key={taskIndex}>{task}</Task>
              ))}
            </TaskList>
          </PositionContainer>
        ))}
        <StyledLink to="/">Back→</StyledLink>
      </CareerHistory>
    </CareerPage>
  );
}

export default Career;
