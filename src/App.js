import { useRef, useState } from 'react';
import JobList from './Components/JobList';

function App() {

  const inputRef = useRef(null);
  const [searchQuery, setQuery] = useState(""); // none by default.

  const updateQuery = () => {
    setQuery(inputRef.current.value);
  }
  
  return (
    <div>
      <input ref={inputRef} type="text" onChange={updateQuery}/>
      <JobList query={searchQuery}/>
    </div>
  );
}

export default App;
