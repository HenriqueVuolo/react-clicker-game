import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import {App} from './App.tsx';
import {Providers} from './providers/index.tsx';
import {ToastContainer} from 'react-toastify';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Providers>
			<App />
			<ToastContainer theme="dark" />
		</Providers>
	</StrictMode>
);
