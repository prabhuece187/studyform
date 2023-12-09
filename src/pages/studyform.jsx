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
    Input,
    Checkbox,
    RadioGroup,
    Radio,    
  } from "@chakra-ui/react";

  import { ArrowBackIcon , AddIcon } from "@chakra-ui/icons";
  import { useForm, Controller } from "react-hook-form";
  import { Select } from "chakra-react-select";

  const states = [ 
    {
        value: 'Al',
        label: 'Alabama'
    },
    {
        value: 'Ak',
        label: 'Alaska'
    },
    {
        value: 'Az',
        label: 'Arizona'
    },    
  ];

  const StudyForm = () => {

    const { 
        register, 
        handleSubmit,
        formState :{errors},
        control,
        } = useForm();
    const onFormSubmit = (data) => console.log(data);


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
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <Box bg='white'  p={4}  style={{borderRadius:"10px"}}>
                <Stack spacing={4}>
                    <FormControl isInvalid={errors?.name} >
                        <FormLabel color="gray.600">Name</FormLabel>
                        <Input type='text' placeholder="Name" {
                            ... register("name" ,{required:"Name Field Is Empyt"})
                        }/>
                        <FormErrorMessage>{errors?.name && errors.name.message}</FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={errors?.age}>
                        <FormLabel color="gray.600">Age</FormLabel>
                        <Input type='number' placeholder="Age" {
                            ... register("age" ,{
                                required:{
                                    value :true,
                                    message: "Age Field Is Empyt"
                                },
                                min:{
                                    value :18,
                                    message: "Age must be greater than"
                                },
                            })
                        }/>
                        <FormErrorMessage>{errors?.age && errors.age.message}</FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={errors.date_of_birth} >
                        <FormLabel color="gray.600">Date</FormLabel>
                        <Input type='date' {
                            ... register("date_of_birth" ,{required:"Enter The date"})
                        }/>
                        <FormErrorMessage>{errors.date_of_birth && errors.date_of_birth.message}</FormErrorMessage>
                    </FormControl>

                    

                    <Controller
                    control={control}
                    name="select_state"
                    rules={{
                        required:"Select the state plz",
                    }}
                    render={({
                        field:{ onChange, onBlur, value,name, ref},
                    }) => (
                        <FormControl isInvalid={errors.select_state} >
                        <FormLabel color="gray.600">State</FormLabel>
                        <Select 
                            name={name}
                            onBlur={onBlur}
                            value={value}
                            ref={ref}
                            options={states}
                            getOptionLabel={(e)=> e.label}
                            getOptionValue={(e)=> e.value}
                            onChange={(e) => {
                                onChange(e);
                            }}
                            placeholder="select state"
                            closeMenuOnSelect={true}
                        />
                        <FormErrorMessage>{errors.select_state && errors.select_state.message}</FormErrorMessage>
                    </FormControl>
                    )}
                    />

                    <FormControl isInvalid={errors.language} >
                        <FormLabel color="gray.600">Language</FormLabel>
                            <Stack spacing={5} direction={"row"}>
                                <Checkbox 
                                    size="md"
                                    colorScheme="blue" 
                                    value="tamil"
                                    {
                                    ... register("language" ,{required:"plz select language"})
                                }>
                                    Tamil
                                </Checkbox>
                                <Checkbox 
                                    size="md"
                                    colorScheme="blue" 
                                    value="english"
                                    {
                                    ... register("language" ,{required:"plz select language"})
                                }>
                                    English
                                </Checkbox>
                                <Checkbox 
                                    size="md"
                                    colorScheme="blue" 
                                    value="spanish"
                                    {
                                    ... register("language" ,{required:"plz select language"})
                                }>
                                    Spanish
                                </Checkbox>
                            </Stack>
                        <FormErrorMessage>{errors.language && errors.language.message}</FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={errors.gender} >
                        <FormLabel color="gray.600">Gender</FormLabel>
                            <RadioGroup>
                                <Stack  direction={"row"}>
                                    <Radio 
                                        value="male"
                                        {
                                        ... register("gender" ,{required:"plz select gender"})
                                    }>
                                        Male
                                    </Radio>
                                    <Radio  
                                        value="female"
                                        {
                                        ... register("gender" ,{required:"plz select gender"})
                                    }>
                                        Female
                                    </Radio>
                                    <Radio 
                                        value="other"
                                        {
                                        ... register("gender" ,{required:"plz select gender"})
                                    }>
                                        Other
                                    </Radio>
                                </Stack>
                            </RadioGroup>
                        <FormErrorMessage>{errors.gender && errors.gender.message}</FormErrorMessage>
                    </FormControl>



                    <Button colorScheme="blue" type="submit">
                       Submit
                    </Button>
                </Stack>
            </Box>
        </form>

        </>
    );
  };

  export default StudyForm;