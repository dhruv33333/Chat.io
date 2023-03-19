import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// context
import { useAppContext } from "../../contexts/AppProvider";

// assets
import { AiOutlineDown } from "react-icons/ai";
import { HiSearch } from "react-icons/hi";

// components
import { NavBar } from "./styled";
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

const HomeDashboard = () => {
  const history = useHistory();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);

  const { user } = useAppContext();

  const logoutHandler = () => {};
  const handleSearch = () => {};
  const accessChat = () => {};

  return (
    <>
      <NavBar>
        <Tooltip label="Search Users to Chat" hasArrow placement="bottom-end">
          <Button variant="ghost" onClick={onOpen}>
            <i className="fas fa-search"></i>
            <Text d={{ base: "none", md: "flex" }} px="4">
              Search User
            </Text>
          </Button>
        </Tooltip>

        <Text fontSize="2xl" fontFamily="Work sans">
          Chat.io
        </Text>

        <div>
          <Menu></Menu>

          <Menu>
            <MenuButton as={Button} rightIcon={<AiOutlineDown />}>
              <Avatar
                size="sm"
                cursor="pointer"
                name={user.name}
                src={user.pic}
              />
            </MenuButton>
            <MenuList>
              <MenuDivider />
              <MenuItem onClick={logoutHandler}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </NavBar>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Search Users </DrawerHeader>

          <DrawerBody>
            <Box display="flex" pb={2}>
              <Input
                placeholder="Search by name or email"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                Icon={HiSearch}
              />
              <Button ml={2} onClick={handleSearch}>
                Go
              </Button>
            </Box>
            {loading ? (
              <PageLoader />
            ) : searchResult ? (
              searchResult.map((user) => <></>)
            ) : (
              <span></span>
            )}

            {loadingChat && <Spinner ml="auto" d="flex" />}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default HomeDashboard;
