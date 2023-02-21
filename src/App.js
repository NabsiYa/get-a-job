import { useRef, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';

// import our internal Component
import JobList from './Components/JobList';

function App() {

  const inputRef = useRef(null);
  const [searchQuery, setQuery] = useState(""); // none by default.

  const updateQuery = () => {
    setQuery(inputRef.current.value);
  }

  const searchRef = useRef(null);
  const [searchFilter, setFilter] = useState("0");

  const updateFilter = () => {
    setFilter(searchRef.current.value);
  }

  return (
    <Container fluid="md">
        <Stack gap={3}>
            <Form.Label>Query</Form.Label>
            <Form.Control ref={inputRef} type="text" onChange={updateQuery} placeholder="Enter the task here..." />
            <Form.Label>Filter</Form.Label>
            <Form.Select aria-label="Default select example" ref={searchRef} onChange={updateFilter}>
                <option value="0">Organization</option>
                <option value="1">Profession</option>
                <option value="2">Task</option>
                <option value="3">Address</option>
            </Form.Select>
            <JobList query={searchQuery} filter={searchFilter}/>
            <Form.Text style={{ textAlign: 'center' }}>Made by <a style={{ textDecoration: 'none' }} href="https://github.com/NabsiYa/">Nabsi</a></Form.Text>
        </Stack>
    </Container>
  );
}

export default App;
