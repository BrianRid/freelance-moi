import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";
import type { Session, User } from "@prisma/client";
import AppContext from "../context/state";
import PrivateLayout from "../layouts/PrivateLayout";
import PublicLayout from "../layouts/PublicLayout";
import theme_extend from "../utils/global/chakra-theme";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [user, setUser] = React.useState<User>();

  const theme = extendTheme(theme_extend);

  const updateUser = (user: User) => {
    setUser(user);
  };

  const getLayout = (children: ReactNode) => {
    if (user) {
      return <PrivateLayout>{children}</PrivateLayout>;
    } else {
      return <PublicLayout>{children}</PublicLayout>;
    }
  };

  const contextValues = {
    user,
    updateUser,
  };

  return (
    <AppContext.Provider value={contextValues}>
      <SessionProvider session={session}>
        <ChakraProvider theme={theme}>
          {getLayout(<Component {...pageProps} />)}
        </ChakraProvider>
      </SessionProvider>
    </AppContext.Provider>
  );
}
