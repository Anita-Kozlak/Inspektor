import React, { useState } from 'react';
import MainViewLink from "../Link/MainViewLink";
import SignOutButton from "../SignOut";


// import axios from "axios";

// import React, { Component } from "react";

// class Notes extends Component {
//   state = {
//     // Initially, no file is selected
//     selectedFile: null,
//   };

//   // On file select (from the pop up)
//   onFileChange = (event) => {
//     // Update the state
//     this.setState({ selectedFile: event.target.files[0] });
//   };

//   // On file upload (click the upload button)
//   onFileUpload = () => {
//     // Create an object of formData
//     const formData = new FormData();

//     // Update the formData object
//     formData.append(
//       "myFile",
//       this.state.selectedFile,
//       this.state.selectedFile.name,
//     );

//     // Details of the uploaded file
//     console.log(this.state.selectedFile);

//     // Request made to the backend api
//     // Send formData object
//     axios.post("api/uploadfile", formData);
//   };

//   // File content to be displayed after
//   // file upload is complete
//   fileData = () => {
//     if (this.state.selectedFile) {
//       return (
//         <div>
//           <h2>File Details:</h2>
//           <p>File Name: {this.state.selectedFile.name}</p>
//           <p>File Type: {this.state.selectedFile.type}</p>
//           <p>
//             Last Modified:{" "}
//             {this.state.selectedFile.lastModifiedDate.toDateString()}
//           </p>
//         </div>
//       );
//     } else {
//       return (
//         <div>
//           <br />
//           <h4>Choose before Pressing the Upload button</h4>
//         </div>
//       );
//     }
//   };

//   render() {
//     return (
//       <div>
//         <h1>GeeksforGeeks</h1>
//         <h3>File Upload using React!</h3>
//         <div>
//           <input type="file" onChange={this.onFileChange} />
//           <button onClick={this.onFileUpload}>Upload!</button>
//         </div>
//         {this.fileData()}
//       </div>
//     );
//   }
// }

