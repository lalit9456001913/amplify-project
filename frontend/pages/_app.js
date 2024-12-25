import '../styles/globals.css'; // Next.js example
import { Amplify } from 'aws-amplify';
import awsExports from '../aws-exports'; // Adjust path based on where aws-exports.js resides

Amplify.configure(awsExports);

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
