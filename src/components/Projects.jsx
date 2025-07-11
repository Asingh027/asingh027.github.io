import React from 'react';
import { FaGithub, FaMapMarkedAlt, FaComments, FaScroll, FaDrumSteelpan } from 'react-icons/fa';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import projects from '../projects.json';

const LeftStyledLink = styled(Link)`
  margin: 0 20px;
  font-size: 20px;
  color: white;
  text-decoration: none;
  transition: transform 0.3s;
  position: fixed;
  display: flex;
  top:50%;
  left: 0; 

  transform: translateY(0);
  
  a {
    margin: 0 20px;
    font-size: 35px;
    color: white;
    text-decoration: none;
    transition: transform 0.3s;
    top: 5%;

    &:hover {
      transform: scale(1.2);
    }

    @media (max-width: 600px) {
      position: sticky;
      top: 10px;
      margin: 0 10px;
    }
  }
`;

const RightStyledLink = styled(Link)`
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
    top: 5%;

    &:hover {
      transform: scale(1.2);
    }

    @media (max-width: 600px) {
      position: sticky;
      top: 10px;
      margin: 0 10px;
    }
  }
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  font-size: 2.5em;
  color: #fff; // White color for the title
`;

const ProjectsContainer = styled.div`
  background-color: #000; // Dark background
  color: #fff;
  padding: 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const ProjectCard = styled.div`
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

const ProjectTitle = styled.h2`
  margin-top: 0;
  
  .project-icon{
    vertical-align: text-bottom;  
    margin-right: 5px;
  }
`;

const ProjectSkills = styled.div`
  margin: 1rem 0;
`;

const Skill = styled.span`
  display: inline-block;
  background: #333;
  color: #fff;
  border-radius: 4px;
  padding: 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`;

const ProjectDetailsList = styled.ul`
  list-style-type: disc; // This will create bullet points
  padding-left: 20px; // This gives space for the bullets outside the content area
`;

const ProjectDetail = styled.li`
  color: #bbb;
  &:not(:last-child) {
    margin-bottom: 0.5rem; // Adds spacing between the bullet points if needed
  }
`;
const RepoLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-top: 1rem;
  display: inline-flex;
  align-items: center;
  svg {
    margin-right: 0.5rem;
  }
  &:hover {
    color: #ccc;
  }
`;

const ArticleLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-top: 1rem;
  display: inline-flex;
  align-items: right;
  svg {
    margin-right: 0.5rem;
  }
  &:hover {
    color: #ccc;
  }
`;


const getIcon = (iconName) => {
  switch (iconName) {
    case "comments":
      return <FaComments className = "project-icon" size="1.5em" />;
    case "map-signs":
      return <FaMapMarkedAlt className = "project-icon" size="1.5em" />;
    case "utensils":
      return <FaDrumSteelpan className = "project-icon" size="1.5em" />
    default:
      return null; // or any default icon if needed
  }
}

function Projects() {
  return (
    <ProjectsContainer>
      <Title>Projects</Title>
      {projects.map((project, index) => (
        <ProjectCard key={index}>
          <ProjectTitle> {getIcon(project.icon)} {project.name} </ProjectTitle>
          <ProjectSkills>
            {project.skills.map((skill, skillIndex) => (
              <Skill key={skillIndex}>{skill}</Skill>
            ))}
          </ProjectSkills>
          <ProjectDetailsList>
            {project.details.map((detail, detailIndex) => (
              <ProjectDetail key={detailIndex}>{detail}</ProjectDetail>
            ))}
          </ProjectDetailsList>
          {project.repo_link ? (
            <RepoLink href={project.repo_link} target="_blank" rel="noopener noreferrer">
              <FaGithub size="1.5em" />
              GitHub Repo - Take a look under the hood!
            </RepoLink>
          ) : (
            <RepoLink as="span">
              <FaGithub size="1.5em" />
              GitHub Repo - Not Currently Available :(
            </RepoLink>
          )}
          <br/>
          <ArticleLink target = "_blank" href={project.article} rel="noopener noreferrer"><FaScroll size="1.5em" border = "20px"></FaScroll>Article Link - Find out more here!</ArticleLink>
        </ProjectCard>
      ))}
      <LeftStyledLink to="/">← Back</LeftStyledLink>
      <RightStyledLink to="/allprojects">All Projects →</RightStyledLink>
    </ProjectsContainer>
  );
}

export default Projects;
