// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container, Typography, CircularProgress, Box } from '@mui/material';
// import CustomAppBar from './components/AppBar';
// import CustomFooter from './components/Footer';

// const Map = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const speciesId = 1; // Replace with the appropriate species ID

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://perenual.com/api/hardiness-map', {
//           params: {
//             species_id: speciesId,
//             key: 'sk-9CLU66bbd9e29cb4a6450'
//           }
//         });
//         setData(response.data);
//       } catch (err) {
//         setError('Failed to fetch hardiness map data.');
//         console.error("Error fetching data:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [speciesId]);

//   if (loading) {
//     return (
//       <Container style={{ textAlign: 'center', marginTop: '50px' }}>
//         <CircularProgress />
//         <Typography variant="h6" style={{ marginTop: '20px' }}>
//           Loading Hardiness Map...
//         </Typography>
//       </Container>
//     );
//   }

//   if (error) {
//     return (
//       <Container style={{ textAlign: 'center', marginTop: '50px' }}>
//         <Typography variant="h6" color="error">
//           {error}
//         </Typography>
//       </Container>
//     );
//   }

//   return (
//     <>
//       <CustomAppBar />
//       <Container style={{ marginTop: '20px' }}>
//         <Typography variant="h4" gutterBottom>
//           Plant Hardiness Map
//         </Typography>
//         <Box style={{ textAlign: 'center' }}>
//           {/* Render the hardiness map here. For demonstration, we'll just display the JSON data */}
//           <Typography variant="h6" gutterBottom>
//             Hardiness Map Data:
//           </Typography>
//           <pre style={{ textAlign: 'left', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
//             {JSON.stringify(data, null, 2)}
//           </pre>
//         </Box>
//       </Container>
//       <CustomFooter />
//     </>
//   );
// };

// export default Map;
