import { Box, Container, SimpleGrid, Heading, Image } from "@chakra-ui/react";

interface ImagesGridProps {
  images: [];
  loading: boolean;
}

const API_BASE_URL = "https://assignment.api.hanzala.co.in";

const ImagesGrid = ({ images, loading }: ImagesGridProps) => {
  return (
    <Box my="8">
      <Container maxW="container.xl">
        {images?.length || !loading ? (
          <SimpleGrid columns={{ sm: 2, md: 3 }} spacing="4">
            {images.map((data: any, index: number) => (
              <Box position="relative" key={index}>
                <Image
                  src={`${API_BASE_URL}/uploads/${data?.imagePath}`}
                  alt={data?.comment}
                  loading="lazy"
                  height="full"
                  width="full"
                  rounded="md"
                />
                <Box
                  position="absolute"
                  bg="blackAlpha.400"
                  bottom={0}
                  right={0}
                  left={0}
                  p="3"
                >
                  <Heading
                    as="h4"
                    fontWeight="semibold"
                    textColor="white"
                    size="sm"
                  >
                    {data?.comment}
                  </Heading>
                </Box>
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
