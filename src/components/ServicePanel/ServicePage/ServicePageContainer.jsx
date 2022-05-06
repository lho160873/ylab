
import ServicePage from './ServicePage'
import { connect } from "react-redux";


let mapStateToProps = (state) => {
  return {
    filtrPage: state.filtrPage
  }
}

const ServicePageContainer = connect(mapStateToProps)(ServicePage);
export default ServicePageContainer; 