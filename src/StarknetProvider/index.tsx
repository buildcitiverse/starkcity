"use client"
import React from "react";

import { sepolia } from "@starknet-react/chains";
import {
  StarknetConfig,
  publicProvider,
  argent,
  braavos,
  useInjectedConnectors,
  voyager,
  InjectedConnector
} from "@starknet-react/core";
import { ArgentMobileConnector } from "starknetkit/argentMobile";
import { WebWalletConnector } from "starknetkit/webwallet";

export function StarknetProvider({ children }: { children: React.ReactNode }) {
  // const { connectors } = useInjectedConnectors({
  //   // Show these connectors if the user has no connector installed.
  //   recommended: [
  //     argent(),
  //     braavos(),
  //   ],
  //   // Hide recommended connectors if the user has any connector installed.
  //   includeRecommended: "onlyIfNoConnectors",
  //   // Randomize the order of the connectors.
  //   order: "random"
  // });

  const connectors = [
    new InjectedConnector({ options: {id: "braavos", name: "Braavos" }}),
    new InjectedConnector({ options: {id: "argentX", name: "Argent X" }}),
    new ArgentMobileConnector(),
  ]

  const chains = [sepolia]

  return (
    <StarknetConfig
      chains={chains}
      provider={publicProvider()}
      connectors={connectors}
      explorer={voyager}
      autoConnect
    >
      {children}
    </StarknetConfig>
  );
}
