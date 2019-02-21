import { match } from 'react-router-dom';

export interface FileIndex {
  type: ('directory' | 'text' | 'image' | 'audio' | 'video' | 'binary');
  name: string;
  path: string;
  size: number;
  createdAtMs: Date;
  modifiedAtMs: Date;
}

export interface BrowseProps {
  match: match & {
    params: {
      path: string;
    }
  };
}

export interface BrowseStates {
  fileIndexes: FileIndex[];
}

export interface FileItemProps {
  fileIndex: FileIndex;
  renewFileIndexesState: (directoryPath: string) => void;
}

export interface FileItemListProps {
  fileIndexes: FileIndex[];
  renewFileIndexesState: (directoryPath: string) => void;
}