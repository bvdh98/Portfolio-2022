import React from "react";
import { Card, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import "./Home.css";

const Home = () => {
  const linkedIn = "https://www.linkedin.com/in/bencompsoft/";
  const gitHub = "https://github.com/bvdh98";
  const email = "mailto:benharrison7049@gmail.com";

  return (
    //add proper margin, height and padding bootstrap classes
    <div className="row pl-0 pr-0">
      <Col xs={5} id="left_column" className="p-0">
        <section className="info_section">
          <p className="display-4">Ben Harrison</p>
          <p>Software Developer</p>
          <div className="social_container mb-4 mt-4">
            <a href={linkedIn}>
              <Icon icon="akar-icons:linkedin-box-fill"/>
            </a>
            <a href={gitHub}>
              <Icon icon="akar-icons:github-fill" />
            </a>
            <a href={email}>
              <Icon icon="carbon:email" />
            </a>
          </div>
          <a>Resume</a>
        </section>
      </Col>
      <Col xs={7} id="right_column" className="p-0">
        <section className="work_section">
          <Col xs={10}>
            <p className="display-6 projects_para">Projects:</p>
            <Card>
              <Card.Header>
                Web Development
                <Icon icon="ic:baseline-arrow-drop-down-circle" />
              </Card.Header>
            </Card>
            <Card>
              <Card.Header>
                Games<Icon icon="ic:baseline-arrow-drop-down-circle" />
              </Card.Header>
            </Card>
          </Col>
        </section>
      </Col>
    </div>
  );
};

export default Home;
