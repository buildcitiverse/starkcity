import { Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";
import type { FC, ReactNode } from "react";

interface LayoutProps {
  children?: ReactNode;
}

export const Layout: FC<LayoutProps> = (props) => {
  const { children } = props;

  return <Flex>{children}</Flex>;
};

Layout.propTypes = {
  children: PropTypes.node,
};