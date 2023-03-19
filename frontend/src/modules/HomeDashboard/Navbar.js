import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// context
import { useAppContext } from "../../contexts/AppProvider";

// assets
import { AiOutlineDown } from "react-icons/ai";
import { HiSearch } from "react-icons/hi";

// components
import { NavBarWrapper } from "./styled";
import { PageLoader, Input } from "../../components";
import {
  Avatar,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner";
import { useDisclosure } from "@chakra-ui/hooks";
import ProfileModal from "./ProfileModal";

const NavBar = () => {
  const history = useHistory();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);

  const { user } = useAppContext();

  const logoutHandler = () => {
    localStorage.removeItem("user");
    history.push("/login");
  };

  const handleSearch = async () => {
    if (!search) {
      toast({
        title: "Please Enter something in search",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
      return;
    }

    try {
      setLoading(true);

      const apiResponse = await fetch(`/user/get-users?search=${search}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const res = await apiResponse.json();

      setLoading(false);

      if (res.status === "ok") {
        console.log(res.data);
        setSearchResult(res.data);
      } else {
        toast({
          title: res?.error || "There was an error while searching",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom-left",
        });
        return;
      }
    } catch (err) {
      console.log(err);
      toast({
        title: err || "There was an error while searching",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
      setLoading(false);
    }
  };
  const accessChat = () => {};

  return (
    <>
      <NavBarWrapper>
        <Tooltip label="Search Users to Chat" hasArrow placement="bottom-end">
          <Button variant="ghost" onClick={onOpen}>
            <i className="fas fa-search"></i>
            <Text d={{ base: "none", md: "flex" }} px="4">
              Search User
            </Text>
          </Button>
        </Tooltip>

        <Text fontSize="3xl" fontWeight="600">
          Chat.io
        </Text>

        <div>
          <Menu>
            <MenuButton as={Button} rightIcon={<AiOutlineDown />}>
              <Avatar
                size="sm"
                cursor="pointer"
                name={user?.name}
                src={user?.pic}
              />
            </MenuButton>
            <MenuList>
              <ProfileModal user={user}>
                <MenuItem>My Profile</MenuItem>
              </ProfileModal>
              <MenuDivider />
              <MenuItem onClick={logoutHandler}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </NavBarWrapper>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Search Users </DrawerHeader>

          <DrawerBody>
            <Box display="flex" pb={6} justifyContent="space-between">
              <Input
                placeholder="Search by name or email"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                Icon={HiSearch}
              />
              <Button ml={2} onClick={handleSearch} w="100px">
                Go
              </Button>
            </Box>

            {loading ? (
              <PageLoader />
            ) : searchResult ? (
              searchResult.map((user) => (
                <UserListItem
                  key={user._id}
                  user={user}
                  handleFunction={() => accessChat(user._id)}
                />
              ))
            ) : null}

            {loadingChat && <Spinner ml="auto" d="flex" />}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavBar;

const UserListItem = ({ user, handleFunction }) => {
  return (
    <Box
      onClick={handleFunction}
      cursor="pointer"
      bg="#E8E8E8"
      _hover={{
        background: "#38B2AC",
        color: "white",
      }}
      w="100%"
      h="80px"
      display="flex"
      alignItems="center"
      color="black"
      px={3}
      py={2}
      mb={2}
      borderRadius="lg"
    >
      <Avatar
        mr={2}
        size="md"
        cursor="pointer"
        name={user.name}
        src={user.profilePic}
      />
      <Box ml={2}>
        <Text fontSize="lg" fontWeight="500">
          {user.name}
        </Text>
        <Text fontSize="sm">
          <b>Email : </b>
          {user.email}
        </Text>
      </Box>
    </Box>
  );
};
