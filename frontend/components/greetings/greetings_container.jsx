import { connect } from 'react-redux';
import Greetings from './greetings'
import { logout } from '../../actions/session_actions';

const mapStateToProps = ({ session, entities: { users } }) => {
    debugger
    return {
        currentUser: users[session.id]
    }
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Greetings)