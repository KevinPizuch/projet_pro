import {React, useState} from 'react'
import LobbyModal from "./LobbyModal"
import {Button} from "react-bootstrap"


const Home = (props) => {
    const [modalShow, setModalShow] = useState(false)
    const isGameCodeParams = props.match.params.id;


	return (
		<>
			<div className="devise"> 
				<p> Devise </p>
				<br/><p>petit texte explicatif du site, but du jeu</p>
			</div>
			<div className="mini-games-details">
				<div className="draw">
					<div>
						<img src="/images/draw.png"/>
					</div>
					<p>descriptif rapide</p>
					<p>Règles, <br/><br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
				</div>
				<div className="mime">
					<div>
						<img src="/images/mime.png"/>
					</div>
					<p>descriptif rapide</p>
					<p>Règles, <br/><br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
				</div>
				<div className="impostor">
					<div>
						<img src="/images/impostor.jpg"/>
					</div>
					<p>descriptif rapide</p>
					<p>Règles, <br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
				</div>
			</div>

			<div className="create-join-game">
				<Button variant="primary" onClick={() => setModalShow(true)}>
					Créer / Rejoindre une partie
				</Button>
			</div>
			<LobbyModal
				show={isGameCodeParams ? true : modalShow}
				// createroom={this.createroom}
				// joinroom={this.joinroom}
				onHide={() => setModalShow(false) }
				//params={this.props.params != null ? this.props.params : null}
				params={isGameCodeParams ?? null}
			/>
		</>
	)
}


export default Home