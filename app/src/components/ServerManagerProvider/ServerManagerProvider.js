import React from "react";
import ServerManager from '../../apis/axios/ServerManager';

const AxiosProviderStateContext = React.createContext();

function ServerManagerProvider({ children }) {

  const serverManager = new ServerManager();

  return (
    <AxiosProviderStateContext.Provider value={serverManager}>
      {children}
    </AxiosProviderStateContext.Provider>
  );
}

function useServerManager() {
  const context = React.useContext(AxiosProviderStateContext);
  if (context === undefined) {
    throw new Error("useLayoutState must be used within a LayoutProvider");
  }
  return context;
}

function withServerManager(WrappedComponent) {
   return class ServerManager extends React.Component {
    static contextType = AxiosProviderStateContext;

    render() {
      return <WrappedComponent serverManager={this.context} {...this.props}/>
    }
  }
}

export default ServerManagerProvider;

export { ServerManagerProvider, useServerManager, withServerManager };
