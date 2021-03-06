import React, {Component} from 'react';
import Aux from '../Auxiliary';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {

    return class extends Component {
        state = {
            error: null
        };

        componentDidMount() {
            axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req
            });
            axios.interceptors.response.use(resp => resp, error => {
                this.setState({error: error})
            });
        }

        hideModalHandler = () => (
            this.setState({error: null})
        );

        render() {
            return (
                <Aux>
                    <Modal visible={this.state.error}
                           hideModalHandler={this.hideModalHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            )
        }
    };
};

export default withErrorHandler;