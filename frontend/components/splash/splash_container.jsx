import { connect } from 'react-redux';
import Splash from './splash';

const mapStateToProps = ({errors}) => {

    return {
        errors: errors.session
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {

    return {
    };

};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);

