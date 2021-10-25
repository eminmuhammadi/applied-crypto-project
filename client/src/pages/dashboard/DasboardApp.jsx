import { Route } from 'react-router-dom';

import Files from './Files';
import Upload from './Upload';

/**
 * Protected routes
 * @returns {JSX.Element}
 */
function DashboardApp() {
  const ROOT = '/dashboard';

  return(
    <>
      <Route exact path={`${ROOT}`}>
        <Files/>
      </Route>

      <Route path={`${ROOT}/upload`}>
        <Upload/>
      </Route>
    </>
  )
}

export default DashboardApp;