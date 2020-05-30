import React from 'react';

class ErrorBoundary extends React.Component {
    state = { error: null, errorinfo: null }
    componentDidCatch(error, errorinfo) {
        this.setState({
            error: error,
            errorinfo: errorinfo
        })
    }
    render() {
        if (this.state.errorinfo) {
            return (
                <div className="App">
                    <h2>Something Not Working</h2>
                    <img src="./repair.jpg" alt="repair" />
                </div>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;