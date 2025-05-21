import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import getITSkills from '../resources/skill_IT_list';

const skills = getITSkills();

// Child component
const SkillItems = ({ name, level }) => (
  <div className="d-flex align-items-center p-2 me-3 mb-3 border rounded shadow-sm" style={{ minWidth: '160px', maxWidth: '200px' }}>
    <FaCheckCircle className="me-2 text-dark" />
    <div>
      <strong>{name}</strong>
      <div className="text-muted" style={{ fontSize: '0.9rem' }}>{level}</div>
    </div>
  </div>
);

// Main component
const SkillCards = () => {
  return (
    <div className="d-flex flex-wrap assist-center justify-content-center">
      {skills.map((item, index) => (
        <SkillItems key={index} name={item.name} level={item.level} />
      ))}
    </div>
  );
};

export default SkillCards;
