import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="dark-mode">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
