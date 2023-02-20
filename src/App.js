import { useRef, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';

// import our internal Component
import JobList from './Components/JobList';

function App() {

  const inputRef = useRef(null);
  const [searchQuery, setQuery] = useState(""); // none by default.

  const updateQuery = () => {
    setQuery(inputRef.current.value);
  }

  return (
    <Container fluid="md">
        <Stack gap={3}>
            <h1>Please write the job title in the box below to get more accurate results.</h1>
            <div>
                <label>
                    Query <input ref={inputRef} type="text" onChange={updateQuery}/>
                </label>
            </div>
            <JobList query={searchQuery}/>
            <h1 style={{ textAlign: 'center' }}>Made by Nabsi - <a style={{ textDecoration: 'none' }} href="https://github.com/NabsiYa/">Github</a></h1>
        </Stack>
    </Container>
  );
}

export default App;
