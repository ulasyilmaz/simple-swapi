import ReactJson from "react-json-view";
import {Card, CardContent, CircularProgress, Typography} from "@mui/material";

type Person = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

interface Props {
  loading: boolean
  data?: Person;
}

export default function Person({loading, data}: Props) {
  return (
      <>
        {loading &&
            <CircularProgress aria-label={"loading"}/>
        }
        {!loading &&
            <Card>
              <CardContent>
                <Typography variant="h5" component="div" paddingBottom={3}>
                  {data && data.name}
                </Typography>
                <ReactJson src={JSON.parse(JSON.stringify(data))}/>
              </CardContent>
            </Card>
        }
      </>
  );
}
