import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,Stack,Checkbox,CheckboxGroup,
} from "@chakra-ui/react";

export default function Slidebar() {
  return (
    <Accordion >
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Text>Pickup & Delivery</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          <CheckboxGroup
            colorScheme="gray"
            defaultValue={["naruto", "kakashi"]}
          >
            <Stack spacing={[1, 5]} direction={["column", "column"]}>
              <Checkbox value="naruto">Pickup: Choose a Store</Checkbox>
              <Checkbox value="sasuke">Same-Day Delivery</Checkbox>
              
            </Stack>
          </CheckboxGroup>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
             <Text>Coverage</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          <CheckboxGroup
            colorScheme="gray"
            defaultValue={["naruto", "kakashi"]}
          >
            <Stack spacing={[1, 5]} direction={["column", "column"]}>
              <Checkbox value="naruto">Light</Checkbox>
              <Checkbox value="naruto">Medium</Checkbox>
              <Checkbox value="naruto">Full</Checkbox>
              <Checkbox value="naruto">Sheer</Checkbox>
              <Checkbox value="sasuke">Buildable</Checkbox>
              
            </Stack>
          </CheckboxGroup>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
             <Text>Rating</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          <CheckboxGroup
            colorScheme="gray"
            defaultValue={["naruto", "kakashi"]}
          >
            <Stack spacing={[1, 5]} direction={["column", "column"]}>
              <Checkbox value="naruto">Light</Checkbox>
              <Checkbox value="naruto">Medium</Checkbox>
              <Checkbox value="naruto">Full</Checkbox>
              <Checkbox value="naruto">Sheer</Checkbox>
              <Checkbox value="sasuke">Buildable</Checkbox>
              
            </Stack>
          </CheckboxGroup>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
