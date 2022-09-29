import {
  Box,
  Text,
  Highlight,
  Modal,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Image,
  InputLeftElement,
  Input,
  InputGroup,
  ModalCloseButton,
  useDisclosure,
  Flex,
  Tooltip,
  Spacer,
  Container,
} from "@chakra-ui/react";
import styles from "./Navbar.module.css";
import {
  Search2Icon,
  InfoOutlineIcon,
  ChevronDownIcon,
  ChatIcon,
  AtSignIcon,
} from "@chakra-ui/icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { } from '@fortawesome/fontawesome-free-solid'
export function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box>
        <Box bg="#c0dcf1">
          <Box
            bg="#c0dcf1"
            h="50px"
            m="auto"
            alignItems="center"
            w="50%"
            pt="2"
          >
            <Text onClick={onOpen} id={styles.top_detils}>
              Get FREE shipping on all orders when you join Beauty Insider.
              Exclusions/terms apply.
              <Highlight query="SEE" styles={{ py: "1", fontWeight: "normal" }}>
                SEE DETAILS
              </Highlight>{" "}
            </Text>
            <Modal onClose={onClose} isOpen={isOpen} isCentered>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Details</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text>
                    We offer FREE Standard 1-3 Day Shipping on all US and Canada
                    merchandise orders for Beauty Insider members, no minimum
                    purchase required. Guest checkout orders receive FREE
                    standard 1–3 day shipping with $50 minimum purchase. The
                    standard shipping benefit is not valid on international
                    shipping or on Kohls.com. You must check out with a valid
                    Beauty Insider account to receive the standard shipping
                    Benefit. Benefit has no cash value. No adjustments on
                    previous purchases. Benefit is non-transferable. Benefit
                    subject to change, alteration, or termination by Sephora in
                    its sole discretion at any time. To sign up for our free
                    loyalty program, visit our Beauty Insider Page.▸
                  </Text>
                </ModalBody>
                <ModalFooter>
                  <Button onClick={onClose}>Close</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
        </Box>
        <Box m="auto" w="80%">
          <Flex>
            <Box ml="-3em">
              <img
                src="https://i.imgur.com/GSFnQtR.jpg"
                id={styles.logo}
                alt=""
                srcset=""
              />
            </Box>

            <Spacer />
            <InputGroup mt="6" ml="-10rem" w="30%">
              <InputLeftElement
                pointerEvents="none"
                children={<Search2Icon color="gray.300" />}
              />
              <Input
                type="tel"
                placeholder="Search"
                bg="#f6f6f8 "
                borderRadius="20"
              />
            </InputGroup>
            <Spacer />
            <Box>
              <Box ml="-15rem" mt="1.7rem">
                <Flex justifyContent="center" alignItems="center" gap="2">
                  <InfoOutlineIcon />
                  <Menu>
                    {({ isOpen }) => (
                      <>
                        <MenuButton
                          isActive={isOpen}
                          as={Button}
                          rightIcon={<ChevronDownIcon />}
                        >
                          {isOpen ? "Stores" : "Stores & Services"}
                        </MenuButton>
                        <MenuList>
                          <MenuItem>Services</MenuItem>
                          <MenuItem>Store Event</MenuItem>
                          <MenuItem>What is new in Store</MenuItem>
                        </MenuList>
                      </>
                    )}
                  </Menu>
                </Flex>
              </Box>
              <Spacer />
              <Box ml="8rem" mt="-2rem">
                <Flex gap="1rem">
                  <ChatIcon />
                  <Tooltip hasArrow label="Our Community page" color="#f6f6f8">
                    <Text c="black">Community</Text>
                  </Tooltip>
                </Flex>
              </Box>
            </Box>
            <Spacer />
            <Box mr="1rem" mt="2rem">
              <Flex gap="10px">
                <Box>
                  <AtSignIcon />
                </Box>
                <Box>
                  <Text>Sign In</Text>
                  <Text fontSize="xs">for FREE Shipping</Text>
                </Box>
                <Container>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 800">
                    <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 96c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24zm200-24c0 13.3-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24z" />
                  </svg>
                </Container>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Box>
          <Box  bg="black" p="15px">
            <Flex gap="42px" w="80%" m="auto" > 
              <Box>
                <Text fontSize="sm" color="white" >New</Text>
              </Box>
              <Box>
                <Text fontSize="sm" color="white" > Brands</Text>
              </Box>
              <Box>
                <Text fontSize="sm" color="white" >Makeup</Text>
              </Box>
              <Box>
                <Text fontSize="sm" color="white" >Skincare</Text>
              </Box>
              <Box>
                <Text fontSize="sm" color="white" >Hair</Text>
              </Box>
              <Box>
                <Text fontSize="sm" color="white" >Fragrance</Text>
              </Box>
              <Box>
                <Text fontSize="sm" color="white" >Tools & Brushes</Text>
              </Box>
              <Box>
                <Text fontSize="sm" color="white" >Bath & Body</Text>
              </Box>
              <Box>
                <Text fontSize="sm" color="white" >Mini Size</Text>
              </Box>
              <Box>
                <Text fontSize="sm" color="white" >Gifts</Text>
              </Box>
              <Box>
                <Text fontSize="sm" color="white" >Beauty Under $20</Text>
              </Box>
              <Box>
                <Text fontSize="sm" color="white" >Sale & Offers</Text>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </>
  );
}
