import TopBanner from './TopBanner';

import photo from './images/photo.jpg';

import {
  Box,
  SimpleGrid,
  Image,
  Heading,
  Text,
  Stack,
  Container,
  VStack,
} from '@chakra-ui/react';

export default function About(props) {
  return (
    <>
      <TopBanner text={props.imgText} img={props.img} />
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={'5xl'} textAlign={'center'}>
          <Heading fontSize={'2xl'}>About Greg</Heading>
          <Text color={'gray.600'} fontSize={'xl'}>
            This is stuff about greg
          </Text>
        </Stack>
        <SimpleGrid
          minChildWidth="300px"
          spacingX="40px"
          spacingY="20px"
          margin="20px"
        >
          <Image
            objectFit="cover"
            borderRadius="15%"
            src={photo}
            alt="A photo of Mr. Lienhard"
            boxShadow="base"
          />
          <VStack align={'start'}>
            <Text fontWeight={600}>Title Text</Text>
            <Text color={'gray.600'}>
              Greg Lienhard was born in Concord, Massachusetts, and moved to
              Texas as a child. He graduated from high school in Texas and
              earned his undergraduate degree in history from Schreiner
              University in Kerrville, Texas. Mr. Lienhard completed his
              doctorate in Jurisprudence at St. Mary's University in San
              Antonio, Texas, and passed his bar in April 2019.
            </Text>
          </VStack>
          <VStack align={'start'}>
            <Text fontWeight={600}>Title Text</Text>
            <Text color={'gray.600'}>
              While in graduate school, Mr. Lienhard did pro bono work in family
              law and worked in a law office managing insurance claims.
              Currently Mr. Lienhard works as an attorney with Wilson County. He
              has extensive experience in property law, family law, wills and
              estates, mediation and civil litigation.
            </Text>
          </VStack>
        </SimpleGrid>
      </Box>
    </>
  );
}
