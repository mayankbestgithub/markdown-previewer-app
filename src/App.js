
import { Editor } from './Features/editor/Editor';
import { Preview } from './Features/preview/Preview';
import { useSelector } from 'react-redux';
import { getContent } from './Features/editor/editorSlice';
import "./App.css";

function App() {
  const textcontent = useSelector(getContent);
  return (
    <div className='App'>
      <Editor></Editor>
      <Preview content={textcontent}></Preview>
    </div>
  );
}

export default App;
