import {
  Box,
  Center,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Flex,
  Text,
} from '@chakra-ui/react';

import ContactUs from './ContactUs';

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'md'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box bg="gray.800" color={'gray.200'}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}
        >
          <Flex spacing={4}>
            <Center>
              <Text fontSize={'sm'}>
                © 2021 G. J. Lienhard. All rights reserved
              </Text>
            </Center>
          </Flex>
          <Stack align={'flex-start'}>
            <ListHeader>About Us</ListHeader>
            <Text>
              Lienhard Law is a business law firm based in San Antonio, Texas
              with a mission of providing personalized and strategic services.
            </Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Quick Links</ListHeader>
            <Link href={'/'}>Home</Link>
            <Link href={'/about'}>About</Link>
            <Link href={'#'}>Disclaimer</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Practice Areas</ListHeader>
            <Link href={'/practice-areas/family-law'}>Family Law</Link>
            <Link href={'/practice-areas/wills-estates'}>Wills & Estates</Link>
            <Link href={'/practice-areas/property'}>Real Property</Link>
            <Link href={'#'}>Bird Law</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Contact Info </ListHeader>
            <Text>Address: 123 Fake Street</Text>
            <Text>Phone (555) 555-5555</Text>
            <Text>Fax: (555) 555-5555</Text>
            <ContactUs />
            <Text>Hours: Mon - Fri: 08:30am - 05:30pm</Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
