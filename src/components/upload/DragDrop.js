import { ref, uploadBytesResumable } from "firebase/storage";
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import storage from "../../firebase/firebase";
import './dragdrop.css'

const fileTypes = ["JPG", "PNG", "JPEG"];

function DragDrop() {
  const [selectedImage, setSelectedImage] = useState()

  const [iPre, setIPre] = useState(0)

  const handleUpload = () => {
    if(!selectedImage) {
        alert('Please choose a file first')
    }

    const storageRef = ref(storage, `/files/${selectedImage.name}`)
    const uploadTask = uploadBytesResumable(storageRef, selectedImage[0])
    if(uploadTask) {
        alert('Upload successfully')
    }
  }

  const recargar = () => {
    window.location.reload()
    }
  
  return (
    <div>
        <form className="fileUpload" method="get">
            <FileUploader handleChange={setSelectedImage} name="file" types={fileTypes} classes='drop_area' multiple={true} />
            <div className="previewArea">
                <p>Uploaded images: {selectedImage ? selectedImage.length : 0}</p>
                <p>Preview image: {selectedImage ? iPre+1 : 0}</p>
                {
                    selectedImage && (
                        <div className="controles">
                            <button className="btn btn-info" type="button" onClick={() => setIPre(iPre-1)}>Prev</button>
                            <img
                            src={URL.createObjectURL(selectedImage[iPre])}
                            className='mainPreview'
                            alt="preview"
                            />
                            <button className="btn btn-info" type="button" onClick={() => setIPre(iPre+1)}>Next</button>
                        </div>
                    )
                }
            </div>
            <div className="d-flex">
                <button className="btn btn-success m-1" onClick={handleUpload}>Upload</button>
                <button className="btn btn-danger m-1" onClick={recargar}>Reset</button>
            </div>
        </form>
    </div>
  );
}

export default DragDrop