import { Link } from "react-router-dom";
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";

const products = [
  {
    id: 1,
    name: 'MacBook Pro 14" (2023)',
    price: 1999,
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    price: 999,
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    price: 399,
  },
  {
    id: 4,
    name: "Apple Watch Ultra",
    price: 799,
  },
  {
    id: 5,
    name: "PlayStation 5",
    price: 499,
  },
  {
    id: 6,
    name: "Sony Alpha 7 IV",
    price: 2499,
  },
  {
    id: 7,
    name: "Amazon Echo Studio",
    price: 199,
  },
  {
    id: 8,
    name: "LG UltraFine 5K Display",
    price: 1299,
  },
  {
    id: 9,
    name: "Logitech MX Master 3S",
    price: 99,
  },
  {
    id: 10,
    name: "DJI Mavic 3 Pro",
    price: 2199,
  },
];

const ProductList = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Product List
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5">{product.name}</Typography>
                <Typography variant="body2">${product.price}</Typography>
                <Button
                  component={Link}
                  to={`/product/${product.id}`}
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductList;
