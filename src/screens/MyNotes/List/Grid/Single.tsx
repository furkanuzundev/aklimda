import * as React from 'react';
import { S4 } from './GridItems';

interface SingleProps {
  list: NoteProps[];
}

const Single = ({ list }: SingleProps) => {
  return <S4 {...{ item: list[0] }} />;
};

export default Single;
