import { Box, Container, SimpleGrid, Heading, Image } from "@chakra-ui/react";

interface ImagesGridProps {
  images: [];
}

const API_BASE_URL = "https://assignment.api.hanzala.co.in";

const ImagesGrid = ({ images }: ImagesGridProps) => {
  return (
    <Box my="8">
      <Container maxW="container.xl">
        {images?.length ? (
          <SimpleGrid columns={3} spacing="4">
            {images.map((data: any, index: number) => (
              <Box bg="blackAlpha.400" key={index}>
                <Image
                  src={`${API_BASE_URL}/uploads/${data?.imagePath}`}
                  alt={data?.comment}
                  loading="lazy"
                  height="full"
                  width="full"
                  rounded="md"
                />
                <h4>{data?.comment}</h4>
              </Box>
            ))}
          </SimpleGrid>
        ) : (
          <Heading as="h4" fontWeight="semibold" size="sm">
            No Data found.
          </Heading>
        )}
      </Container>
    </Box>
  );
};

export default ImagesGrid;
