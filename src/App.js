import React, { useState } from 'react';
import { Editor } from '@toast-ui/react-editor';

const App = () => {
  const [state, setState] = useState('contentFromServer');
  return (
    <>
      <Editor
        initialValue={state}
        language="ru-RU"
        minHeight="fit-content"
        placeholder="Введите значение"
        height="auto"
        initialEditType="wysiwyg"
        hideModeSwitch={true}
        usageStatistics={false}
      />

      <button
        onClick={() => {
          setState('hello');
        }}
      >
        Hello
      </button>
    </>
  );
};

export default App;
