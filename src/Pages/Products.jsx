import { useEffect } from "react";
import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import data from "../db.json";
import {
  Box,
  Grid,
  Text,
  Rating,
  GridItem,
  Image,
  Button,
  MenuButton,
  Menu,
  MenuOptionGroup,
  MenuList,
  MenuItemOption,
  MenuDivider,
  Flex,
} from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../AuthContext/AuthcontextProvider";
import SortingComp from "../Components/Sorting";
import { Link } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";
import { getProductRequest, productsAsc } from "../AuthContext/ActionCreator";
import Slidebar from "../AuthContext/slidebar";
export default function Products() {
  const { state, dispatch } = useContext(AppContext);
  const [sorting, setSorting] = useState("Bestselling");
  const datachange = (value) => {
    value === "HtoL"
      ? dispatch(productsAsc(state.data?.sort((b, a) => a.price - b.price)))
      : dispatch(productsAsc(state.data?.sort((a, b) => a.price - b.price)));
  };
  const singlepage = (type, id) => {
    console.log(type, id);
  };
  return (
    <>
      <Box w="80%" m="auto">
        <Flex>
          <Box>
            <Slidebar />
          </Box>

          <Box w="70%" m="auto">
            <Box ml="40rem">
              <Flex gap={4} alignItems="center">
                <Text>Sort By:</Text>
                <Menu closeOnSelect={false}>
                  <MenuButton as={Button}>{sorting}</MenuButton>
                  <MenuList minWidth="240px">
                    <MenuOptionGroup
                      defaultValue={sorting}
                      title="Order"
                      type="radio"
                    >
                      <MenuItemOption
                        value="bsc"
                        onClick={() => {
                          setSorting("Best Selling");
                          datachange("bestselling");
                        }}
                      >
                        Best Selling
                      </MenuItemOption>
                      <MenuItemOption
                        value="asc"
                        onClick={() => {
                          setSorting("Low to High");
                          datachange("LtoH");
                        }}
                      >
                        Low to High
                      </MenuItemOption>
                      <MenuItemOption
                        value="desc"
                        onClick={() => {
                          setSorting("High to Low");
                          datachange("HtoL");
                        }}
                      >
                        High to Low
                      </MenuItemOption>
                    </MenuOptionGroup>
                    <MenuDivider />
                  </MenuList>
                </Menu>
              </Flex>
            </Box>
            <Grid templateColumns="repeat(4,1fr)" gap={5}>
              {state.data?.map((el) => (
                <Link to={`/detail`} key={el.id}>
                  <GridItem
                    key={el.id}
                    onClick={() => singlepage(el.id, el.type)}
                  >
                    <Image src={el.image} />
                    <Box>
                      <Text onClick={singlepage}>{el.title}</Text>
                      <Text>{el.name}</Text>
                      <Box>
                        {new Array(5).fill("").map((_, i) => (
                          <StarIcon
                            key={i}
                            color={i < el.stars ? "black.500" : "gray.300"}
                          />
                        ))}
                      </Box>
                      <Text> $ {el.price}.00</Text>
                    </Box>
                  </GridItem>
                </Link>
              ))}
            </Grid>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
