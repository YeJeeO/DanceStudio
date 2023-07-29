/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { Container, Card, Row, Text } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import NextLink from "next/link";
import { Navbar, Avatar } from "@nextui-org/react";


const preventDefault = (event) => event.preventDefault();

export default function Nav() {
  return (
    <Container
    css={{
      maxW: "100%",
      boxSizing: "border-box",
      
    }}
      onClick={preventDefault}
    >
        <Navbar isBordered variant="floating">
        <Navbar.Brand> <Avatar
          size="xl"
          src="./logo_mini.jpg"
          color="gradient"
          bordered
          squared
        /></Navbar.Brand>
        <Navbar.Content>
        <Link as={NextLink} href='/' >О нас</Link>
        <Link as={NextLink}  href='/second'>Преподаватели</Link>
        <Link as={NextLink}  href='/third'>Мероприятия</Link>
        <Link as={NextLink}  href='/fouth'>Галерея</Link>
        <Link as={NextLink}  href='/fifth'>Расписание</Link>
        </Navbar.Content>
        </Navbar>
       </Container>
  );
}
