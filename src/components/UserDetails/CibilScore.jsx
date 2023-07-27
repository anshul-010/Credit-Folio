import {
  Box,
  Button,
  CircularProgress,
  CircularProgressLabel,
  HStack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const CibilScore = () => {
  return (
    <div>
      <Box p='1rem' m='2rem auto' maxW='930px' minW='300px'>
        <HStack borderRadius='6px' border='solid 1px #ddd' p='1.5rem' justifyContent='space-between' flexWrap='wrap'>
          <Box>
            <Text as='p' fontWeight='bold'>
              You are eligible for unlimited CIBIL Score and reports
            </Text>
            <Text as='p'>
              Monitor your credit and improve your loan eligibility.
            </Text>
          </Box>
          <Button m='0 2rem' fontWeight='500' color='#fff' bg='#3DAEEE'>
            GET UNLIMITED ACCESS NOW
          </Button>
        </HStack>
      </Box>

      <HStack
        borderRadius='6px'
        border='solid 1px #ddd'
        p='10px'
        minW='500px'
        maxW='900px'
        m='1rem auto'
        alignItems='flex-start'
        justifyContent='space-between'
      >
        <Box  borderRight={"solid 1.5px #ddd"} p={"1rem"} pr='2.4rem'>
          <Text m='10px' as='h2' fontSize='20px'>CIBIL Score</Text>
          <CircularProgress color='#B9CD5D' m='5px' value={77.4} size='150px'>
            <CircularProgressLabel color='#B9CD5D'>774</CircularProgressLabel>
          </CircularProgress>
          <Box p='10px'>
            <HStack mb='1rem'>
              <Link style={{fontSize:'14px'}}>See my Score Analysis</Link>
              <Link style={{fontSize:'14px'}}>View your Free CIBIL Report</Link>
            </HStack>
            <HStack>
              <Link style={{ color: "#0078D4", fontSize: "12px" }}>
                Watch this video
              </Link>
              <Text color={"#0078D4"} fontSize='12px' as='p'>
                to know more about CIBIL Score
              </Text>
            </HStack>
          </Box>
        </Box>

        <Box p='10px' w='450px' display='flex' flexDirection={"column"} gap={"20px"}>
          <Text as='h2'>Where You Stand</Text>
          <Text fontSize='14px' as='p'>
            See how your CIBIL Score compares with the rest of the
            self-monitoring consumers.
          </Text>
          <Button p={"10px 20px"} w='fit-content' fontWeight='500' color='#fff' bg={"#3DAEEE"}>
            KNOW MORE
          </Button>
        </Box>
      </HStack>
    </div>
  );
};

export default CibilScore;
