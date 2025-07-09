import React, { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Utility function to get "time ago" string
function getRelativeTime(updatedAt) {
  const updatedDate = new Date(updatedAt);
  const now = new Date();
  const secondsAgo = Math.floor((now - updatedDate) / 1000);

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
  };

  for (const [unit, seconds] of Object.entries(intervals)) {
    const count = Math.floor(secondsAgo / seconds);
    if (count > 0) {
      return `${count} ${unit}${count !== 1 ? 's' : ''} ago`;
    }
  }

  return 'just now';
}

const StyledLink = styled(Link)`
  margin: 0 20px;
  font-size: 20px;
  color: white;
  text-decoration: none;
  transition: transform 0.3s;
  position: fixed;
  display: flex;
  top: 50%;
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

const Title = styled.h1`
  margin-bottom: 2rem;
  font-size: 2.5em;
  color: #fff;
`;

const ProjectsContainer = styled.div`
  background-color: #000;
  color: #fff;
  padding: 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const ProjectCard = styled.div`
  background-color: #222;
  border-radius: 10px;
  box-shadow: 0 10px 30px -15px rgba(255, 255, 255, 0.3);
  padding: 20px;
  width: 100%;
  max-width: 700px;
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-5px);
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

const Metadata = styled.div`
  font-size: 0.95rem;
  color: #bbb;
  margin-top: 0.5rem;
`;

function AllProjects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/Asingh027/repos')
      .then((response) => response.json())
      .then((data) => {
        const publicRepos = data.filter((repo) => !repo.private);
        setRepos(publicRepos);
      })
      .catch((error) => console.error('Error fetching repos:', error));
  }, []);

  return (
    <ProjectsContainer>
      <Title>All Projects</Title>
      {repos.map((repo, index) => (
        <ProjectCard key={index}>
          <h2>
            <FaGithub className="project-icon" size="1.5em" /> {repo.name}
          </h2>
          <p>{repo.description || 'No description provided.'}</p>

          <Metadata>
            <div><strong>Tech Stack:</strong> {repo.language || 'Not specified'}</div>
            {repo.license && (
              <div><strong>License:</strong> {repo.license.name}</div>
            )}
            <div><strong>Updated:</strong> {getRelativeTime(repo.updated_at)}</div>
          </Metadata>

          <RepoLink href={repo.html_url} target="_blank" rel="noopener noreferrer">
            <FaGithub size="1.5em" /> View Repository
          </RepoLink>
        </ProjectCard>
      ))}
      <StyledLink to="/projects">← Back</StyledLink>
    </ProjectsContainer>
  );
}

export default AllProjects;
