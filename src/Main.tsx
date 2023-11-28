import { User } from "./api/authenticate";
import { Content } from "./Content";

type Props = {
  user: undefined | User;
  permission: undefined | string[];
};

export const Main = ({ user, permission }: Props) => {
  return (
    <main className={"py-8"}>
      <h1 className={"text-3xl text-center font-bold underline"}>Welcome</h1>
      <p className={"mt-8 text-xl text-center"}>
        {user ? `Hello ${user.name}!` : "Please sign in"}
      </p>
      <Content permissions={permission} />
    </main>
  );
};
