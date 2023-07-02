import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <HStack>
      <VStack>
        <Box bg="white" borderRadius="md">
          <Image borderRadius="md" src={imageSrc} />
          <Heading  p={4} size="md" color="black">{title}</Heading>
          <Text p={4} color="gray">{description}</Text>
          <Text p={4} color="black">See More   <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
        </Box>
      </VStack>
    </HStack>
  );
};

export default Card;
