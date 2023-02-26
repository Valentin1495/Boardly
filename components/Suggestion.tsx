import { User } from './Suggestions';

export default function Suggestion({
  firstName,
  lastName,
  bio,
  avatar,
  emailId,
}: User) {
  return <div>{firstName}</div>;
}
