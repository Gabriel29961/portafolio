/* eslint-disable jsx-a11y/alt-text */
import {
  Avatar,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  IconButton,
  List,
  ListIcon,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Square,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Image from "next/image";
import { Inter, Inter_Tight, Roboto } from "next/font/google";
import { Container } from "@chakra-ui/react";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Flex bgColor={"DarkSlateGray"}>
        <Box p="4">
          <Wrap>
            <WrapItem paddingLeft={[3, 50]}>
              <Avatar name="Gabriel Mendez" src="/images/Gabriel-2.jpg" />
            </WrapItem>
          </Wrap>
        </Box>
        <Spacer />
        <Box p="4" display={["none", "initial"]}>
          <Breadcrumb
            spacing="12px"
            paddingRight={[4, 70]}
            color={"white"}
            fontSize={[10, 25]}
          >
            <BreadcrumbItem>
              <BreadcrumbLink href="#home">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#about">About</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#skills">Skills</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#contact">Contact</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Box display={["initial", "none"]} p={4}>
          <Menu>
            <MenuButton
              // bg={"DarkSlateGray"}
              as={IconButton}
              aria-label="Options"
              variant="ghost"
              color="#fff"
              fontSize={24}
              icon={<IoMenu />}
            />
            <MenuList bg={"DarkSlateGray"}>
              <MenuItem bg={"DarkSlateGray"} color={"#fff"}>
                <Link href="#home">Home</Link>
              </MenuItem>
              <MenuItem bg={"DarkSlateGray"} color={"#fff"}>
                <Link href="#about">About</Link>
              </MenuItem>
              <MenuItem bg={"DarkSlateGray"} color={"#fff"}>
                <Link href="#skills">Skills</Link>
              </MenuItem>
              <MenuItem bg={"DarkSlateGray"} color={"#fff"}>
                <Link href="#contact">Contact</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>

      <Container
        bgColor={"DarkSlateGray"}
        pt={[20, 40]}
        pl={[4, 200]}
        fontSize={[20, 60]}
        flex={12}
        fontFamily={""}
        color={"white"}
      >
        <Box id="home" fontSize={[15, 25]}>
          My name is
        </Box>
        Gabriel Mendez
        <Box fontSize={[15, 30]}>
          Proud to belong to the wonderful world of web programming.
        </Box>
        <Divider pt={150} />
        <Box pb={7}>
          <SectionTitle text="About me" id="about" />
        </Box>
        <Wrap>
          <WrapItem pt={70} ml={100}>
            <Avatar
              size="2xl"
              name="Gabriel Mendez"
              src="images/Gabriel-2.jpg"
            />{" "}
          </WrapItem>
        </Wrap>
        <Container
          fontSize={[15, 25]}
          bgColor={"DarkSlateGray"}
          mt={70}
          mr={[30, 250]}
        >
          My name is Gabriel Mendez, I am a student and passionate about web
          design and development. I want to continue learning and gaining
          experience to contribute to this wonderful world.
        </Container>
        <Divider pt={150} />
        <Box pb={7}>
          <SectionTitle text="Skills" id="skills" />
        </Box>
        <Box fontSize={[15, 25]}>
          <List spacing={3}>
            <ListItem pb={5}>
              <ListIcon color="green.500" />
              HTML
            </ListItem>
            <ListItem pb={5}>
              <ListIcon color="green.500" />
              CSS
            </ListItem>
            <ListItem pb={5}>
              <ListIcon color="green.500" />
              JavaScript
            </ListItem>
            <ListItem pb={5}>
              <ListIcon color="green.500" />
              TypeScript
            </ListItem>
            {/* You can also use custom icons from react-icons */}
            <ListItem pb={5}>
              <ListIcon color="green.500" />
              Next.js
            </ListItem>
          </List>
        </Box>
        <Divider pt={150} />
        <Box pb={7}>
          <SectionTitle text="Contact" id="contact" />
        </Box>
        <Text
          fontSize={[18, 30]}
          bgColor={"DarkSlateGray"}
          mt={[30, 70]}
          textAlign="center"
        >
          If you want to contact me click here
        </Text>
        <Stack mt={[20, 70]} pl={[125, 420]} direction="row" align="center">
          <Button colorScheme="teal">Click Me</Button>
        </Stack>
        <br />
        <br />
        <Divider />
        <br />
        <Divider />
      </Container>
    </>
  );
}

const SectionTitle = ({ text, id }: { text: string; id: string }) => {
  return (
    <Heading as="h2" id={id} fontSize={[32, 42]}>
      {text}
    </Heading>
  );
};
