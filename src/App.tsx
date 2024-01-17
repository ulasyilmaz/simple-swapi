import axios from "axios";
import {SyntheticEvent, useEffect, useState} from "react";
import {FALLBACK_CATEGORIES, FALLBACK_FACTORS} from "./shared/helpers";
import Categories from "./components/Categories";
import {Grid} from "@mui/material";
import Factors from "./components/Factors";
import Person from "./components/Person";
import Factor from "./components/Factor";
import Film from "./components/Film/Film.tsx";
import Planet from "./components/Planet";
import Species from "./components/Species";
import Starship from "./components/Starship";
import Vehicle from "./components/Vehicle";

function App() {
  const BASE_URL = "https://swapi.dev/api/";

  const [loadingCategories, setLoadingCategories] = useState(true);
  const [categories, setCategories] = useState(FALLBACK_CATEGORIES);
  const [selectedCategory, setSelectedCategory] = useState(Object.keys(FALLBACK_CATEGORIES)[0]);

  const [loadingFactors, setLoadingFactors] = useState(true);
  const [factors, setFactors] = useState(FALLBACK_FACTORS);
  const [selectedFactor, setSelectedFactor] = useState(FALLBACK_FACTORS.results[0].name);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoadingCategories(true);
      const {data: response} = await axios.get(BASE_URL);
      setCategories(response);
      setLoadingCategories(false);
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchFactors = async () => {
      const factorsUrl = categories[selectedCategory];
      setLoadingFactors(true);
      const {data: response} = await axios.get(factorsUrl);
      setFactors(response);
      setSelectedFactor(getFactorName(response.results[0]));
      setLoadingFactors(false);
    };
    fetchFactors();
  }, [selectedCategory, categories]);

  const handleCategorySelected = (event: SyntheticEvent, category: string): void => {
    console.debug(event.type);
    setSelectedCategory(category);
  }

  const handleFactorSelected = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, factor: string): void => {
    console.debug(event.type);
    setSelectedFactor(factor);
  }

  const getFactorName = (factor: object): string => {
    const factorAsJson = JSON.parse(JSON.stringify(factor));
    return factorAsJson.name || factorAsJson.title;
  }

  return <>
    <Categories
        loading={loadingCategories}
        items={Object.keys(categories)}
        selectedItem={selectedCategory}
        handleChange={handleCategorySelected}
    />
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Factors
            loading={loadingFactors}
            items={factors.results.map(factor => getFactorName(factor))}
            selectedItem={selectedFactor}
            handleClick={handleFactorSelected}
        />
      </Grid>
      <Grid item xs={8}>
        {selectedCategory === "people" &&
            <Person
                loading={loadingFactors}
                data={factors.results.find(factor => getFactorName(factor) === selectedFactor)}
            />
        }
        {selectedCategory === "planets" &&
            <Planet
                loading={loadingFactors}
                data={factors.results.find(factor => getFactorName(factor) === selectedFactor)}
            />
        }
        {selectedCategory === "films" &&
            <Film
                loading={loadingFactors}
                data={factors.results.find(factor => getFactorName(factor) === selectedFactor)}
            />
        }
        {selectedCategory === "species" &&
            <Species
                loading={loadingFactors}
                data={factors.results.find(factor => getFactorName(factor) === selectedFactor)}
            />
        }
        {selectedCategory === "vehicles" &&
            <Vehicle
                loading={loadingFactors}
                data={factors.results.find(factor => getFactorName(factor) === selectedFactor)}
            />
        }
        {selectedCategory === "starships" &&
            <Starship
                loading={loadingFactors}
                data={factors.results.find(factor => getFactorName(factor) === selectedFactor)}
            />
        }
        {!Object.keys(FALLBACK_CATEGORIES).includes(selectedCategory) &&
            <Factor
                loading={loadingFactors}
                data={factors.results.find(factor => getFactorName(factor) === selectedFactor)}
            />
        }
      </Grid>
    </Grid>
  </>;
}

export default App;
