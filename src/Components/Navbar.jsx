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
} from "@chakra-ui/react";
import styles from "./Navbar.module.css";
import {
  Search2Icon,
  InfoOutlineIcon,
  ChevronDownIcon,
  ChatIcon,AtSignIcon,
} from "@chakra-ui/icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {fasolidfabagshopping } from '@fortawesome/pro-solid-svg-icons'
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
          <Flex >
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
                  <AtSignIcon/>
                </Box>
                <Box>
                  <Text>Sign In</Text>
                  <Text fontSize="xs">for FREE Shipping</Text>
                </Box>
              </Flex>
              <FontAwesomeIcon icon={fasolidfabagshopping} />
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
