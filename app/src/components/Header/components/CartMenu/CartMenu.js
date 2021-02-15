import React from 'react';
import { Fab, IconButton, Menu, MenuItem, Link as MaterialLink } from '@material-ui/core';
import { Badge, Typography } from '../../../Wrappers';
import { ShoppingCart as ShoppingCartIcon, ShoppingCartOutlined } from '@material-ui/icons';

import cn from 'classnames';
import { ProductUnit } from '../../../../apis/bussines/ProductUnit';
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

class CartMenu extends React.Component {

  state = {
    menu: null
  };

  isNull() {
    const {cartProducts} = this.props;
    return !cartProducts;
  }

  isEmptyOrNull() {
    const {cartProducts} = this.props;
    return !cartProducts ? true : cartProducts.length === 0;
  }

  renderItemsCount() {
    const {classes, cartProducts} = this.props;

    if (this.isEmptyOrNull())
      return;

    const itemsCount = cartProducts.length === 1
      ? `${cartProducts.length} producto agregado`
      : `${cartProducts.length} productos agregados`;

    return (
      <Typography className={classes.profileMenuLink}>
        {itemsCount}
      </Typography>
    )
  }

  renderSubtotal() {
    const {classes, cartData} = this.props;

    if (this.isEmptyOrNull())
      return;

    return (
      <Typography color="secondary" className={classes.cartSubtotal}>
        Subtotal: ${cartData.subtotal} CUP
      </Typography>
    )
  }

  renderBody() {
    const {classes, cartProducts} = this.props;

    if (this.isEmptyOrNull())
      return (
        <div className={classes.emptyBody}>
          <ShoppingCartOutlined className={classes.emptyBodyIcon}/>
          <Typography>
            Carrito vacio
          </Typography>
          <Typography>
            Agregue productos al carrito
            {" "}
            <MaterialLink to="/app/products" component={Link}
                          className={classes.emptyBodyLink}>
              aquí
            </MaterialLink>
          </Typography>
        </div>
      );

    return cartProducts.map(cartItem => (
      <MenuItem key={cartItem.id} className={classes.cartItem}>
        <div className={classes.cartItemBody}>
          <Typography color="text" colorBrightness="secondary" className={classes.cartItemName}>
            {cartItem.product.name}
          </Typography>
          <div className={cn(classes.cartItemDetails)}>
            <Typography weight="medium">
              ${cartItem.product.price * cartItem.quantity} CUP
            </Typography>
            <Typography color="text" colorBrightness="secondary">
              {cartItem.quantity} {ProductUnit[cartItem.product.unit]}
            </Typography>
          </div>
        </div>
      </MenuItem>
    ));
  }

  render() {
    const {classes, cartProducts, cartData} = this.props;
    const {menu} = this.state;

    return (
      <>
        <IconButton color="inherit"
                    aria-haspopup="true"
                    aria-controls="mail-menu"
                    onClick={e => this.setState({menu: e.currentTarget})}
                    className={classes.headerMenuButton}>
          <Badge badgeContent={cartProducts && cartProducts.length}
                 color="secondary">
            {
              this.isNull() ?
                <CircularProgress variant="indeterminate" color="secondary" size={25}/>
                :
                <ShoppingCartIcon classes={{ root: classes.headerIcon }} />
            }

          </Badge>
        </IconButton>

        <Menu
          id="mail-menu"
          open={Boolean(menu)}
          anchorEl={menu}
          onClose={() => this.setState({menu: null})}
          MenuListProps={{ className: classes.headerMenuList }}
          className={classes.headerMenu}
          classes={{ paper: classes.profileMenu }}
          disableAutoFocusItem>
          <div className={classes.profileMenuUser}>
            <Typography variant="h4" weight="medium">
              Carrito de productos
            </Typography>
            {this.renderItemsCount()}
          </div>

          {this.renderBody()}

          {this.renderSubtotal()}
          <Fab variant="extended"
               color="primary"
               aria-label="Add"
               className={classes.sendMessageButton}
               disabled={this.isEmptyOrNull()}>
            Ordenar
            <ShoppingCartIcon className={classes.sendButtonIcon} />
          </Fab>
        </Menu>

      </>
    )
  }
}

export default CartMenu;
