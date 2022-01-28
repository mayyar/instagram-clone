import { useState, useEffect, useContext } from 'react';
import UserContext from '../context/user';
import { getUserByUserId } from '../services/firebase';

const useUser = (userId) => {
  const [activeUser, setActiveUser] = useState({});
  const { user } = useContext(UserContext);

  useEffect(() => {
    const getUserObjByUserId = async (userId) => {
      // we need a function that we can call (firebase service) that gets the user data based on the id
      const [user] = await getUserByUserId(userId);
      setActiveUser(user || {});
    };
    if (userId) {
      getUserObjByUserId(userId);
    }
  }, [user]);

  return { user: activeUser };
};

export default useUser;
