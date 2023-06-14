// "use client";
import { Raleway } from "next/font/google";

type UserItemProps = {
  firstName: string;
  lastName: string;
  email: string;
};

const raleway = Raleway({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

export function UserItem({ firstName, lastName, email }: UserItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <h4 className={raleway.className}>{firstName}</h4>
      <h4 className={raleway.className}>{lastName}</h4>
      <h4 className={raleway.className}>{email}</h4>
    </li>
  );
}
