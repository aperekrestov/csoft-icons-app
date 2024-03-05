import ReactDOM from 'react-dom/client'
import App from './App'

import '@styles/index.css'
import { HashRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))

function Main() {
	return (
		<HashRouter>
			<App />
		</HashRouter>
	)
}

root.render(
	<Main />
)