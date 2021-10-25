import React, {useState} from 'react';
import toast from 'react-hot-toast';

import Button from '../../components/Button';
import Input from '../../components/Input';
import fetcher from '../../helpers/fetcher';
import { useHistory, Link } from "react-router-dom";

/**
 * Protected route => Upload
 * @returns {JSX.Element}
 */
function Upload() {
  let history = useHistory();
  const [selectedFile, setSelectedFile] = useState();

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
	};

  const handleSubmission = () => {
		const formData = new FormData();

		formData.append('file', selectedFile);

		fetcher('post', '/files/upload', formData)
      .then((_res) => {
        toast.success('File uploaded successfully');
        history.push('/dashboard'); 
      })
			.catch((error) => {
				toast.error(error.message);
			});
	};

  return(
    <div className="container">
      <div className="flex justify-between pt-10">
        <div className="text-4xl font-semibold">
          <Link to="/dashboard" className="mr-2">&lsaquo;</Link>
          Upload a file
        </div>

        <div>
          <Button onClick={handleSubmission}>Upload</Button>
        </div>
      </div>

      <section className="pt-10 w-100">
        <Input type="file" 
               name="file"
               accept="image/jpeg, image/jpg, image/png, image/gif, image/bmp, application/pdf, video/x-flv, video/mp4, application/x-mpegURL,
               video/MP2T video/3gpp, video/quicktime, video/x-msvideo, video/x-ms-wmv"
               onChange={changeHandler} />

        {
          selectedFile ? (
            <div className="pt-3 pb-3">
              <p>Filename: {selectedFile.name}</p>
              <p>Filetype: {selectedFile.type}</p>
              <p>Size in bytes: {selectedFile.size}</p>
            </div>
          ) 
          : 
            null
        }
      </section>

    </div>
  )
}

export default Upload;