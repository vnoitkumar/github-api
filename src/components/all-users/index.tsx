import axios from 'axios';
import { createUseStyles } from 'react-jss';
import React, { useState } from 'react';
import style from './all-users-style';
import InfiniteScroll from 'react-infinite-scroller';

interface User {
  id: number;
  login: string;
  avatar_url: string;
}

let offset = 1;

const useStyles = createUseStyles(style);

function AllUsers() {
  const [users, setUsers] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const { container, details, wrapper, img } = useStyles();

  async function getUsers() {
    try {
      const { headers, data = [] } = await axios.get(
        'https://api.github.com/users',
        {
          params: {
            since: offset,
          },
        }
      );

      let since;

      try {
        since = headers.link.split('?since=')[1].split('>;')[0];
      } catch (error) {
        setHasMore(false);
      }

      offset = since;

      const userData = [...users, ...data];
      setUsers(userData);
    } catch (error) {
      console.error(error);
    }
  }

  const userList = users.map(function (user: User) {
    return (
      <div key={user.id} className={wrapper}>
        <img className={img} src={user.avatar_url} alt={user.login} />
      </div>
    );
  });

  return (
    <section className={container}>
      <InfiniteScroll
        className={details}
        pageStart={0}
        loadMore={getUsers}
        hasMore={hasMore}
        loader={
          <div key={0}>
            <span>Loading...</span>
          </div>
        }
      >
        {userList}
      </InfiniteScroll>
    </section>
  );
}

export default AllUsers;
