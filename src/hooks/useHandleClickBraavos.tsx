import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import {
  useConnect,
  useAccount,
  useContract,
  useContractWrite,
  useContractRead,
} from "@starknet-react/core";
import abi from "../config/abi/abi.json";

export const useHandleClickBravoos = (braavosConnector: any) => {
  const [actionConnect, setActionConnect] = useState(false);
  const { connect } = useConnect();
  const { isConnected, chainId, address } = useAccount();
  const router = useRouter();
  const [callContract, setCallContract] = useState(true);

  const handleClickBravoos = async () => {
    if (braavosConnector?.available()) {
      try {
        await connect({ connector: braavosConnector });
        setActionConnect(true);
      } catch (error: any) {
        console.error("Error connecting or verifying code:", error);
      }
    } else {
      router.push("https://braavos.app/");
    }
  };

  const { contract } = useContract({
    abi: abi,
    address:
      "0x06C1e915560589703C87ED758866aDadcd9acD324193e7F4C300C7357c9ffc3b",
  });

  const calls = useMemo(() => {
    if (!address || !contract) return [];
    return contract.populateTransaction["init_mint"]!(address, {
      low: 1,
      high: 0,
    });
  }, [contract, address]);

  const { writeAsync, data: dataVerify } = useContractWrite({
    calls,
  });

  const { data: dataMinted, refetch: refetchData } = useContractRead({
    functionName: "minted",
    args: [address as String],
    abi: abi,
    address:
      "0x06C1e915560589703C87ED758866aDadcd9acD324193e7F4C300C7357c9ffc3b",
    watch: true,
  });


  useEffect(() => {
    const delayFunction = () => {
      if (address && (dataMinted === undefined || dataMinted === false)) {
        writeAsync()
          .then(() => {
            setCallContract(true);
            refetchData();
          })
          .catch((error: any) => {
            console.error("Error verify code:", error);
          });
      }
    };
    const timer = setTimeout(delayFunction, 1000);
    return () => clearTimeout(timer);
  }, [address, dataMinted]);

  useEffect(() => {
    if (
      isConnected &&
      actionConnect &&
      chainId === BigInt("393402133025997798000961") &&
      dataMinted === true
    ) {
      router.push("/explorer");
    }
  }, [isConnected, chainId, dataMinted]);

  useEffect(() => {
    setActionConnect(false);
  }, [router]);

  return {
    handleClickBravoos,
    actionConnect,
  };
};
