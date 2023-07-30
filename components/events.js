/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Image, Grid} from "@nextui-org/react";

 
const Event = () => {
  return ( <div>   
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
   </Grid.Container>
   </div>
  );
};
 
export default Event;