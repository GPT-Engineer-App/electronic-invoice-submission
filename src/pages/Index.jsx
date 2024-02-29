import { Box, Button, Container, FormControl, FormLabel, Input, NumberInput, NumberInputField, VStack, Heading, Textarea, IconButton } from "@chakra-ui/react";
import { FaPaperPlane, FaPlus, FaTrash } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [invoiceLines, setInvoiceLines] = useState([{ description: "", unitPrice: 0, vatRate: 0, quantity: 0 }]);

  const addInvoiceLine = () => {
    setInvoiceLines([...invoiceLines, { description: "", unitPrice: 0, vatRate: 0, quantity: 0 }]);
  };

  const removeInvoiceLine = (index) => {
    const newLines = invoiceLines.filter((_, i) => i !== index);
    setInvoiceLines(newLines);
  };
  return (
    <Container maxW="container.md" py={8}>
      <Heading mb={6}>Electronic Invoice Submission</Heading>
      <VStack spacing={4} as="form" id="invoice-form">
        <FormControl isRequired>
          <FormLabel>Sender VAT Number</FormLabel>
          <Input placeholder="Enter sender's VAT number" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Recipient SDI Code</FormLabel>
          <Input placeholder="Enter recipient's SDI code" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Recipient PEC (Certified Email)</FormLabel>
          <Input placeholder="Enter recipient's PEC" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Recipient VAT Number</FormLabel>
          <Input placeholder="Enter recipient's VAT number" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Recipient Tax Code</FormLabel>
          <Input placeholder="Enter recipient's tax code" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Recipient Name</FormLabel>
          <Input placeholder="Enter recipient's name" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Recipient Address</FormLabel>
          <Input placeholder="Enter recipient's address" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Recipient ZIP Code</FormLabel>
          <Input placeholder="Enter recipient's ZIP code" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Recipient City</FormLabel>
          <Input placeholder="Enter recipient's city" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Recipient Province</FormLabel>
          <Input placeholder="Enter recipient's province" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Recipient Country</FormLabel>
          <Input placeholder="Enter recipient's country" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Document Type</FormLabel>
          <Input placeholder="Enter document type" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Document Date</FormLabel>
          <Input type="datetime-local" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Document Number</FormLabel>
          <Input placeholder="Enter document number" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Document Reason</FormLabel>
          <Textarea placeholder="Enter document reason" />
        </FormControl>

        <FormControl>
          <FormLabel>Withholding Amount</FormLabel>
          <NumberInput precision={2}>
            <NumberInputField placeholder="Enter withholding amount" />
          </NumberInput>
        </FormControl>

        <FormControl>
          <FormLabel>Withholding Rate</FormLabel>
          <NumberInput precision={2}>
            <NumberInputField placeholder="Enter withholding rate" />
          </NumberInput>
        </FormControl>

        <FormControl>
          <FormLabel>Payment Reason</FormLabel>
          <Input placeholder="Enter payment reason" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Payment Terms</FormLabel>
          <Input placeholder="Enter payment terms" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Payment Method</FormLabel>
          <Input placeholder="Enter payment method" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Payment Due Date</FormLabel>
          <Input type="datetime-local" />
        </FormControl>

        <FormControl>
          <FormLabel>IBAN</FormLabel>
          <Input placeholder="Enter IBAN" />
        </FormControl>

        <Box w="full">
          <Heading size="md" mb={4}>
            Invoice Lines
          </Heading>
          {invoiceLines.map((line, index) => (
            <VStack key={index} spacing={3} align="stretch">
              <FormControl isRequired>
                <FormLabel>Invoice Line Description</FormLabel>
                <Input placeholder="Enter line description" />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Invoice Line Unit Price</FormLabel>
                <NumberInput precision={2}>
                  <NumberInputField placeholder="Enter unit price" />
                </NumberInput>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Invoice Line VAT Rate</FormLabel>
                <NumberInput precision={0}>
                  <NumberInputField placeholder="Enter VAT rate" />
                </NumberInput>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Invoice Line Quantity</FormLabel>
                <NumberInput>
                  <NumberInputField placeholder="Enter quantity" />
                </NumberInput>
              </FormControl>

              <IconButton aria-label="Remove invoice line" icon={<FaTrash />} onClick={() => removeInvoiceLine(index)} />
            </VStack>
          ))}
          <Button leftIcon={<FaPlus />} onClick={addInvoiceLine}>
            Add Invoice Line
          </Button>
        </Box>

        <Button leftIcon={<FaPaperPlane />} colorScheme="blue" type="submit">
          Submit Invoice
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
