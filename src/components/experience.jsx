import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import SkillCards from './experince_cards';



const ExperienceSection = (props) => {
  return (
    <section id="experience" className="py-5 bg-light">
      <Container>
        <div className="text-center mb-4">
          <p className="text-muted">Explore My</p>
          <h2 className="fw-bold">Experience</h2>
        </div>

        <Row>
          <Col md={6} className="mb-4">
            <Card className="h-100 shadow-sm rounded-4">
              <Card.Body>
                <Card.Title className="text-center fw-bold mb-4">
                  IT Skills
                </Card.Title>
                <SkillCards/>, 
              </Card.Body>
            </Card>
          </Col>

          {/* Backend */}
          <Col md={6} className="mb-4">
            <Card className="h-100 shadow-sm rounded-4">
              <Card.Body>
                <Card.Title className="text-center fw-bold mb-4">
                  Non IT Skills
                </Card.Title>
                
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};



export default ExperienceSection;
