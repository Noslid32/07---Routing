import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Typography,
  Button,
  Container,
  Box,
  Snackbar,
  Alert,
  CardMedia,
} from "@mui/material";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

const products = [
  {
    id: 1,
    name: 'MacBook Pro 14" (2023)',
    price: 1999,
    description: "Potente laptop para profesionales.",
    image:
      "https://www.notebookcheck.org/fileadmin/_processed_/c/3/csm_AKA8518_984be0479c.jpg",
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    price: 999,
    description: "El último smartphone de Apple.",
    image:
      "https://ishop.gt/cdn/shop/files/IMG-10885667_0e9d1764-a578-4b1d-a7ec-d526ded433e1.jpg?v=1718926182&width=1680",
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    price: 399,
    description: "Auriculares con cancelación de ruido líderes en el mercado.",
    image:
      "https://cdn.pacifiko.com/image/cache/catalog/p/MjM1Y2U3NT_746-500x500.png",
  },
  {
    id: 4,
    name: "Apple Watch Ultra",
    price: 799,
    description: "Reloj inteligente para aventuras extremas.",
    image:
      "https://ishop.gt/cdn/shop/files/Apple_Watch_Ultra_2_49mm_Black_Titanium_Ocean_Band_Black_PDP_Image_Position_1__ESES.webp?v=1726357715&width=1920",
  },
  {
    id: 5,
    name: "PlayStation 5",
    price: 499,
    description: "La consola de próxima generación de Sony.",
    image:
      "https://cdn.pacifiko.com/image/cache/catalog/p/MWNiMWY4ND-500x500.jpg",
  },
  {
    id: 6,
    name: "Sony Alpha 7 IV",
    price: 2499,
    description: "Cámara mirrorless para fotógrafos profesionales.",
    image:
      "https://inresa.gt/cdn/shop/files/PAGINA-SON-F-C-ILCE-7M4-1.jpg?v=1737998183",
  },
  {
    id: 7,
    name: "Amazon Echo Studio",
    price: 199,
    description: "Altavoz inteligente con sonido de alta calidad.",
    image: "https://m.media-amazon.com/images/I/51siPJFs7qL._AC_._SX600_.jpg",
  },
  {
    id: 8,
    name: "LG UltraFine 5K Display",
    price: 1299,
    description: "Monitor 5K para creativos.",
    image:
      "https://cdn.pacifiko.com/image/cache/catalog/p/NTc1ZWIzNz-500x500.jpg",
  },
  {
    id: 9,
    name: "Logitech MX Master 3S",
    price: 99,
    description: "Ratón ergonómico para productividad.",
    image:
      "https://cdn.pacifiko.com/image/cache/catalog/p/YTE1NWJkZW_0_215-1000x1000.jpg",
  },
  {
    id: 10,
    name: "DJI Mavic 3 Pro",
    price: 2199,
    description: "Dron profesional con cámara Hasselblad.",
    image:
      "https://cdn11.bigcommerce.com/s-qrzwa9dzji/images/stencil/1280x1280/products/1209/717/JI_Mavic_3_Pro_Drone_with_Fly_More_Combo_DJI_RC_Pro__93559.1729016756.jpg?c=1",
  },
];

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

 
  const [openSnackbar, setOpenSnackbar] = useState(false);

  
  const handleAddToCart = () => {
    addToCart(product); 
    setOpenSnackbar(true); 
  };

  
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h3" gutterBottom>
          {product.name}
        </Typography>
        <CardMedia
          component="img"
          height="400"
          image={product.image}
          alt={product.name}
          sx={{ mb: 2 }}
        />
        <Typography variant="h5" gutterBottom>
          Price: ${product.price}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {product.description}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={handleAddToCart} 
        >
          Add to Cart
        </Button>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button variant="outlined" sx={{ mt: 2, ml: 2 }}>
            Back to Products
          </Button>
        </Link>
      </Box>

      
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }} 
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          icon={<AddIcon fontSize="inherit" />} 
          sx={{ width: "100%" }}
        >
          {product.name} added to cart successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ProductDetails;
