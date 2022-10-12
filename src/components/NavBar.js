import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'All', label: 'All' },
  { value: 'Completed', label: 'Completed' },
  { value: 'Uncompleted', label: 'Uncompleted' },
];

const NavBar = ({ unCompletedTodos, filterTodos, status, setStatus, selectedOption, onChange }) => {
  
  if (!unCompletedTodos) return <h2>set your today todos</h2>;
  return (
    <header>
      <span>{unCompletedTodos} </span>
      <h2>are not complated</h2>

      <Select onChange={onChange} value={selectedOption} options={options} className="selectOption"/>

    </header>
  );
};

export default NavBar;
