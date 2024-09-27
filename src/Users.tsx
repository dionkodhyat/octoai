import useFetchUsers from "./hooks/useFetchUsers.ts";
import User from "./User.tsx"
import { User as UserType, SortUsersBy } from "./utils/types.ts";

/**
 * Instructions:
 * Your task is to create a React component that displays a sorted list of users.
 * This component fetches user data from the API and displays the result.
 * The API endpoint is provided as `API_ENDPOINT` and returns an array of 5 users. 
 * The User type describes the shape of a single user.
 *
 * Acceptance Criteria:
 * - users are sorted by their `createdAt` property in descending order
 * - show each user's name, creation date and avatar image
 *
 * Notes:
 * Don't worry about styling or complicated layouts. Any clear and readable presentation is acceptable.
 * This is a Typescript project but feel free to use vanilla JavaScript.
 * Include any added dependencies in `package.json` file.
 * The estimated time to complete this challenge is 30 minutes.
 *
 */


const Users = () => {
  const {
      users,
      loading,
      error
  } = useFetchUsers(SortUsersBy.createdAt)

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!users && !error) {
    return <div>No users to display</div>
  }

  return (
    <div className={"users-container"}>
      {
        users.map((user : UserType) => (
          <User
            key={user.id}
            id={user.id}
            name={user.name}
            createdAt={user.createdAt}
            avatar={user.avatar}
          />
        ))
      }
    </div>
  )
}

export default Users;
