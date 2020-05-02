import axios from 'axios';
import { createUseStyles } from 'react-jss';
import React, { useEffect, useState } from 'react';
import style from './all-users-style';
import { FixedSizeList as List } from 'react-window';

interface User {
  id: number;
  login: string;
  avatar_url: string;
}

const useStyles = createUseStyles(style);

function AllUsers() {
  const [users, setUsers] = useState([]);
  // const [moreItemsLoading, setMoreItemsLoading] = useState(false);
  // const [hasNextPage, setHasNextPage] = useState(true);

  const { container, userDetails, userWrapper, userImg } = useStyles();

  // function loadMore() {
  //   // method to fetch newer entries for the list
  // }

  useEffect(function () {
    (async function getUsers() {
      try {
        const { data = [] } = await axios.get('https://api.github.com/users');

        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const userList = users.map(function (user: User) {
    return (
      <div key={user.id} className={userWrapper}>
        <img className={userImg} src={user.avatar_url} alt={user.login} />
      </div>
    );
  });

  return (
    <section className={container}>
      <div className={userDetails}>{userList}</div>
    </section>
  );
}

export default AllUsers;
