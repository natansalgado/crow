import { Router } from './Router'
import GlobalStyles from './styles/GlobalStyles'

function App() {
  return (
    <>
      <GlobalStyles />
      <div className='App'>
        <Router />
      </div>
    </>
  );
}

export default App;
