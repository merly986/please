import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import RootStoreGeneral from './stores/root-store-general';
import { RootStoreGeneralContext} from './context/root-store-general-context';

ReactDOM.createRoot(document.getElementById('root')!).render(
<React.StrictMode>
			<RootStoreGeneralContext.Provider value={new RootStoreGeneral}>	
				<App />
			</RootStoreGeneralContext.Provider>
</React.StrictMode>,
)
