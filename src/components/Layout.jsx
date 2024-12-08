import React, { useState } from "react";
import Editor from "./Editor";
import FileTree from "./FileTree";
import Terminal from "./Terminal";

const Layout = () => {
  const [treeData, setTreeData] = useState({
    name: "project",
    children: [
      {
        name: "src",
        children: [
          {
            name: "App.js",
            url: "src/App.js",
            _id: 1,
            checked: 0,
          },
          {
            name: "Editor.jsx",
            url: "src/Editor.jsx",
            _id: 2,
            checked: 0,
          },
        ],
      },
      {
        name: "public",
        children: [
          {
            name: "index.html",
            url: "public/index.html",
            _id: 3,
            checked: 0,
          },
        ],
      },
    ],
  });

  const [code, setCode] = useState("// Write your code here");
  const [language, setLanguage] = useState("javascript");
  const [selectedNode, setSelectedNode] = useState(null);

  const onNameClick = (node) => {
    setSelectedNode(node);
    console.log(node);
    if (node.nodeData.url) {
      setCode(`// ${node.nodeData.url}`);
    }
  };

  // Handle tree structure change
  const onTreeChange = (state, event) => {
    // console.log(state, event);
  };

  return (
    <div style={{ display: "flex" }}>
      hello
      <div className="layout">
        <FileTree
          data={treeData}
          onChange={onTreeChange}
          onNameClick={onNameClick}
        />
        <Editor language={language} code={code} setCode={setCode} />
        <Terminal />
      </div>
    </div>
  );
};

export default Layout;
