import { Box, Center, HStack, Image,Heading,Text, VStack, Flex, Divider } from "@chakra-ui/react";

export const Footer = ()=>{
    return(
        <>
        <Box bg={"black"}>
        <Center>
        <Box bg={"black"} color="white" p={5}>
            <Flex gap={40}>
               <Box>
                <Heading as='h6' size='xs'>Find a Store</Heading>
                <Text fontSize='sm'> Choose Your Store</Text>
               </Box>
               <Box>
                <Heading as='h6' size='xs'>Live Beauty Help</Heading>
                <Text fontSize='sm'> Available</Text>
               </Box>
               <Box>
                <Heading as='h6' size='xs'>Get The App</Heading>
                <Text fontSize='sm'>Text "APP" to 36611</Text>
               </Box>
               <Box>
                <Heading as='h6' size='xs'>Get Sephora Text Alerts</Heading>
                <Text fontSize='sm'> Sign Up Now</Text>
               </Box>
               <Box>
                <Heading as='h6' size='xs'>Sephora Credit Card Program</Heading>
                <Text fontSize='sm'> Want 25% off your shopping</Text>
               </Box>
            </Flex>
            <Divider borderColor="white" mt={5}
                          orientation="horizontal"/>
        </Box>
        
        </Center>
        <Image src="https://i.imgur.com/L5xKABJ.png"/>
      </Box>
        </>
    )
}