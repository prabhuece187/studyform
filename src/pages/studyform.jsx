import React from "react";
import { Link } from "react-router-dom";

import {
    Button,
    Flex,
    Heading,
    Spacer,
    Box,
    Stack,
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input
  } from "@chakra-ui/react";

  import { ArrowBackIcon , AddIcon } from "@chakra-ui/icons";


  const StudyForm = () => {
    return(
        <>
        <Box bg='white'  p={3} mb={5}  style={{borderRadius:"10px"}}>
          <Flex alignItems="center" gap={2}>
            <Link to="">
                <ArrowBackIcon w={6} h={6} />
            </Link>

            <Heading as="h3" size="lg" color="gray.600">
              STUDY FORM
            </Heading>

            <Spacer/>

            <Link to="">
                <Button colorScheme="blue">
                    <AddIcon w={4} h={4}  pr={2}/>
                    Add Districts
                </Button>   
            </Link>

          </Flex>
        </Box>
        <form>
            <Box bg='white'  p={4}  style={{borderRadius:"10px"}}>
                <Stack spacing={4}>
                    <FormControl isInvalid={true}>
                        <FormLabel color="gray.600">Name</FormLabel>
                        <Input type='text' placeholder="Name" />
                        <FormErrorMessage>Error Message</FormErrorMessage>
                    </FormControl>
                </Stack>
            </Box>
        </form>

        </>
    );
  };

  export default StudyForm;