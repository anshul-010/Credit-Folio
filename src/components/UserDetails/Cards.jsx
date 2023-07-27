import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import { Box, HStack, Heading, Stack, Text } from "@chakra-ui/layout";
import React from "react";

const Cards = () => {
  return (
    <div style={{ margin: "3rem 0" }}>
      <Stack maxW='100%'  gap='3rem' justifyContent='center'>
        <HStack w='fit-content' m='auto' flexWrap='wrap' gap='3.5rem'>
          <Card h='255px' border='solid 1px #ddd'>
            <CardHeader>
              <Heading size='md'>Refresh Center</Heading>
            </CardHeader>
            <CardBody>
              <Text fontWeight='500'>
                Stay connected to your latest CIBIL score that lenders check.
              </Text>
            </CardBody>
            <CardFooter>
              <Button color='#fff' bg='#FF7226'>
                REFRESH NOW
              </Button>
            </CardFooter>
          </Card>

          <Card  border='solid 1px #ddd'>
            <CardHeader>
              <Heading size='md'> Credit Summary</Heading>
            </CardHeader>
            <CardBody>
              <Text>Get a consolidated view of all your loan accounts,</Text>
              <Text>
                credit cards, lender enquiries and your payment history
              </Text>
              <Text> all in one place.</Text>
            </CardBody>
            <CardFooter>
              <Button color='#fff' bg='#FF7226'>
                Know more
              </Button>
            </CardFooter>
          </Card>
        </HStack>

        <Box minW='77%' m='auto'>
          <Card  border='solid 1px #ddd'>
            <CardHeader>
              <Heading size='md'>Score History</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                Find out how your CIBIL score has changed over a period of time.
              </Text>
            </CardBody>
            <CardFooter>
              <Button color='#fff' bg='#FF7226'>
                Know more
              </Button>
            </CardFooter>
          </Card>
        </Box>
      </Stack>
    </div>
  );
};

export default Cards;
