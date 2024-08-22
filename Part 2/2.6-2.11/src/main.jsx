import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

let phoneBook = [
	{
		id: 1,
		name: "Mario Mario",
		number: "(843) 727-8954",
		favorite: true
	},
	{
		id: 2,
		name: "Hazel-Rah",
		number: "(464) 919-7737",
		favorite: false
	},
	{
		id: 3,
		name: "Link Link",
		number: "(222) 222-2222",
		favorite: true
	},
	{
		id: 4,
		name: "Jason Funderburker",
		number: "(919) 747-2179",
		favorite: false
	}
]

createRoot(document.getElementById('root')).render(
	<StrictMode>
	<App phoneBook={phoneBook} />
	</StrictMode>
)
