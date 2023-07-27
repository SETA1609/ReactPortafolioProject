import React, { ReactNode } from "react";
import { VStack, BoxProps } from "@chakra-ui/react";

/**
 * Illustrates the use of children prop and spread operator
 */

interface FullScreenSectionProps extends BoxProps {
  children: ReactNode;
  isDarkBackground?: boolean;
  spacing?: number; // Add spacing prop here
  }

const FullScreenSection : React.FC<FullScreenSectionProps>= ({ children, isDarkBackground, ...boxProps }:FullScreenSectionProps) => {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
    >
      <VStack maxWidth="1280px" minHeight="100vh" {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
