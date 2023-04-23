import './AnimatedTabs.css';
import cls from 'classnames';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Titles = ['First', 'Second', 'Third', 'Long text to test'];

export interface TabProps {
  title: string;
  active: boolean;
  onClick: () => void;
}

export const Tab = ({ title, active, onClick }: TabProps) => (
  <li className={cls('tab-item', { active })} onClick={onClick}>
    {active ? (
      <motion.div
        layoutId="test-me"
        className="active"
        style={{ borderRadius: 999 }}
        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
      />
    ) : null}
    <span className="label">{title}</span>
  </li>
);

export const AnimatedTabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <ul className="animated-tabs">
      {Titles.map((title, index) => (
        <Tab
          key={title}
          title={title}
          active={index === activeIndex}
          onClick={() => setActiveIndex(index)}
        />
      ))}
    </ul>
  );
};
