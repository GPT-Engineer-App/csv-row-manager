import React, { useState } from "react";
import { Container, VStack, Text, Button, Input, Table, Thead, Tbody, Tr, Th, Td, IconButton } from "@chakra-ui/react";
import { FaTrash, FaDownload, FaPlus } from "react-icons/fa";
import Papa from "papaparse";
import { CSVLink } from "react-csv";

const Index = () => {
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [fileName, setFileName] = useState("edited_data.csv");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      Papa.parse(file, {
        header: true,
        complete: (results) => {
          setHeaders(Object.keys(results.data[0]));
          setData(results.data);
        },
      });
    }
  };

  const handleAddRow = () => {
    const newRow = headers.reduce((acc, header) => ({ ...acc, [header]: "" }), {});
    setData([...data, newRow]);
  };

  const handleRemoveRow = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };

  const handleInputChange = (index, header, value) => {
    const newData = data.map((row, i) => (i === index ? { ...row, [header]: value } : row));
    setData(newData);
  };

  return (
    <Container centerContent maxW="container.xl" py={10}>
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">CSV Editor</Text>
        <Input type="file" accept=".csv" onChange={handleFileUpload} />
        {data.length > 0 && (
          <>
            <Table variant="simple">
              <Thead>
                <Tr>
                  {headers.map((header) => (
                    <Th key={header}>{header}</Th>
                  ))}
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map((row, rowIndex) => (
                  <Tr key={rowIndex}>
                    {headers.map((header) => (
                      <Td key={header}>
                        <Input value={row[header]} onChange={(e) => handleInputChange(rowIndex, header, e.target.value)} />
                      </Td>
                    ))}
                    <Td>
                      <IconButton aria-label="Remove row" icon={<FaTrash />} onClick={() => handleRemoveRow(rowIndex)} />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
            <Button leftIcon={<FaPlus />} onClick={handleAddRow}>
              Add Row
            </Button>
            <CSVLink data={data} headers={headers.map((header) => ({ label: header, key: header }))} filename={fileName}>
              <Button leftIcon={<FaDownload />}>Download CSV</Button>
            </CSVLink>
          </>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
