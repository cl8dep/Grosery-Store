import React from 'react';
import {
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { AddShoppingCart as AddShoppingCartIcon } from '@material-ui/icons';

import Widget from "../../components/Widget";
import PageTitle from "../../components/PageTitle";
import { ProductUnit } from '../../apis/bussines/ProductUnit';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import { setCartProducts } from '../../apis/redux/cart/cart.actions';
import sendToastNotification from '../../components/Notification/Utils';


export default class Products extends React.Component {

  state = {
    products: null,
    isQuantityDialogOpen: false,
    selectedProduct: null,
    selectedProductQuantity: 1
  };

  componentDidMount() {
    this.props.serverManager.getAllProducts()
      .then(r => {
        const {data} = r;
        this.setState({products: data})
      })
  }

  showQuantityDialog(item) {
    this.setState({isQuantityDialogOpen: true, selectedProduct: item})
  }

  addProductToCart = () => {
    const { selectedProduct, selectedProductQuantity } = this.state;
    this.props.serverManager.addProductToCart(selectedProduct.id, selectedProductQuantity)
      .then(r => {
        const {data} = r;
        const {products, ...rest} = data;
        this.props.actions.setCartProducts(products);
        this.props.actions.setCartData({...rest});
      })
      .finally(() => {
        this.setState({isQuantityDialogOpen: false, selectedProduct: null, selectedProductQuantity: 1})
      })
  };

  render() {
    const { classes } = this.props;
    const { products, isQuantityDialogOpen, selectedProductQuantity } = this.state;

    return (
      <>
        <Dialog open={isQuantityDialogOpen}
                onBackdropClick={() => this.setState({isQuantityDialogOpen: false})}>
          <DialogTitle>
            Inserte la cantidad del producto
          </DialogTitle>
          <DialogContent>
            <TextField value={selectedProductQuantity}
                       onChange={e => this.setState({selectedProductQuantity: e.target.value})}/>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.setState({isQuantityDialogOpen: false})}>
              Cancelar
            </Button>
            <Button onClick={this.addProductToCart}>
              Añadir al carrito
            </Button>
          </DialogActions>
        </Dialog>




        <PageTitle title="Productos"/>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Widget noBodyPadding disableWidgetMenu
                    bodyClass={classes.tableWidget}>
              {
                products && (
                  <Table className="mb-0">
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          Nombre
                        </TableCell>
                        <TableCell>
                          Precio
                        </TableCell>
                        <TableCell>
                          Cantidad disponible
                        </TableCell>
                        <TableCell/>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {products.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell className="pl-3 fw-normal">
                            {item.name}
                          </TableCell>
                          <TableCell>{item.price} CUP / {ProductUnit[item.unit]}</TableCell>
                          <TableCell>{item.quantity} {ProductUnit[item.unit]}</TableCell>
                          <TableCell align="right">
                            <IconButton onClick={() => sendToastNotification()/*this.showQuantityDialog.bind(this, item)*/}
                                        size="small"
                                        className="px-2"
                                        variant="contained">
                              <AddShoppingCartIcon/>
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )
              }
            </Widget>
          </Grid>
        </Grid>
      </>
    );
  }
}
