import { useState } from "react";
import { Container, Text, VStack, Input, Button, Box } from "@chakra-ui/react";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = () => {
    // For now, we display a static search result
    setSearchResult(`Results for "${searchTerm}": Static search result.`);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Search Page</Text>
        <Input
          placeholder="Enter search term"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <Button onClick={handleSearch}>Search</Button>
        {searchResult && (
          <Box mt={4} p={4} borderWidth="1px" borderRadius="md" width="100%">
            <Text>{searchResult}</Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;