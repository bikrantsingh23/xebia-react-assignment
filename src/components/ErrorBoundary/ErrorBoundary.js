import React from 'react';
import { ReactComponent as RepairIcon } from '../../images/search-repair.svg';

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
                <div className="error-boundary">
                    <h2>Opps...Something Not Working</h2>
                    <RepairIcon className="repair-icon" />
                </div>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;