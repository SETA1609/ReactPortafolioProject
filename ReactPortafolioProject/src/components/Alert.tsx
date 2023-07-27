import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";
import { RefObject, useRef } from "react";

/**
 * This is a global component that uses context to display a global alert message.
 */
function Alert(): JSX.Element {
  const { isOpen, type, message, onClose } = useAlertContext();
  const cancelRef = useRef<HTMLButtonElement>(null);
  const isSuccess = type === "success";

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef as RefObject<HTMLButtonElement>}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent py={4} backgroundColor={isSuccess ? "#81C784" : "#FF8A65"}>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {isSuccess ? "All good!" : "Oops!"}
          </AlertDialogHeader>
          <AlertDialogBody>{message}</AlertDialogBody>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default Alert;
