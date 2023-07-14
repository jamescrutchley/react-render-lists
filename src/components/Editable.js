// import React, { Component } from 'react';

// class Editable extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isEditing: false,
//       text: props.initialText,
//     };
//   }

//   handleDoubleClick = () => {
//     this.setState({ isEditing: true });
//   };

//   handleBlur = () => {
//     this.setState({ isEditing: false });
//   };

//   handleChange = (event) => {
//     this.setState({ text: event.target.value });
//   };

//   render() {
//     const { isEditing, text } = this.state;

//     if (isEditing) {
//       return (
//         <input
//           type="text"
//           value={text}
//           onChange={this.handleChange}
//           onBlur={this.handleBlur}
//           autoFocus
//         />
//       );
//     }

//     return (
//       <p onDoubleClick={this.handleDoubleClick}>{text}</p>
//     );
//   }
// }

// export default Editable;
