import ReactJson from "react-json-view";
import {Card, CardContent, CircularProgress, Typography} from "@mui/material";

interface Data {
  name?: string;
  title?: string;
}

interface Props {
  loading: boolean
  data?: Data;
}

export default function Starship({loading, data}: Props) {
  return (
      <>
        {loading &&
            <CircularProgress aria-label={"loading"}/>
        }
        {!loading &&
            <Card>
              <CardContent>
                <Typography variant="h5" component="div" paddingBottom={3}>
                  {data && (data.name || data.title)}
                </Typography>
                <ReactJson src={JSON.parse(JSON.stringify(data))}/>
              </CardContent>
            </Card>
        }
      </>
  );
}
