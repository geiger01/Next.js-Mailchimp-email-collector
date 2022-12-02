import { Box, Button, Center, Container, Flex, Heading, Input, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  return (
    <Center>
      <Flex gap='50px' justifyContent='space-between' alignItems='center' flexDir={['column', null, 'row']} maxW='1200px' m='50px 0'>
        <Container>
          <Heading fontSize={['4xl', null, null, '5xl']} mb='20px'>Be the first to know when we launch</Heading>
          <Text color='gray.600' fontSize='18px'>
            We are still building. Subscribe for updates and 20% off when
            we launch. No spam, we promise!
          </Text>
          <Box as='form' mt='30px'>
            <Flex gap='15px'>
              <Input type='email' placeholder="Enter your email..." />
              <Button bg='purple.500' color='white' _hover={{ bg: 'purple.600' }} _active={{ bg: 'purple.700' }}>
                Subscribe
              </Button>
            </Flex>
            <Text color='gray.500' as='small'>Join our pre-launch waitlist!</Text>
          </Box>
        </Container>
        <Container display='flex' justifyContent='center'>
          <Image src={'/hero-image.png'} alt='app mockup' width={470} height={470} />
        </Container>
      </Flex>
    </Center>
  );
}
