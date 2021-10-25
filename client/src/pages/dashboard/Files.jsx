import fetcher from '../../helpers/fetcher'
import toast from 'react-hot-toast'
import { useEffect, useState } from 'react'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import axios from 'axios'
import fileDownload from 'js-file-download'

/**
 * Protected route => Dashboard
 * @returns {JSX.Element}
 */
function Files() {
  const [state, setState] = useState({
    files: [],
    error: false,
    isLoaded: true
  });

  useEffect(() => {
    fetcher('get', '/files/user-files')
      .then((response) => {
        setState({ 
          files: response.data.payload,
          error: false,
          isLoaded: true
        });
      })
      .catch((e) => {
        setState({
          files: [],
          error: true,
          isLoaded: true
        });

        toast.error(e.message);
      });
  }, []);

  const handleDownload = (url, filename) => {
    axios.get(url, {
      responseType: 'blob',
    })
    .then((res) => {
      fileDownload(res.data, filename)
    })
  }

  const { error, isLoaded, files } = state;

  if (error) {
    return(
      <div className="container">
        <div className="bg-red-200 relative text-red-500 py-3 px-3 rounded-lg">
          Oops, something went wrong.
          <Button className="w-32 h-10 ml-3 mr-3"
            onClick={()=> window.location.reload()}>
            Try again
          </Button>
        </div>
      </div>
    );
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return(
    <div className="container">
      <div className="flex justify-between pt-10">
        <div className="text-4xl font-semibold">
          Files
        </div>

        <div>
          <Button>
            <Link to="/dashboard/upload">+ New File</Link>
          </Button>
        </div>
      </div>

      <section className="pt-10 min-h-64">
        <div className="w-full overflow-hidden">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 border-b">
                <tr className="text-sm font-semibold tracking-wide text-left uppercase shadow-sm rounded-lg">
                  <th className="px-2 py-1">Name</th>
                  <th className="px-2 py-1">Size</th>
                  <th className="px-2 py-1">Type</th>
                  <th className="px-2 py-1"></th>
                </tr>
              </thead>
              <tbody className="bg-white">
              {
                ( files != null && files.length > 0 ) ?
                  files.map((file, index) => (
                    <tr key={index} className="text-sm font-normal tracking-wide text-left">
                      <td className="px-2 py-1 overflow-ellipsis overflow-hidden">
                        <a href={`${file.url}`} target="_blank" rel="noreferrer" className="hover:font-semibold underline">
                          {file.name}
                        </a>
                      </td>
                      <td className="px-2 py-1 overflow-ellipsis overflow-hidden">{file.size}</td>
                      <td className="px-2 py-1 overflow-ellipsis overflow-hidden">{file.type}</td>
                      <td className="px-2 py-1 w-16">
                        <h1 className="cursor-pointer font-semibold" 
                            onClick={() => {handleDownload(file.url, file.name)}}>
                          Download
                        </h1>
                      </td>
                    </tr>
                  ))
                :
                  (
                    <tr className="text-sm font-normal tracking-wide text-left">
                      <td className="px-2 py-1 text-center" colSpan={3}>No files uploaded</td>
                    </tr>
                  )  
              }
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Files;
