import React from "react";
import MonacoEditor from "@monaco-editor/react";

const Editor = ({ language, code, setCode }) => {
  return (
    <div className="editor">
      <MonacoEditor
        height="500px"
        language={language}
        value={code}
        onChange={(value) => setCode(value)}
        theme="vs-dark"
      />
    </div>
  );
};

export default Editor;
