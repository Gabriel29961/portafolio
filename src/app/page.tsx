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
  List,
  ListIcon,
  ListItem,
  Spacer,
  Square,
  Stack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Image from "next/image";
import { Inter, Inter_Tight, Roboto } from "next/font/google";
import { Container } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Flex bgColor={"DarkSlateGray"}>
        <Box p="4">
          <Wrap>
            <WrapItem paddingLeft={50}>
              <Avatar name="Gabriel Mendez" src="/images/Gabriel-2.jpg" />
            </WrapItem>
          </Wrap>
        </Box>
        <Spacer />
        <Box p="4">
          <Breadcrumb
            spacing="12px"
            paddingRight={70}
            color={"white"}
            fontSize={25}
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
      </Flex>

      <Container
        bgColor={"DarkSlateGray"}
        pt={40}
        pl={200}
        fontSize={60}
        flex={12}
        fontFamily={""}
        color={"white"}
      >
        <Box id="home" fontSize={25}>
          My name is
        </Box>
        Gabriel Mendez
        <Box fontSize={30}>
          Proud to belong to the wonderful world of web programming.
        </Box>
        <Divider pt={150} />
        <Box pb={7}>
          <h2 id="about">About me</h2>
        </Box>
        <Wrap>
          <WrapItem pt={70} pl={400}>
            <Avatar
              size="2xl"
              name="Gabriel Mendez"
              src="images/Gabriel-2.jpg"
            />{" "}
          </WrapItem>
        </Wrap>
        <Container fontSize={25} bgColor={"DarkSlateGray"} mt={70} mr={250}>
          My name is Gabriel Mendez, I am a student and passionate about web
          design and development. I want to continue learning and gaining
          experience to contribute to this wonderful world.
        </Container>
        <Divider pt={150} />
        <Box pb={7}>
          <h2 id="skills">Skills</h2>
        </Box>
        <Box fontSize={25}>
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
          <h2 id="contact">Contact</h2>
        </Box>
        <Container fontSize={30} bgColor={"DarkSlateGray"} mt={70} pl={200}>
          If you want to contact me click here
        </Container>
        <Stack mt={70} pl={420} direction="row" align="center">
          <Button colorScheme="teal" size="lg">
            Click Me
          </Button>
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
