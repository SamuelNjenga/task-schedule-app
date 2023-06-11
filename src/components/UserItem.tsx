// "use client";

type UserItemProps = {
  firstName: string;
  lastName: string;
  email: string;
};

export function UserItem({ firstName, lastName, email }: UserItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <h4>{firstName}</h4>
      <h4>{lastName}</h4>
      <h4>{email}</h4>
    </li>
  );
}