// export default Notes;
const Notes = () => {
  const [violin1, setViolin1] = useState([])
  const [violin2, setViolin2] = useState([]);
  const [viola, setViola] = useState([])
  const [cello, setCello] = useState([])
  const [bass, setBass] = useState([])
  const [flute, setFlute] = useState([])
  const [horn, setHorn] = useState([])
  const [oboe, setOboe] = useState([])
  const [trumpet, setTrumpet] = useState([])
  const [clarinet, setClarinet] = useState([])
  const [trombone, setTrombone] = useState([])
  const [bassoon, setBassoon] = useState([])
  const [harp, setHarp] = useState([])
  const [timpani, setTimpani] = useState([])
  const [percussion, setPercussion] = useState([])
    return (
      <>
        <div className="buttons">
          <MainViewLink />
          <SignOutButton />
        </div>
        <div className="notesContainer">
      
          {/* <div className="notesList">
            <h1>Nuty do koncertu 11.09.2020 - Basem Akiki</h1>
            <h2 className="instrumentNotes">I skrzypce</h2>
            <a href="https://ks4.imslp.net/files/imglnks/usimg/d/df/IMSLP19899-PMLP01586-Beethoven_Symphony_5_V1.pdf">
              Piotr Czajkowski: V Symfonia
            </a>
            <a href="https://ks4.imslp.net/files/imglnks/usimg/d/df/IMSLP19899-PMLP01586-Beethoven_Symphony_5_V1.pdf">
              Wolfgang Amadeusz Mozart: Uwertura do opery Wesele Figara
            </a>
            <h2 className="instrumentNotes">II skrzypce</h2>
            <a href="https://ks4.imslp.net/files/imglnks/usimg/d/df/IMSLP19899-PMLP01586-Beethoven_Symphony_5_V1.pdf">
              Wolfgang Amadeusz Mozart: Uwertura do opery Wesele Figara
            </a>
            <a href="https://ks4.imslp.net/files/imglnks/usimg/d/df/IMSLP19899-PMLP01586-Beethoven_Symphony_5_V1.pdf">
              {" "}
              Piotr Czajkowski: V Symfonia
            </a>
            <h2 className="instrumentNotes">Altówka</h2>
            <a href="https://ks4.imslp.net/files/imglnks/usimg/d/df/IMSLP19899-PMLP01586-Beethoven_Symphony_5_V1.pdf">
              Wolfgang Amadeusz Mozart: Uwertura do opery Wesele Figara
            </a>
            <a href="https://ks4.imslp.net/files/imglnks/usimg/d/df/IMSLP19899-PMLP01586-Beethoven_Symphony_5_V1.pdf">
              Piotr Czajkowski: V Symfonia
            </a>
            <h2 className="instrumentNotes">Wiolonczela</h2>
            <a href="https://ks4.imslp.net/files/imglnks/usimg/d/df/IMSLP19899-PMLP01586-Beethoven_Symphony_5_V1.pdf">
              Wolfgang Amadeusz Mozart: Uwertura do opery Wesele Figara
            </a>
            <a href="https://ks4.imslp.net/files/imglnks/usimg/d/df/IMSLP19899-PMLP01586-Beethoven_Symphony_5_V1.pdf">
              Piotr Czajkowski: V Symfonia
            </a>
            <h2 className="instrumentNotes">Kontrabas</h2>
            <a href="https://ks4.imslp.net/files/imglnks/usimg/d/df/IMSLP19899-PMLP01586-Beethoven_Symphony_5_V1.pdf">
              Wolfgang Amadeusz Mozart: Uwertura do opery Wesele Figara
            </a>
            <a href="https://ks4.imslp.net/files/imglnks/usimg/d/df/IMSLP19899-PMLP01586-Beethoven_Symphony_5_V1.pdf">
              Piotr Czajkowski: V Symfonia
            </a>
            <h2 className="instrumentNotes">Flet</h2>
            <a href="https://ks4.imslp.net/files/imglnks/usimg/d/df/IMSLP19899-PMLP01586-Beethoven_Symphony_5_V1.pdf">
              Wolfgang Amadeusz Mozart: Uwertura do opery Wesele Figara
            </a>
            <a href="https://ks4.imslp.net/files/imglnks/usimg/d/df/IMSLP19899-PMLP01586-Beethoven_Symphony_5_V1.pdf">
              Piotr Czajkowski: V Symfonia
            </a>
            <h2 className="instrumentNotes">Obój</h2>
            <a href="https://ks4.imslp.net/files/imglnks/usimg/d/df/IMSLP19899-PMLP01586-Beethoven_Symphony_5_V1.pdf">
              Wolfgang Amadeusz Mozart: Uwertura do opery Wesele Figara
            </a>
            <a href="https://ks4.imslp.net/files/imglnks/usimg/d/df/IMSLP19899-PMLP01586-Beethoven_Symphony_5_V1.pdf">
              Piotr Czajkowski: V Symfonia
            </a>
            <h2 className="instrumentNotes">Klarnet</h2>
            <a href="https://ks4.imslp.net/files/imglnks/usimg/d/df/IMSLP19899-PMLP01586-Beethoven_Symphony_5_V1.pdf">
              Wolfgang Amadeusz Mozart: Uwertura do opery Wesele Figara
            </a>
            <a href="https://ks4.imslp.net/files/imglnks/usimg/d/df/IMSLP19899-PMLP01586-Beethoven_Symphony_5_V1.pdf">
              Piotr Czajkowski: V Symfonia
            </a>
            <h2 className="instrumentNotes">Trąbka</h2>
            <a href="https://ks4.imslp.net/files/imglnks/usimg/d/df/IMSLP19899-PMLP01586-Beethoven_Symphony_5_V1.pdf">
              Wolfgang Amadeusz Mozart: Uwertura do opery Wesele Figara
            </a>
            <a href="https://ks4.imslp.net/files/imglnks/usimg/d/df/IMSLP19899-PMLP01586-Beethoven_Symphony_5_V1.pdf">
              Piotr Czajkowski: V Symfonia
            </a>
            <h2 className="instrumentNotes">Puzon</h2>
            <a href="https://ks4.imslp.net/files/imglnks/usimg/d/df/IMSLP19899-PMLP01586-Beethoven_Symphony_5_V1.pdf">
              Wolfgang Amadeusz Mozart: Uwertura do opery Wesele Figara
            </a>
            <a href="https://ks4.imslp.net/files/imglnks/usimg/d/df/IMSLP19899-PMLP01586-Beethoven_Symphony_5_V1.pdf">
              Piotr Czajkowski: V Symfonia
            </a>
            <h2 className="instrumentNotes">Waltornia</h2>
            <a href="https://ks4.imslp.net/files/imglnks/usimg/d/df/IMSLP19899-PMLP01586-Beethoven_Symphony_5_V1.pdf">
              Wolfgang Amadeusz Mozart: Uwertura do opery Wesele Figara
            </a>
            <a href="https://ks4.imslp.net/files/imglnks/usimg/d/df/IMSLP19899-PMLP01586-Beethoven_Symphony_5_V1.pdf">
              Piotr Czajkowski: V Symfonia
            </a>
            <h2 className="instrumentNotes">Fagot</h2>
            <a href="https://ks4.imslp.net/files/imglnks/usimg/d/df/IMSLP19899-PMLP01586-Beethoven_Symphony_5_V1.pdf">
              Wolfgang Amadeusz Mozart: Uwertura do opery Wesele Figara
            </a>
            <a href="https://ks4.imslp.net/files/imglnks/usimg/d/df/IMSLP19899-PMLP01586-Beethoven_Symphony_5_V1.pdf">
              Piotr Czajkowski: V Symfonia
            </a>
          </div> */}
        </div>
      </>
    );
}
export default Notes;