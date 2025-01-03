import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode, faAngleDoubleRight, faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import supabase from '../utils/supabaseClient'; // Adjust path if necessary
import Image from 'next/image'; // Import Image from Next.js

type Project = {
  id: number;
  title: string;
  description: string;
  image_path: string;
  repo_link: string;
  live_demo_link?: string | null;
};

function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const projectsPerPage = 4;

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from('portfolio') // Table name is 'portfolio'
        .select('*')
        .order('id', { ascending: true }); // Fetch data in ascending order by 'id'

      if (error) {
        console.error('Error fetching projects:', error);
      } else {
        // Custom sort
        const customOrder = [5, 4, 3, 2, 1, 6, 7, 8, 9, 10, 11, 12];
        const sortedProjects = customOrder
          .map((id) => data?.find((project) => project.id === id))
          .filter(Boolean) as Project[];
        setProjects(sortedProjects);
      }
    };

    fetchProjects();
  }, []);

  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section id="portfolio">
      <div className="section-highlight" data-aos="fade-up">
        Portfolio
      </div>
      <div className="portfolio-container" data-aos="fade-up">
        <div className="portfolio-card">
          <div className="portfolio-content">
            <h2>Portfolio</h2>
            <div className="project-container">
              {currentProjects.map((project) => (
                <section className="project-card" key={project.id}>
                  <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
                    <Image
                      className="project-img"
                      src={project.image_path}
                      alt={project.title}
                      layout="fill" // Ensures the image fills the container
                      objectFit="cover" // Controls image scaling
                      loading="lazy" // Enable lazy loading
                    />
                  </div>
                  <h3>{project.title}</h3>
                  <h5>Project Description</h5>
                  <p>{project.description}</p>
                  <div className="project-card-links">
                    <a href={project.repo_link} className="project-link">
                      <FontAwesomeIcon icon={faGithub} className="project-icons" />
                      Repository
                    </a>
                    {project.live_demo_link && project.live_demo_link !== '' && (
                      <a href={project.live_demo_link} className="project-link">
                        <FontAwesomeIcon icon={faLaptopCode} className="project-icons" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </section>
              ))}
            </div>

            <div className="pagination">
              <a
                href="#!"
                onClick={handlePrevious}
                className={currentPage === 1 ? 'disabled' : ''}
              >
                <FontAwesomeIcon icon={faAnglesLeft} />
              </a>
              {[...Array(totalPages)].map((_, index) => (
                <a
                  key={index + 1}
                  href="#!"
                  onClick={() => handlePageClick(index + 1)}
                  className={currentPage === index + 1 ? 'active' : ''}
                >
                  {index + 1}
                </a>
              ))}
              <a
                href="#!"
                onClick={handleNext}
                className={currentPage === totalPages ? 'disabled' : ''}
              >
                <FontAwesomeIcon icon={faAngleDoubleRight} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
