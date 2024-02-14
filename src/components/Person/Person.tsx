import ReactJson from "react-json-view";
import {
  Card,
  CardContent,
  CircularProgress,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import {BadgeOutlined, Height} from "@mui/icons-material";

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
  loading: boolean;
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
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <BadgeOutlined/>
                      </ListItemIcon>
                      <ListItemIcon>
                        Name
                      </ListItemIcon>
                      <ListItemText primary={data && data.name}/>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <Height/>
                      </ListItemIcon>
                      <ListItemIcon>
                        Height
                      </ListItemIcon>
                      <ListItemText primary={`${data && data.height} cm`}/>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding alignItems={'flex-start'}>
                    <ListItemButton>
                      <ListItemIcon>
                        <Height/>
                      </ListItemIcon>
                      <ListItemIcon>
                        Height
                      </ListItemIcon>
                      <ReactJson src={JSON.parse(JSON.stringify(data))}/>
                    </ListItemButton>
                  </ListItem>
                </List>
              </CardContent>
            </Card>
        }
      </>
  );
}
