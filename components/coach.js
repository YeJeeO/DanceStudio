import { Image, Grid} from "@nextui-org/react";

const Coach = () => {
    return (
      <div>
        <h1>Наши педагоги</h1>
        <Grid.Container gap={2}>
       <Grid>
        <Image
          src="16776401116.jpg"
          alt="A"
          width={100}
          height={100}
        />
      </Grid> 
      <Grid>
        <Image
          src="16776401116.jpg"
          alt="A"
          width={200}
          height={350}
        />
      </Grid>
      <Grid>
        <Image
          src="16776401116.jpg"
          alt="A"
          width={400}
          height={350}
        />
      </Grid>
    </Grid.Container>
    <Grid.Container gap={1}>
       <Grid>
        <Image
          src="16776475.jpg"
          alt="A"
          width={100}
          height={100}
        />
      </Grid> 
      <Grid>
        <Image
          src="16776475.jpg"
          alt="A"
          width={150}
          height={150}
        />
      </Grid>
      <Grid>
        <Image
          src="16776475.jpg"
          alt="A"
          width={300}
          height={200}
        />
      </Grid>
    </Grid.Container>
      </div>
      
    );
  };
   
  export default Coach;