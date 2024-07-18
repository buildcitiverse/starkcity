"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import theme from "../config/theme"
import { store } from "../redux/store";
import { Provider } from "react-redux";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
      <Provider store={store}>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </Provider>
  );
}