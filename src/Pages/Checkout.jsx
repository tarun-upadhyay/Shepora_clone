import {
  Box,
  Container,
  Image,
  HStack,
  Icon,
  Flex,
  Heading,
  Text,
  Button,
  Divider,
  VStack,
} from "@chakra-ui/react";

import { useContext } from "react";
import { CartContext } from "../CartContext/CartContextProvider";
import { removeFromCart } from "../CartContext/action";
import { StarIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import {
  AuthContext,
  loginFailureAction,
  loginLodingAction,
  loginSuccesAction,
} from "../LastContext/AppContextProvider";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";

export default function Checkout() {
  const { authState, authDispatch } = useContext(AuthContext);
  const { cartState, cartDispatch } = useContext(CartContext);
  console.log(cartState);
  const handleCheckout = () => {
    if (!authState.isAuth) {
      return <Navigate to="/" />;
    }
    console.log(authState.isAuth);
  };
  return (
    <>
      <Box mb="10">
        <Box m="auto" w="75%" mt="2rem">
          <Box>
            <Flex gap={10}>
              <Box width="50%">
                <Container padding={5}>
                  <Heading as="h4" size="xl">
                    My Basket
                  </Heading>

                  <Box
                    mt="10px"
                    border={"1px"}
                    borderColor="black.500"
                    width="500px"
                    pt="5"
                    pl="2"
                    borderRadius={10}
                  >
                    <Text fontSize="sml" fontWeight={"bolder"}>
                      The Sephora Credit Card Program
                    </Text>
                    <Box p="5">
                      <Flex gap={"20"}>
                        <Box>
                          <Text fontSize="md" fontWeight={"medium"}>
                            Save $20.50 on this order when you open and use
                            either Sephora Credit Card today*
                          </Text>
                          <Text fontSize="xs" fontWeight={"medium"}>
                            *Subject to credit approval. Exclusions apply.
                          </Text>
                        </Box>
                        <Box>
                          <Button
                            variant={"outline"}
                            borderRadius="15"
                            colorScheme="black"
                            borderColor={"blackAlpha.900"}
                          >
                            {" "}
                            SEE DETAILS
                          </Button>
                        </Box>
                      </Flex>
                    </Box>
                  </Box>
                </Container>
                <Box bg={"#f6f6f8"} pl={2}>
                  <Text fontSize="xl" fontWeight={"bolder"}>
                    Get It Shipped ({cartState.length}){" "}
                  </Text>
                  <Box p={2}>
                    {cartState.map((el) => (
                      <Box bg={"white"} p={5}>
                        <Flex key={el.id}>
                          <Image src={el.image} width="22"></Image>
                          <Box>
                            <Text fontWeight={"bold"}>{el.title}</Text>
                            <Text>{el.name}</Text>
                            <Text fontWeight={"medium"} color={"red"}>
                              $ {el.price}.00{" "}
                              <Text
                                fontSize="x"
                                fontWeight={"light"}
                                color="black"
                                as="s"
                              >
                                $ {el.price + 5}.00
                              </Text>{" "}
                            </Text>
                          </Box>
                          <Button
                            variant={"outline"}
                            colorScheme="black"
                            p={7}
                            onClick={() => cartDispatch(removeFromCart(el.id))}
                          >
                            Remove
                          </Button>
                        </Flex>
                        <Divider
                          m={2}
                          borderColor="black"
                          orientation="horizontal"
                        />
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
              <Box padding={5} ml={10} mt={10}>
                <Box>
                  <Box border={"1px"} borderColor={"gray"} p={10}>
                    <VStack spacing={"15px"}>
                      <HStack spacing={"100px"}>
                        <Text fontSize="lg">Merchandise Subtotal</Text>
                        <Text fontFamily="3xl" fontWeight={"bolder"}>
                          {" "}
                          ${" "}
                          {Math.round(
                            cartState.reduce((a, c) => a + c.price, 0)
                          )}
                          .00
                        </Text>
                      </HStack>
                      <HStack spacing={"125px"}>
                        <Text>
                          Shipping & Handling <InfoOutlineIcon />
                        </Text>
                        <Text fontFamily="3xl" fontWeight={"bolder"}>
                          Free
                        </Text>
                      </HStack>
                      <HStack spacing={"75px"}>
                        <Text>
                          Estimated Tax & Other Fees <InfoOutlineIcon />
                        </Text>
                        <Text fontFamily="3xl" fontWeight={"bolder"}>
                          TBD
                        </Text>
                      </HStack>

                      <Divider borderColor="black" orientation="horizontal" />
                      <HStack spacing={"110px"}>
                        <Heading as="h4" size="md">
                          Estimated Total
                        </Heading>
                        <Heading as="h4" size="md">
                          ${" "}
                          {Math.round(
                            cartState.reduce((a, c) => a + c.price, 0)
                          )}
                          .00
                        </Heading>
                      </HStack>
                      <Text>*Shipping & taxes calculated during checkout</Text>
                      {
                        <Link to={authState.isAuth ? "/payment" : "/login"}>
                          <Button
                            colorScheme="red"
                            width="100%"
                            borderRadius={"30px"}
                            onClick={handleCheckout}
                          >
                            Checkout Shipped Items
                          </Button>
                        </Link>
                      }
                    </VStack>
                  </Box>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
        <Image src="https://i.imgur.com/iFjQLpd.png"></Image>
      </Box>
    </>
  );
}
