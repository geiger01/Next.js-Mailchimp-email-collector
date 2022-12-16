import { ChangeEvent, FormEvent, useState } from "react";
import { Button, Center, Container, Flex, Heading, Input, Text, useToast } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  const [emailInput, setEmailInput] = useState('');
  const [buttonLoading, setButtonLoading] = useState(false);
  const toast = useToast();

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!emailInput) {
      return toast({
        description: 'Email is required',
        status: 'error',
      });
    }

    setButtonLoading(true);
    try {
      const res = await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email: emailInput }) });
      const data = await res.json();

      if (data.success) {
        toast({
          title: 'Joined successfully.',
          description: "Thank you for joining the waitlist!",
          status: 'success',
        });
      } else {
        throw new Error(data?.error || 'Something went wrong, please try again later');
      }

    } catch (e) {
      toast({
        description: (e as Error).message,
        status: 'error',
      });
    }

    setEmailInput('');
    setButtonLoading(false);
  };

  return (
    <Center>
      <Flex gap='50px' justifyContent='space-between' alignItems='center' flexDir={['column', null, 'row']} maxW='1200px' m='50px 0'>
        <Container>
          <Heading fontSize={['4xl', null, null, '5xl']} mb='20px'>Be the first to know when we launch</Heading>
          <Text color='gray.600' fontSize='18px' mb='30px'>
            We are still building. Subscribe for updates and 20% off when
            we launch. No spam, we promise!
          </Text>
          <form onSubmit={handleFormSubmit}>
            <Flex gap='15px'>
              <Input
                type='email'
                placeholder="Enter your email..."
                value={emailInput}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmailInput(e.target.value)}
              />
              <Button isLoading={buttonLoading} type='submit' bg='purple.500' color='white' _hover={{ bg: 'purple.600' }} _active={{ bg: 'purple.700' }}>
                Subscribe
              </Button>
            </Flex>
            <Text color='gray.500' as='small'>Join our pre-launch waitlist!</Text>
          </form>
        </Container>
        <Container display='flex' justifyContent='center'>
          <Image src={'/hero-image.png'} alt='app mockup' width={470} height={470} />
        </Container>
      </Flex>
    </Center>
  );
}
