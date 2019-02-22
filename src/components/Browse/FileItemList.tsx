import React from 'react';
import { FileItemListProps } from './browseInterfaces';
import FileItem from './FileItem';
import './FileItemList.css';

export default class FileItemList extends React.Component<FileItemListProps, any> {
  constructor(props: FileItemListProps) {
    super(props);
  }

  render() {
    const fileItemList = this.props.fileIndexes.map(fileIndex => {
      return (<FileItem 
        fileIndex = {fileIndex}
        key = {fileIndex.path} 
      />)
    });
    
    return (
      <div className='file-item-list'>
        {fileItemList}
      </div>
    );
  }
}
