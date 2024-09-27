import {useEffect, useState} from "react";
import { User, SortUsersBy, SortDirection } from "../utils/types";
import { USER_ENDPOINT } from "../utils/const.ts";


const useFetchUsers = (sortBy : SortUsersBy = SortUsersBy.createdAt, sortDirection : SortDirection = SortDirection.ASC) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(USER_ENDPOINT);

        if (!response.ok) {
          throw new Error("Network Error");
        }

        const data = await response.json();

        const sortedData = [...data].sort((a: User, b: User) => {
          let comparison = 0;

          switch (sortBy) {
            case SortUsersBy.createdAt:
              comparison =
                new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
              break;
            case SortUsersBy.name:
              comparison = a.name.localeCompare(b.name);
              break;
            case SortUsersBy.id:
              comparison = a.id.localeCompare(b.id);
              break;
            default:
              return 0;
          }

          return sortDirection === SortDirection.ASC ? comparison : -comparison;
        });

        setUsers(sortedData);
        setLoading(false);
      } catch (error) {
            setError((error as Error).message);
            setLoading(false);
        }
      };

      fetchData();
    }, [sortBy, sortDirection]);

  return {
    users,
    loading,
    error
  };
}

export default useFetchUsers;