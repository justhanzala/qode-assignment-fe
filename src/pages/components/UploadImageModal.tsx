import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Box,
} from "@chakra-ui/react";

interface UploadImageModalProps {
  handleSaveImages: (e: any) => void;
  handleChange: (e: any) => void;
  onClose: () => void;
  imageData: any;
  isOpen: boolean;
}

const UploadImageModal = ({
  handleSaveImages,
  handleChange,
  onClose,
  imageData,
  isOpen,
}: UploadImageModalProps) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Upload Your Image</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSaveImages}>
            <FormControl>
              <FormLabel>Image</FormLabel>
              <Input
                type="file"
                name="image"
                placeholder="Your Image"
                onChange={(event: any) => {
                  const file = event.target.files[0];
                  const e = { target: { name: "image", value: file } };
                  handleChange(e);
                }}
                required
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Comment</FormLabel>
              <Input
                type="text"
                name="comment"
                placeholder="Your Comment"
                value={imageData?.comment}
                onChange={handleChange}
                required
              />
            </FormControl>
            <Box textAlign="end" mt="4">
              <Button colorScheme="blue" type="submit" mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </Box>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default UploadImageModal;
