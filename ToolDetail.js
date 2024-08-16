// ToolDetail.js

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, Container, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import CustomAppBar from './components/AppBar';
import CustomFooter from './components/Footer';

const ToolDetail = () => {
  const { id } = useParams(); // Get the tool ID from the URL
  const navigate = useNavigate(); // Hook for navigation
  const [tool, setTool] = useState(null);
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    // Fetch tool details from the API
    const fetchToolDetail = async () => {
      setLoading(true); // Set loading to true when fetching starts
      setError(null); // Reset error state
      try {
        const response = await axios.get(`http://localhost:5000/tools/${id}`);
        setTool(response.data);
      } catch (error) {
        setError('Failed to fetch tool details.'); // Set error message
        console.error('Error fetching tool details:', error);
      } finally {
        setLoading(false); // Set loading to false when fetching completes
      }
    };

    fetchToolDetail();
  }, [id]);

  if (loading) {
    return <Typography>Loading...</Typography>; // Show loading message while fetching
  }

  if (error) {
    return <Typography color="error">{error}</Typography>; // Show error message if there is an error
  }

  // Default information
  const defaultTool = {
    id: 1,
    name: "Trowel",
    image: "https://example.com/trowel.jpg", // Replace with actual URL
    description: "A versatile tool for digging and planting.",
    details: `What is a Trowel?
A trowel is a gardening essential tool that has scoop-like tilted flat edges attached to a plastic handle. It is essentially a tiny shovel used to till the soil and work with smaller plants transplanting. They can be used to break up the compact soil and mix fertilizers. With a sturdy plastic handle, Seed2Plant trowels offer a better grip to efficiently execute many gardening functions.

How to Use a Trowel:
1. Transplant flowers
The broad base of the trowel makes it an efficient tool to transfer young saplings and seedlings. Fit the trowel around the plant root cluster, carefully lifting the sapling before placing it in a bigger pot. It is specifically useful to plant bulbs and annuals and perennial plants.

Note: It is important to clean the trowel after every use so that the presence of fungal infections and other microorganisms can be eliminated.

2. Mixing and tilling
Another use of the trowel is to till the compact soil, mix fertilizers/composts with garden soil. Every plant needs its dose of natural fertilizers, pesticides or fungicides to grow healthily. These fertilizers when added into the pot or around the plant root should be mixed well with the potting soil for efficient absorption by plants. Trowel comes to the use by helping mix the potting soil ingredients around the plant.

3. Dig holes and remove weeds
The shovel-like edges of the trowel make it an efficient tool for digging small holes in the garden. The use of the trowel is, however, restricted to the compactness of the soil. Digging holes in tight, compact soil will be harder with a trowel. The same applies to removing weed growth around healthy plants. The long slender blades of the trowel can be employed in removing smaller weeds. Long taproot weeds can be cleared with a trowel with the aid of another essential gardening tool, weeder.`
  };

  const currentTool = tool || defaultTool; // Use default information if tool is not found

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CustomAppBar />
      <Box sx={{ py: 6 }}>
        <Container maxWidth="md">
          <Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
            <CardMedia
              component="img"
              height="300"
              image={currentTool.image}
              alt={currentTool.name}
            />
            <CardContent>
              <Typography variant="h4" component="div" sx={{ mb: 2 }}>
                {currentTool.name}
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
                {currentTool.description}
              </Typography>
              <Typography variant="body1">
                {currentTool.details}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
                onClick={() => navigate('/tools')} // Navigate to the tools page
              >
                Back to Tools
              </Button>
            </CardContent>
          </Card>
        </Container>
      </Box>
      <CustomFooter />
    </Box>
  );
};

export default ToolDetail;
