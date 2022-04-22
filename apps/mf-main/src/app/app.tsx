// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import styles from './app.module.css';
import React, {Suspense} from 'react';
import NxWelcome from './nx-welcome';

const RemoteEntry=React.lazy(()=>import('remote/RemoteEntry'));

export function App() {
  return (
    <>
      mf-Main Window
      <Suspense fallback={<div>Loading...</div>}>
        <RemoteEntry></RemoteEntry>
      </Suspense>
      <div />
    </>
  );
}

export default App;
