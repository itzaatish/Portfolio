import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import getITSkills from '../resources/skill_IT_list';
import skill_nonIT_list from '../resources/skills_NonIT_list';

const skills = getITSkills();
const skills_nonIT = skill_nonIT_list();

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
export const SkillCards = () => {
  return (
    <div className="d-flex flex-wrap assist-center justify-content-center">
      {skills.map((item, index) => (
        <SkillItems key={index} name={item.name} level={item.level} />
      ))}
    </div>
  );
};

export const SkillCardsNON = () => {
  return (
    <div className="d-flex flex-wrap assist-center justify-content-center">
      {skills_nonIT.map((item, index) => (
        <SkillItems key={index} name={item.name} level={item.level} />
      ))}
    </div>
  );
};


