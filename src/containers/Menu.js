// fill out this container
import { connect } from "react-redux";
import Menu from "../components/Menu";
import { deleteMake } from "../redux/actions";

const mapDispatchToProps = dispatch => {
  return {
    deleteMake: index => dispatch(deleteMake(index))
  };
};

export default connect(
  null,
  mapDispatchToProps)(Menu);