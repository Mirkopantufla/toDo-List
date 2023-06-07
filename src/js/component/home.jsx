import React from "react";
import ListaForm from "./ListaForm.jsx";


//Home debe quedar lo mas limpio posible, para esto inserto componente con la estructura 
const Home = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-12 text-center">
					<h1 className="display-1 text-secondary opacity-50">toDoes</h1>
				</div>
				<ListaForm />
			</div>
		</div>
	);
};

export default Home;
