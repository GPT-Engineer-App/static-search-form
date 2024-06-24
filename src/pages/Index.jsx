import { useState } from "react";
import { Container, Text, VStack, Input, Button, Box, Link } from "@chakra-ui/react";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);

  const handleSearch = () => {
    // For now, we display a static list of search results
    const results = [
      { id: 1, name: `Result 1 for "${searchTerm}"` },
      { id: 2, name: `Result 2 for "${searchTerm}"` },
      { id: 3, name: `Result 3 for "${searchTerm}"` },
    ];
    setSearchResults(results);
    setSelectedResult(null);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleResultClick = (result) => {
    setSelectedResult(result);
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
        {selectedResult ? (
          <Box mt={4} p={4} borderWidth="1px" borderRadius="md" width="100%">
            <Text>{`You selected: ${selectedResult.name}`}</Text>
          </Box>
        ) : (
          searchResults.length > 0 && (
            <Box mt={4} p={4} borderWidth="1px" borderRadius="md" width="100%">
              {searchResults.map((result) => (
                <Box key={result.id} mb={2}>
                  <Link color="teal.500" onClick={() => handleResultClick(result)}>
                    {result.name}
                  </Link>
                </Box>
              ))}
            </Box>
          )
        )}
      </VStack>
    </Container>
  );
};

export default Index;