export type User = {
  id: string;
  name: string;
};

export const authenticate = () => {
  return new Promise<User>((resolve) =>
    setTimeout(() => resolve({ id: "1", name: "Bob" }), 1000),
  );
};
