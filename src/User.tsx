import { useMemo } from "react"

type UserProp = {
  id: string;
  createdAt: string;
  name: string;
  avatar: string;
};

const User = (
  {
    id,
    createdAt,
    name,
    avatar
  } : UserProp
) => {

  const formattedDate = useMemo(() => {
    return new Date(createdAt).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }, [createdAt]);

  return (
    <section key={id} className={"user-card"}>
      <img src={avatar} alt={name} className={"user-avatar"} />
      <div className={"user-info"}>
        <div className={"user-name"}>{name}</div>
        <div><strong>Created at:</strong> {formattedDate}</div>
      </div>
    </section>
  )
}

export default User