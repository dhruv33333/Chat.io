import React from "react";

//assets
import { AiFillEye } from "react-icons/ai";

// components
import {
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

const ProfileModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(user);
  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton
          d={{ base: "flex" }}
          icon={<AiFillEye />}
          onClick={onOpen}
        />
      )}

      <Modal size="lg" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent h="332px">
          <ModalHeader fontSize="40px" display="flex" justifyContent="center">
            {user?.name}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="space-between"
            mb="16px"
          >
            <Image
              borderRadius="full"
              boxSize="150px"
              src={user?.pic}
              alt={user?.name}
            />
            <Text fontSize={{ base: "28px", md: "30px" }}>
              Email: {user?.email}
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;
