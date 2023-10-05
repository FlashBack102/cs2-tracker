import type { AppProps } from 'next/app'
import { NextPageContext } from 'next'

const App: AppProps = ({ Component, pageProps }) => {
	return (
		<Component { ...pageProps } />
	)
}

/*
App.getServerSideProps = async (ctx: NextPageContext) => {
	const res = await fetch('https://api.github.com/repos/vercel/next.js')
	const json = await res.json()

	console.log(json.html_url)
	
	return {
		data: json.html_url
	}
}
*/

export default App