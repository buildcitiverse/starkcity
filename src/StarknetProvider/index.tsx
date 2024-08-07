"use client"
import React from "react";

import { sepolia } from "@starknet-react/chains";
import {
  StarknetConfig,
  jsonRpcProvider,
  argent,
  braavos,
  voyager,
  InjectedConnector
} from "@starknet-react/core";
import { ArgentMobileConnector } from "starknetkit/argentMobile";

function rpc(chain:any) {
  if (chain.id === sepolia.id) {
    return {
      nodeUrl: "https://starknet-sepolia.public.blastapi.io/rpc/v0_7"
    };
  }
  return {
    nodeUrl: `https://${chain.network}.example.org`
  };
}

export function StarknetProvider({ children }: { children: React.ReactNode }) {
  const connectors = [
    new InjectedConnector({ options: {id: "braavos", name: "Braavos" }}),
    new InjectedConnector({ options: {id: "argentX", name: "Argent X" }}),
    new ArgentMobileConnector(),
  ];

  const chains = [sepolia];

  const provider = jsonRpcProvider({ rpc });

  return (
    <StarknetConfig
      chains={chains}
      provider={provider}
      connectors={connectors}
      explorer={voyager}
      autoConnect
    >
      {children}
    </StarknetConfig>
  );
}
