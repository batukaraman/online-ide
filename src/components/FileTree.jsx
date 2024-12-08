import React, { useState } from "react";
import FolderTree from "react-folder-tree";

const FileTree = ({ data, onChange, onNameClick }) => {
  return (
    <div className="file-tree">
      <FolderTree
        data={data}
        onChange={onChange}
        onNameClick={onNameClick}
        showCheckbox={false}
      />
    </div>
  );
};

export default FileTree;
