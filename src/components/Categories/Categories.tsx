import {Alert, Box, CircularProgress, Grid, Link, Tab, Tabs,} from "@mui/material";
import {SyntheticEvent} from "react";

interface Props {
  loading: boolean;
  items: string[];
  selectedItem: string;
  handleChange: (event: SyntheticEvent, category: string) => void;
}

export default function Categories({loading, items, selectedItem, handleChange}: Props) {
  return (
      <Box sx={{width: "100%"}}>
        {loading &&
            <Grid container spacing={0}>
              <Grid item xs={1}>
                <CircularProgress aria-label={"loading"}/>
              </Grid>
              <Grid item xs={11}>
                <Alert severity="info">
                  Loading categories from <Link href="https://swapi.dev/">SWAPI</Link>
                </Alert>
              </Grid>
            </Grid>
        }
        {!loading &&
            (
                <Tabs
                    onChange={handleChange}
                    value={selectedItem}
                >
                  {items.map((item) => {
                    return (
                        <Tab
                            key={item}
                            label={item}
                            value={item}
                        />
                    )
                  })}
                </Tabs>
            )
        }
      </Box>
  );
}
