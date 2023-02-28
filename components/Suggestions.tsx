/**@jsxImportSource @emotion/react */
'use client';

import { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';
import Suggestion from './Suggestion';

export interface User {
  bio: string;
  firstName: string;
  lastName: string;
  emailId: string;
  avatar: string;
  id: number;
}

export default function Suggestions() {
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    const randomUsers = [...Array(50)].map((_, i) => ({
      bio: faker.lorem.lines(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      emailId: faker.internet.userName(),
      avatar: faker.image.avatar(),
      id: i,
    }));

    setUsers(randomUsers);
  }, []);

  if (!users) return <p>loading...</p>;

  return (
    <div className='space-y-5'>
      {users.map((user) => (
        <Suggestion key={user.id} {...user} />
      ))}
    </div>
  );
}
