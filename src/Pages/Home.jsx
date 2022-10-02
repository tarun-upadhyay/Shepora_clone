import { Box, Center, HStack, Image,Heading,Text, VStack, Flex, Divider } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box >
      <Box p="10">
        
         <Center>
         <HStack spacing={20}>
          <Image
            src={
              "https://www.sephora.com/contentimages/homepage/092022/Homepage/RWD/2022-09-23-hp-slide-slotting-clean-makeup-us-rwd-slice.jpeg?imwidth=545"
            }
          ></Image>
          <Image src="https://www.sephora.com/contentimages/homepage/092022/Homepage/RWD/2022-09-21-hp-slideshow-banner-sept-holiday-preview-value-sets-us-rwd-slice.jpeg?imwidth=545"/>
          </HStack>
         </Center>
        
      </Box>
      <Box ml="20">
        <Heading s='h3' sizea='lg'> Chosen for You</Heading>
        <Box>
            <HStack>
                <Box padding={5} borderColor="red" mt="10px" boxShadow='lg'  rounded='md' bg='white'
               _hover={{boxShadow:'lg', bg: "#f6f6f8"}}>
                    <Image src="https://www.sephora.com/productimages/sku/s2333771-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=166"/>
                   <Center>
                   <VStack>
                   <Text fontSize='3xl' fontWeight={"medium"} mt="10px">Kosas</Text>
                    <Text>Hollywood flawless Filter</Text>
                   </VStack>
                   </Center>
                </Box>
                <Box padding={5} borderColor="red" mt="10px" boxShadow='lg'  rounded='md' bg='white'  _hover={{boxShadow:'lg', bg: "#f6f6f8"}}>
                    <Image src="https://www.sephora.com/productimages/sku/s2244804-main-zoom.jpg?imwidth=166"/>
                   <Center>
                   <VStack>
                   <Text fontSize='3xl' fontWeight={"medium"} mt="10px">Charlotte Tilbury</Text>
                    <Text>Airbrush Flawlelss Longer</Text>
                   </VStack>
                   </Center>
                </Box>
                <Box padding={5} borderColor="red" mt="10px" boxShadow='lg' rounded='md' bg='white'  _hover={{boxShadow:'lg', bg: "#f6f6f8"}}>
                    <Image src="https://www.sephora.com/productimages/sku/s2619252-main-zoom.jpg?imwidth=166"/>
                   <Center>
                   <VStack>
                   <Text fontSize='3xl' fontWeight={"medium"} mt="10px">Sol de Janeiro</Text>
                    <Text>Brazilian Crush Cheirosa</Text>
                   </VStack>
                   </Center>
                </Box>
                <Box padding={5} borderColor="red" mt="10px" boxShadow='lg'  rounded='md' bg='white'  _hover={{boxShadow:'lg', bg: "#f6f6f8"}}>
                    <Image src="https://www.sephora.com/productimages/sku/s2609766-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=166"/>
                   <Center>
                   <VStack>
                   <Text fontSize='3xl' fontWeight={"medium"} mt="10px">MERIT</Text>
                    <Text>Bronze Balm Sheer</Text>
                   </VStack>
                   </Center>
                </Box>
                <Box padding={5} borderColor="red" mt="10px" boxShadow='lg' rounded='md' bg='white'  _hover={{boxShadow:'lg', bg: "#f6f6f8"}}>
                    <Image src="https://www.sephora.com/productimages/sku/s2592251-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=166"/>
                   <Center>
                   <VStack>
                   <Text fontSize='3xl' fontWeight={"medium"} mt="10px">Amika</Text>
                    <Text>The Wizard Detangling Hair Primer </Text>
                   </VStack>
                   </Center>
                </Box>
            </HStack>
        </Box>
      </Box>
      <Box m={10} ml="20">
        <Heading s='h3' sizea='lg'> Just Dropped</Heading>
        <Box>
            <HStack>
                <Box padding={5} borderColor="red" mt="10px" boxShadow='lg'  rounded='md' bg='white'
               _hover={{boxShadow:'lg', bg: "#f6f6f8"}}>
                    <Image src="https://www.sephora.com/productimages/sku/s2596567-main-zoom.jpg?imwidth=166"/>
                   <Center>
                   <VStack>
                   <Text fontSize='3xl' fontWeight={"medium"} mt="10px">Charlotte Tilbury</Text>
                    <Text>Beautiful Skin Medium to Full </Text>
                    <Text>Coverage Radiant</Text>
                   </VStack>
                   </Center>
                </Box>
                <Box padding={5} borderColor="red" mt="10px" boxShadow='lg'  rounded='md' bg='white'  _hover={{boxShadow:'lg', bg: "#f6f6f8"}}>
                    <Image src="https://www.sephora.com/productimages/sku/s2244804-main-zoom.jpg?imwidth=166"/>
                   <Center>
                   <VStack>
                   <Text fontSize='3xl' fontWeight={"medium"} mt="10px">Charlotte Tilbury</Text>
                    <Text>Airbrush Flawlelss Longer</Text>
                   </VStack>
                   </Center>
                </Box>
                <Box padding={5} borderColor="red" mt="10px" boxShadow='lg' rounded='md' bg='white'  _hover={{boxShadow:'lg', bg: "#f6f6f8"}}>
                    <Image src="https://www.sephora.com/productimages/sku/s2407328-main-zoom.jpg?imwidth=166"/>
                   <Center>
                   <VStack>
                   <Text fontSize='3xl' fontWeight={"medium"} mt="10px">Charlotte Tilbury</Text>
                    <Text>Airbrush flawless Finish</Text>
                   </VStack>
                   </Center>
                </Box>
                <Box padding={5} borderColor="red" mt="10px" boxShadow='lg'  rounded='md' bg='white'  _hover={{boxShadow:'lg', bg: "#f6f6f8"}}>
                    <Image src="https://www.sephora.com/productimages/sku/s2514586-main-zoom.jpg?imwidth=166"/>
                   <Center>
                   <VStack>
                   <Text fontSize='3xl' fontWeight={"medium"} mt="10px">NARS</Text>
                    <Text>Bronze Balm Sheer</Text>
                   </VStack>
                   </Center>
                </Box>
                <Box padding={5} borderColor="red" mt="10px" boxShadow='lg' rounded='md' bg='white'  _hover={{boxShadow:'lg', bg: "#f6f6f8"}}>
                    <Image src="https://www.sephora.com/productimages/sku/s2084408-main-zoom.jpg?imwidth=166"/>
                   <Center>
                   <VStack>
                   <Text fontSize='3xl' fontWeight={"medium"} mt="10px">Too Faced</Text>
                    <Text>Born This Way Super Coverage </Text>
                   </VStack>
                   </Center>
                </Box>
            </HStack>
        </Box>
      </Box>
      <Box>
       <Center>
       <Image src="https://i.imgur.com/be8PdUb.png"/>
       </Center>
      </Box>
      
    </Box>
  );
}
