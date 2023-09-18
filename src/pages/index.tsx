import UploadImageModal from "./components/UploadImageModal";
import ImagesGrid from "./components/ImagesGrid";
import Head from "next/head";
import { useState, useEffect } from "react";
import {
  Button,
  Box,
  Container,
  Heading,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import axios from "axios";

interface ImageDataTypes {
  image: any;
  comment: string;
}

const API_BASE_URL = "http://localhost:5000";

const Home = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [imageData, setImageData] = useState<ImageDataTypes>({
    image: null,
    comment: "",
  });
  const [images, setImages] = useState<any>([]);

  const handleClose = () => {
    setIsOpenModal(false);
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setImageData({
      ...imageData,
      [name]: value,
    });
  };

  const fetchImages = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/getImages`);
      setImages(response.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", imageData.image);
    formData.append("comment", imageData.comment);

    try {
      await axios.post(`${API_BASE_URL}/api/addImage`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      fetchImages();
      setIsOpenModal(false);
    } catch (error) {
      console.error("Error creating image and comment:", error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <>
      <Head>
        <title>Qode Assignment</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box bgColor="blackAlpha.100" py="3">
          <Container maxW="container.xl">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Heading as="h4" size="md">
                Upload Images
              </Heading>
              <Button colorScheme="blue" onClick={() => setIsOpenModal(true)}>
                Upload
              </Button>
            </Box>
          </Container>
        </Box>

        <ImagesGrid images={images} />

        <UploadImageModal
          handleSaveImages={handleSubmit}
          handleChange={handleChange}
          imageData={imageData}
          onClose={handleClose}
          isOpen={isOpenModal}
        />
      </main>
    </>
  );
};

export default Home;
