import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Container,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ShoppingCart = ({ cart, removeFromCart }) => {
  if (!cart || cart.length === 0) {
    return (
      <Container>
        <Typography variant="h4" gutterBottom>
          Shopping Cart
        </Typography>
        <Typography variant="body1">Your cart is empty.</Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      <List>
        {cart.map((item) => (
          <ListItem key={item.id}>
            <ListItemText
              primary={item.name}
              secondary={`Price: $${item.price} | Quantity: ${item.quantity}`}
            />
            <Button
              variant="contained"
              color="secondary"
              startIcon={<DeleteIcon />}
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </Button>
          </ListItem>
        ))}
      </List>
      <Typography variant="h6" sx={{ mt: 2 }}>
        Total: $
        {cart.reduce((total, item) => total + item.price * item.quantity, 0)}
      </Typography>
    </Container>
  );
};

export default ShoppingCart;
