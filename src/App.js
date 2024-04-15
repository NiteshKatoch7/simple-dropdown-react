import styled from 'styled-components';
import './App.css';
import Dropdown from './Dropdown';

// Dropdown Component
export default function App() {

  // Items Array : All items that we want to show inside our dropdown
  const items = [
    'Yes',
    'Probably not'
  ];

  return (
    // Dropdown Container
    <DropdownContainer>
      <h1>
        Should you use a dropdown?
      </h1>
      <Dropdown items={items} /> 
    </DropdownContainer>
  );
}

// Applying custom styling to Dropdown container
const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 16px 0;
  padding: 30px;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  background-color: #ffffff;

  h1{
    margin: 6px 0;
  }
`;