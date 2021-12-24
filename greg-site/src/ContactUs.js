import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  Button,
  Textarea,
  Box,
  HStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  FormHelperText,
  useToast,
} from '@chakra-ui/react';

import { PhoneIcon, EmailIcon } from '@chakra-ui/icons';

import { useDisclosure } from '@chakra-ui/react';

import { useLayoutEffect, useState } from 'react';

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

export default function ContactUs() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [width] = useWindowSize();

  function Toast() {
    const toast = useToast();
    return (
      <Button
        onClick={() => {
          toast({
            title: 'Message Sent',
            description: `Thank you! I will return your message shortly`,
            status: 'success',
            duration: '6000',
            isClosable: true,
          });
          onClose();
        }}
      >
        Send
      </Button>
    );
  }

  return (
    <>
      <Button size="sm" colorScheme="blue" onClick={onOpen}>
        {width > 800 ? 'Contact me for a FREE consultation' : 'Contact me'}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contact Me</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <HStack spacing="10px">
                <FormControl id="first-name" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input placeholder="First Name"></Input>
                </FormControl>
                <FormControl id="last-name" isRequired>
                  <FormLabel>Last Name</FormLabel>
                  <Input placeholder="Last Name"></Input>
                </FormControl>
              </HStack>
              <FormControl id="phone-number" isRequired>
                <FormLabel>Phone Number</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<PhoneIcon color="gray.300" />}
                  />
                  <Input placeholder="Phone Number"></Input>
                </InputGroup>
              </FormControl>
              <FormControl id="email-address" isRequired>
                <FormLabel>Email Address</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<EmailIcon color="gray.300" />}
                  />
                  <Input placeholder="Email Address"></Input>
                </InputGroup>
              </FormControl>
              <FormControl id="description" isRequired>
                <FormLabel>Description</FormLabel>
                <Textarea placeholder="What can I help you with?"></Textarea>
                <FormHelperText>
                  I will never share your information with anyone
                </FormHelperText>
              </FormControl>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Toast />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
