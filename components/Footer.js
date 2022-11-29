import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaChartArea, FaTwitter, FaEthereum, FaTelegram } from "react-icons/fa";
import NextLink from "next/link";
import NextImage from "next/image";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Heading
          textAlign={useBreakpointValue({ base: "center", md: "left" })}
          fontFamily={"heading"}
          color={useColorModeValue("teal.800", "white")}
          as="h2"
          size="lg"
        >
          <Box
            as={"span"}
            color={useColorModeValue("teal.400", "teal.300")}
            position={"relative"}
            zIndex={10}
          >
            <NextImage
              src="/static/logo.png"
              alt="Booster inu"
              width="75"
              height="75"
            />
          </Box>
        </Heading>
        <Stack direction={"row"} spacing={6}>
          <NextLink href={"/"}>Whitepaper (soon)</NextLink>
          <Link
            href={
              "https://etherscan.io"
            }
            isExternal
          >
            Contract
          </Link>
          <Link href={"mailto:boosterinu@gmail.com"} isExternal>
            Inquiries
          </Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>🌐 Made with ❤️ by the Booster Inu team 🧪</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Telegram"} href={"https://t.me/boosterinu"}>
              {" "}
              <FaTelegram />
            </SocialButton>
            <SocialButton
              label={"Twitter"}
              href={"https://twitter.com/boosterinu"}
            >
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"Chart"} href={"https://dextools.io"}>
              <FaChartArea />
            </SocialButton>
            <SocialButton
              label={"Uniswap"}
              href={"https://www.uniswap.app"}
            >
              <FaEthereum />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
