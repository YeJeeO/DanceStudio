/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import { Image, Grid, Spacer } from "@nextui-org/react";


const Galery = () => {
    return (
        <div>
          <h1>
           Our photograthy and video
          </h1>
          В альбоме собраны некоторые видео записи танцев наших учеников. На уроках мы работаем над разитием физических данны, изычаем базовые движения и танцевальные связки, занимаемся постановкой шоу для выступлений. Мы призеры более 50 чемпионатов и конкурсов Новосибирска и других городов.

ГРУППЫ ДЛЯ ДЕТЕЙ И ВЗРОСЛЫХ

 У нас выступают все ученики желающие танцевать на сцене. Можно заниматься и "для себя" без участия в выступлениях. Есть разные группы по возрасту и уровню. Прийти на занятия можно в любое время. Мы предлагаем большой выбор направлений. 

 Чтобы посмотреть видео записи необходимо нажать на фото заставок видео ролика! Он откроется во всплывающем окне. Смотрите видео и приходите к нам на занятия.

 
 <Grid.Container gap={5}>
      <Grid>
        <Image
          src="1.jpg"
          objectFit="fill"
          alt="1"
          width={450}
          height={300}
        />
      </Grid>
      <Grid>
        <Image
          src="2.jpg"
          objectFit="fill"
          alt="1"
          width={450}
          height={300}
        />
      </Grid>
      <Grid>
        <Image
          src="4.jpg"
          objectFit="fill"
          alt="1"
          width={450}
          height={300}
        />
      </Grid>
      <Grid>
        <Image
          src="6.jpg"
          objectFit="fill"
          alt="1"
          width={450}
          height={300}
        />
      </Grid>
    </Grid.Container>
        </div>
      );
    };
     
  export default Galery;