import React from "react";
import { Col, Accordion} from "react-bootstrap";
import { WebProjectCollection, otherProjects} from "./ProjectCollection";
import Project from "./Project";
import { Icon } from "@iconify/react";
import resume from "../resume/resume.pdf"
import "./Home.css";

const Home = () => {
  const linkedIn = "https://www.linkedin.com/in/bencompsoft/";
  const gitHub = "https://github.com/bvdh98";
  const email = "mailto:benharrison7049@gmail.com";

  return (
    <div className="row pl-0 pr-0">
      <Col sm={5} id="left_column" className="p-0">
        <section className="info_section">
          <p className="display-4">Ben Harrison</p>
          <p>Software Developer</p>
          <div className="social_container mb-4 mt-4">
            {/* todo: resize icons */}
            <a href={linkedIn}>
              <Icon icon="akar-icons:linkedin-box-fill" />
            </a>
            <a href={gitHub}>
              <Icon icon="akar-icons:github-fill" />
            </a>
            <a href={email}>
              <Icon icon="carbon:email" />
            </a>
          </div>
          <a href={resume} target="_blank" className="resume_link">Resume</a>
        </section>
      </Col>
      <Col sm={7} id="right_column" className="p-0">
        <section className="work_section">
          <Col xs={10}>
            <p className="display-4 projects_para">Projects:</p>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Web Development</Accordion.Header>
                <Accordion.Body>
                  {WebProjectCollection.map(project =>
                    <Project
                      key={project.id}
                      title={project.title}
                      image={project.image}
                      date={project.date}
                      status={project.status}
                      description={project.description}
                      technologies={project.technologies}
                      projectLink={project.projectLink}
                      gitHubLink={project.gitHubLink}
                    />
                  )}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="games_accordion_item">
                <Accordion.Header>Other Projects</Accordion.Header>
                <Accordion.Body>
                  {otherProjects.map(project =>
                    <Project
                      key={project.id}
                      title={project.title}
                      image={project.image}
                      date={project.date}
                      status={project.status}
                      description={project.description}
                      technologies={project.technologies}
                      projectLink={project.projectLink}
                      gitHubLink={project.gitHubLink}
                    />
                  )}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </section>
      </Col>
    </div>
  );
};

export default Home;
