import {
  Alert,
  Box,
  Grid,
  LinearProgress,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Pagination
} from "@mui/material";
import {ChangeEvent} from "react";

interface Props {
  loading: boolean;
  items: string[];
  selectedItem: string;
  handleClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, factor: string) => void;
}

export default function Factors({loading, items, selectedItem, handleClick}: Props) {
  const handleChange = (event: ChangeEvent<unknown>, page: number): void => {
    console.debug(event.type);
    console.log("On page " + page);
  }

  return (
      <Box sx={{width: "100%"}}>
        {loading &&
            <Grid container spacing={0}>
              <Alert severity="info">
                Loading...
                <LinearProgress/>
              </Alert>
            </Grid>

        }
        {!loading &&
            (
                <>
                  <List>
                    {items.map(item => (
                        <ListItem disablePadding key={item}>
                          <ListItemButton
                              onClick={(event) => handleClick(event, item)}
                              selected={item === selectedItem}
                          >
                            <ListItemText primary={item}/>
                          </ListItemButton>
                        </ListItem>
                    ))}
                  </List>
                  <Pagination
                      color="primary"
                      count={20}
                      siblingCount={0}
                      onChange={handleChange}
                      variant="outlined"
                  />
                </>
            )
        }
      </Box>
  );
}
