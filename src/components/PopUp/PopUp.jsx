import React from 'react';
import { connect } from 'react-redux';

import ReactDOM from 'react-dom'
const modalRoot = document.getElementById('portal');

// class Modal extends React.Component {
//     constructor(props) {
//         super(props);
//         this.el = document.createElement('div');
//       }
//     componentDidMount() {
//         console.log('asdsa')
//         // this.portal = document.createElement('div');
//         modalRoot.appendChild(this.el)
//     }

//     componentWillUnmount() {
//         modalRoot.removeChild(this.portal)
//     }

//     render() {
//         return ReactDOM.createPortal(
//             <div>
//                 modal window portal
//             </div>,
//            this.el
//         )
//     }
// }

let Modal = () => {
    return <div>
        popUp
    </div>
}

// let PopUp = (props) => {
//     // console.log(props)
//     if(!props.isOpen) return null
//     else {
//         return <div>
//         {props.item.title}
//     </div>
//     }
    
// }


// let mapStateToProps = (state) => {
//     return {
//         isOpen: state.popUp.isOpen
//     }
// }


let PopUpContainer = connect()(Modal)

export default PopUpContainer