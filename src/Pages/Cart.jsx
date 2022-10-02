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
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  MenuItemOption,
  ModalFooter,
  MenuDivider,
  Flex,
  Heading,
  useDisclosure,
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

export default function Cart() {
  const { cartState, cartDispatch } = useContext(CartContext);
  const [bagColor, setBagColor] = useState(false);
  const { state } = useContext(AppContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAddTobag = (addedTobag, onClose) => {
    cartDispatch(addToCart(addedTobag));
    setBagColor(true);
    onClose();
  }
  const itemAlreadyExists = (currentItem, cartState, onOpen) => {
    onOpen();
    if (cartState.find((el) => el.id === currentItem.id)) {
      return true;
    }
    return false;
  };
  const [value, setValue] = useState(false);
  return (
    <>
      <Box>
        <Box m="auto" w="90%" >
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
                {/* <Link to="/Checkout"> */}
                <Button
                  p={5}
                  bgColor={bagColor ? "blue" : "#cf112c"}
                  variant="outline"
                  color={"white"}
                  borderRadius={"5%"}
                  w="250px"
                  // disabled={}
                  onClick={() => {
                    itemAlreadyExists(
                      state.singlepagedata[0],
                      cartState,
                      onOpen
                    );
                  }}
                >
                  {bagColor ? "Added" : "Add to Basket"} {value && "For"}{" "}
                  {value}{" "}
                </Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Checkout</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb="1rem">
                      <Flex ml="1">
                        <Image src={state.singlepagedata[0]?.image}></Image>
                        <Box>
                          <Text fontSize="3xl">
                            {state.singlepagedata[0]?.name}
                          </Text>
                        </Box>
                      </Flex>
                    </ModalBody>

                    <ModalFooter>
                      <Button
                        colorScheme="blue"
                        mr={3}
                        onClick={() =>
                          handleAddTobag(state.singlepagedata[0], onClose)
                        }
                      >
                        Add to Bag
                      </Button>
                      <Link to={"/checkout"}>
                        <Button
                          variant="outline"
                          onClick={() => {
                            handleAddTobag(state.singlepagedata[0],onClose);
                          }}
                          colorScheme="black"
                        >
                          Checkout
                        </Button>
                      </Link>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
                {/* , */}
                {/* </Link> */}
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
