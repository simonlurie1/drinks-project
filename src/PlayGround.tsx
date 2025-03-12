import { Input, Typography } from 'antd';
import _ from 'lodash';
import React, { useState } from 'react';

import { useGetTodosQuery } from './features/api/apiSlice';
import styles from './PlayGround.module.scss';
const { Text } = Typography;

const firstUniqueChar = (str: string) => {
  const charCount = _.countBy(str); // סופר הופעות של כל תו
  return _.findKey(charCount, count => count === 1) || 'לא נמצא תו ייחודי';
};

const PlayGround = () => {
  const [input, setInput] = useState('');
  const [uniqueChar, setUniqueChar] = useState('');
  const { data: todosList = [], isLoading, isFetching } = useGetTodosQuery();

  const handleChange = (e: any) => {
    const value = e.target.value;
    setInput(value);
    setUniqueChar(firstUniqueChar(value));
  };

  return (
    <div style={{ maxWidth: 300, margin: '20px auto', textAlign: 'center' }}>
      <Input value={input} onChange={handleChange} placeholder="הכנס טקסט" />
      {input && (
        <Text strong>
          {uniqueChar !== 'לא נמצא תו ייחודי'
            ? `התו הראשון שמופיע פעם אחת: ${uniqueChar}`
            : 'אין תו ייחודי'}
        </Text>
      )}

      <div className={styles.parentBox}>
        <div className={styles.childBox}>
          <p>Content inside the child box.</p>
        </div>
      </div>
      {isLoading || isFetching ? (
        <div>Loading...</div>
      ) : (
        todosList?.map(todoItem => {
          return <div key={todoItem.id}>{todoItem.title}</div>;
        })
      )}
    </div>
  );
};

export default PlayGround;
