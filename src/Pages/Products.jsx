import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../db.json";
import { Box, Grid, Text, Rating, GridItem, Image } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../AuthContext/AuthcontextProvider";
import { StarIcon } from "@chakra-ui/icons";
export default function Products() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <>
      <Box>
        <Box>
          <Grid templateColumns="repeat(4,1fr)" gap={5}>
            {state.data?.map((el) => (
              <GridItem>
                <Image src={el.image} />
                <Box>
                  <Text>{el.title}</Text>
                  <Text>{el.name}</Text>
                  <Box>
                    {new Array(5).fill("").map((_, i) => (
                      <StarIcon
                        key={i}
                        color={i < el.stars ? "black.500" : "gray.300"}
                      />
                    ))}
                  </Box>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
}
