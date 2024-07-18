"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import theme from "../config/theme"
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { Meta } from "./Meta";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
      <Provider store={store}>
        <Meta title={"StarkCity - built on Citiverse"} description={""}/>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </Provider>
  );
}