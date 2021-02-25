import React from 'react';

class SessionManager extends React.Component {

  render() {
    return (
      <>
        {this.props.children}
      </>
    )
  }

  componentDidMount() {
    this.props.serverManager.getCartProducts()
      .then(r => {
        const {data} = r;
        const {products, ...rest} = data;
        this.props.actions.setCartProducts(products);
        this.props.actions.setCartData(rest);
      })
      .catch(r => {

      })
  }

}

export default SessionManager;
