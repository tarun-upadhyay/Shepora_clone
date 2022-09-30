import { useContext } from "react";

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
  Heading,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { AppContext } from "../AuthContext/AuthcontextProvider";
export default function Cart() {
  const { state } = useContext(AppContext);
  console.log();

  return (
    <>
      <Box>
        <Box m="auto" w="70%">
          <Flex gap="10px" mt="20px">
            <Box>
              <Image boxSize="30rem" src={state.singlepagedata[0]?.image}></Image>
            </Box>
            <Box>
              <Heading>{state.singlepagedata[0]?.title}</Heading>
              <Text>{state.singlepagedata[0]?.name}</Text>
              <Box>
                {state.singlepagedata[0]?.stars &&
                  new Array(5)
                    .fill("")
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        color={
                          i < state.singlepagedata[0]?.stars
                            ? "black.500"
                            : "gray.300"
                        }
                      />
                    ))}
              </Box >
              <Box>
              { state.singlepagedata[0]?.price &&
                <Text color="tomato">
                  $ {state.singlepagedata[0]?.price}.00{" "} 
                  <Text color="black" as="s">$ {state.singlepagedata[0]?.price + 5}.00</Text>{" "}
                </Text>
              }
              </Box>
              <Box>
                <Button>Add to Basket</Button>
              </Box>

            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
