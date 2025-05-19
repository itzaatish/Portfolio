import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-5 bg-light">
      <Container>
        <div className="text-center mb-4">
          <p className="text-muted">Explore My</p>
          <h2 className="fw-bold">Experience</h2>
        </div>

        <Row>
          {/* Frontend */}
          <Col md={6} className="mb-4">
            <Card className="h-100 shadow-sm rounded-4">
              <Card.Body>
                <Card.Title className="text-center fw-bold mb-4">
                  Frontend Development
                </Card.Title>
                <Row>
                  <Col xs={6}>
                    <SkillItem name="HTML" level="Experienced" />
                    <SkillItem name="SASS" level="Intermediate" />
                    <SkillItem name="TypeScript" level="Basic" />
                  </Col>
                  <Col xs={6}>
                    <SkillItem name="CSS" level="Experienced" />
                    <SkillItem name="JavaScript" level="Basic" />
                    <SkillItem name="Material UI" level="Intermediate" />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          {/* Backend */}
          <Col md={6} className="mb-4">
            <Card className="h-100 shadow-sm rounded-4">
              <Card.Body>
                <Card.Title className="text-center fw-bold mb-4">
                  Backend Development
                </Card.Title>
                <Row>
                  <Col xs={6}>
                    <SkillItem name="PostgreSQL" level="Basic" />
                    <SkillItem name="Express JS" level="Intermediate" />
                  </Col>
                  <Col xs={6}>
                    <SkillItem name="Node JS" level="Intermediate" />
                    <SkillItem name="Git" level="Intermediate" />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const SkillItem = ({ name, level }) => (
  <div className="d-flex align-items-center mb-3">
    <FaCheckCircle className="me-2 text-dark" />
    <div>
      <strong>{name}</strong>
      <div className="text-muted" style={{ fontSize: '0.9rem' }}>{level}</div>
    </div>
  </div>
);

export default ExperienceSection;
