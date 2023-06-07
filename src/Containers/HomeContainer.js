import Home from '../Components/Home';
import addToCart from '../Services/Actions/actions';
import {connect} from 'react-redux';

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);
// export default Home;