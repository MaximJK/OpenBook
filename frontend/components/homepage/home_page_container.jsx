import { connect } from 'react-redux';
import HomePage from './home_page'
import { logout } from '../../actions/session_actions';

const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    }
}

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)