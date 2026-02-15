import Layout from './components/layout/Layout';
import ColorPage from './components/color/ColorPage';

function App() {
  return (
    <>
      <div className='bg-background-dark text-white overflow-x-hidden'>
        <Layout>
          <ColorPage />
        </Layout>
      </div>
    </>
  );
}

export default App;
