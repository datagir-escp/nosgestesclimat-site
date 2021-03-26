import React from 'react'
import DocumentationButton from './DocumentationButton'
import { Link } from 'react-router-dom'
import Illustration from './images/ecolab-climat-dessin.svg'
import Marianne from './images/Marianne.png'
import emoji from 'react-easy-emoji'
import NewsBanner from '../../components/NewsBanner'

export default () => {
	return (
		<div
			css={`
				border-radius: 1rem;
				padding: 0.4rem;
				h1 {
					margin-top: 0.3rem;
					font-size: 140%;
					line-height: 1.2em;
				}
				> div > a {
				}
				text-align: center;
				> img {
					width: 70%;
					border-radius: 0.8rem;
				}
				@media (max-width: 800px) {
					> img {
						width: 95%;
					}
				}
			`}
		>
			<h1>Connais-tu ton empreinte sur le climat ?</h1>
			<img src={Illustration} />
			<div css="margin-bottom: 1rem">
				<div css="margin: 1rem 0 .6rem;">
					<Link to="/simulateur/bilan" className="ui__ plain button">
						Faire le test
					</Link>
				</div>
				<div css="margin: .6rem 0 1rem;">
					<Link to="/actions" className="ui__ button">
						Passer à l'action
					</Link>
				</div>
				<NewsBanner />
			</div>

			<footer>
				<div
					css={`
						display: flex;
						align-items: center;
						justify-content: center;
						margin-bottom: 1rem;
						img {
							margin: 0 0.6rem;
						}
					`}
				>
					<img css="height: 6rem; margin-right: .6rem" src={Marianne} />
					<a href="https://ademe.fr">
						<img
							css="height: 5rem; margin-right: .6rem"
							src="https://www.ademe.fr/sites/all/themes/ademe/logo.png"
						/>
					</a>
					<a href="https://www.associationbilancarbone.fr/">
						<img
							css="height: 2.5rem"
							src="https://www.associationbilancarbone.fr/wp-content/themes/abc/assets/images/brand/abc_main_logo.svg"
						/>
					</a>
				</div>
				<div
					css={`
						display: flex;
						justify-content: center;
						flex-wrap: wrap;
						> * {
							margin: 0 0.6rem;
						}
					`}
				>
					<Link to="/à-propos">{emoji('❔ ')}À propos</Link>
					<DocumentationButton />
					<Link to="/nouveautés">
						{emoji('✨️ ')}
						Nouveautés
					</Link>
					<Link to="/vie-privée">
						{emoji('🙈 ')}
						Vie privée
					</Link>
				</div>
			</footer>
		</div>
	)
}
