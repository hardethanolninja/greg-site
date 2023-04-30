import React from 'react';

import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from '@chakra-ui/react';

// import { FaGavel } from 'react-icons/fa';
import { GoLaw } from 'react-icons/go';

export default function Page(props) {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'5xl'} textAlign={'center'}>
        <Heading fontSize={'2xl'}>{props.subtitle}</Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
          {props.smallText}
        </Text>
      </Stack>

      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: props.features.length }}
          spacing={10}
        >
          {props.features.map(feature => (
            <HStack key={feature.id} align={'top'}>
              <Box color={'blue.500'} px={2}>
                <Icon boxSize={5} as={GoLaw} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={'gray.700'}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
