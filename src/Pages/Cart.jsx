import { useContext, useState } from "react";

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
  Radio,
  Stack,
  RadioGroup,
  Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { StarIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import { AppContext } from "../AuthContext/AuthcontextProvider";
import { CartContext } from "../CartContext/CartContextProvider";
import { addToCart } from "../CartContext/action";
const itemAlreadyExists =()=>{}
export default function Cart() {

  const { cartState , cartDispatch } = useContext(CartContext);

  const { state } = useContext(AppContext);
 
  const [value, setValue] = useState(false);
  return (
    <>
      <Box>
        <Box m="auto" w="90%" border="1px" borderColor="red.200">
          <Flex gap="10px" mt="20px">
            <Box ml="10px">
              <Image
                boxSize="30rem"
                src={state.singlepagedata[0]?.image}
              ></Image>
            </Box>
            <Box p="20px" ml="20">
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
              </Box>
              <Box>
                {state.singlepagedata[0]?.price && (
                  <Text color="tomato">
                    $ {state.singlepagedata[0]?.price}.00{" "}
                    <Text color="black" as="s">
                      $ {state.singlepagedata[0]?.price + 5}.00
                    </Text>{" "}
                  </Text>
                )}
              </Box>

              <Box
                p={3}
                mt="10"
                border="1px"
                borderColor="gray.200"
                bg="#f6f6f8"
                borderRadius={"3"}
              >
                <Box>
                  <Heading as="h2" size="xl" fontSize={"20px"}>
                    Get It Shipped
                  </Heading>
                  <RadioGroup onChange={setValue} value={value} m="2">
                    <Stack>
                      <Flex direction={"row"}>
                        <Radio value="Standard">
                          Standard
                          <Link to="/">
                            <Box color="blue" textDecoration={"underline"}>
                              Sign in or Create Account
                            </Box>
                          </Link>
                          to enjoy free delivery
                        </Radio>
                      </Flex>
                      <Radio value="Same-Day">
                        Same-Day Delivery <InfoOutlineIcon /> Select to see
                        availability for your location{" "}
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </Box>
              </Box>
              <Box p={20}>
                <Link to="/Checkout">
                  <Button
                    p={10}
                    bgColor="
#cf112c"
                    color={"white"}
                    borderRadius={"45%"}
                    w="100"
                    h="100"
                  disabled={itemAlreadyExists(state.singlepagedata[0])}
                  onClick={()=>cartDispatch(addToCart(state.singlepagedata[0]))}>
                    Add to Basket {value && "For"} {value}{" "}
                  </Button>
                </Link>
              </Box>
            </Box>
          </Flex>
        </Box>
        <Box>
          <Center>
            <Image src="https://i.imgur.com/23WGwBb.jpg" />
          </Center>
        </Box>
      </Box>
    </>
  );
}
