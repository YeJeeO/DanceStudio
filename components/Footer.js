// import ModalDialog from "./form/modal";
import * as React from 'react';
import { Container, Card, Row, Text } from "@nextui-org/react";
import ModalDialog from './modalDialog';


export default function Footer() {
    return (
      <Container>
Контакты
Новосибирск: +7 (383) 304-83-23
КЗ Евразия, Селезнёва, 46
Арт резиденция Юность, Строителей, 21
ДК Прогресс, Красный проспект, 167
Родники, Тюленина, 23/1
Пермитина, 24/7
Максима Горького, 85
Москва, Авангардная, 3

     <ModalDialog/>
 
         </Container>
    );
  }