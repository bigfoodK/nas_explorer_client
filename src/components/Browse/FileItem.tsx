import React from 'react';
import Path from 'path';
import { FileItemProps } from './browseInterfaces';
import { FileIndex } from '../../commonInterfaces';
import { getReadableStringFromByteSize, getLocaleStringFromMs } from '../../commonUtils';
import { Link } from 'react-router-dom'
import './FileItem.css';

export default class FileItem extends React.Component<FileItemProps, any> {
  render() {
    const fileIndex = this.props.fileIndex;
    const url = getProperUrl(fileIndex);

    const fileType = () => {
      return (
        <div className='file-type text-ellipsis'
          title = {fileIndex.type}>
          {getProperTypeIcon(fileIndex)}
        </div>
      )
    }

    const fileName = () => {
      return (
        <div className='file-name text-ellipsis'
          title = {fileIndex.name}>
          {fileIndex.name}
        </div>
      )
    }

    const fileSize = () => {
      const size = getReadableStringFromByteSize(fileIndex.size);
      return (
        <div className='file-size text-ellipsis'
          title = {size}>
          {size}
        </div>
      )
    }

    const fileCreatedAt = () => {
      const date = getLocaleStringFromMs(fileIndex.createdAtMs);
      return (
        <div className='file-createdAt text-ellipsis'
          title = {date}>
          {date}
        </div>
      )
    }

    const fileModifiedAt = () => {
      const date = getLocaleStringFromMs(fileIndex.modifiedAtMs);
      return (
        <div className='file-modifiedAt text-ellipsis'
          title = {date}>
          {date}
        </div>
      )
    }

    return (
      <li className='file-item-container'>
        <Link
          title = {fileIndex.name}
          className = 'file-item'
          to = {url}
        >
        {fileType()}{fileName()}{fileModifiedAt()}{fileCreatedAt()}{fileSize()}
        </Link>
      </li>
    );
  }
}

function getProperUrl(fileIndex: FileIndex) {
  const filePath = fileIndex.path;

  switch(fileIndex.type) {
    case 'directory':
      return Path.join('/explore/browse', filePath);

    case 'text':
      return Path.join('/explore/text', filePath);

    case 'image':
      return Path.join('/explore/image', filePath);

    case 'audio':
      return Path.join('/explore/audio', filePath);

    case 'video':
      return Path.join('/explore/video', filePath);

    default:
      return Path.join('/explore/download', filePath);
  }
}

function getProperTypeIcon(fileIndex: FileIndex) {
  switch(fileIndex.type) {
    case 'directory':
      return <i className = "fas fa-folder" />

    case 'text':
      return <i className = "far fa-file-alt" />

    case 'image':
      return <i className = "fas fa-image" />

    case 'audio':
      return <i className = "fas fa-volume-up" />

    case 'video':
      return <i className = "fas fa-video" />

    default:
      return <i className = "fas fa-file-download" />
  }
}
