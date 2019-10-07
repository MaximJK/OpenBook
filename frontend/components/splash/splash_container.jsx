import { connect } from 'react-redux';
import Splash from './splash';

const mapStateToProps = state => {

    return {
        state
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {

    return {
    };

};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);

