import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

let phoneBook = [
	{
		id: 1,
		name: "Mario Mario",
		favorite: true
	},
	{
		id: 2,
		name: "Hazel-Rah",
		favorite: false
	},
	{
		id: 3,
		name: "Link Link",
		favorite: true
	},
	{
		id: 4,
		name: "Jason Funderburker",
		favorite: false
	}
]

createRoot(document.getElementById('root')).render(
	<StrictMode>
	<App phoneBook={phoneBook} />
	</StrictMode>
)
