import React, { Component } from "react";

const AsyncComponent = (getComponent) => class AsyncComponent extends Component {
      static Component = null;
      state = { Component: AsyncComponent.Component };

      componentDidMount() {
        if (!this.state.Component) {
          getComponent().then(Component => {
              AsyncComponent.Component = Component
              this.setState({ Component })
          })
        }
      }
      render() {
        const { Component } = this.state
        if (Component) {
            return <Component {...this.props} />
        }
        return null;
      }
  };
export default AsyncComponent;