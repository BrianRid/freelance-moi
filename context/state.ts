import { User } from "@prisma/client";
import React from "react";

const AppContext = React.createContext({
  user: {} as User | undefined,
  updateUser: (user: User) => {},
});

export default AppContext;
