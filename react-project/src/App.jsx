import "./App.css";
import reactImage from '/src/assets/react.svg';

const reactQuote = [
  "Coding like poetry should be short and concise",
  "It’s not a bug; it’s an undocumented feature.",
  "First, solve the problem. Then, write the code.",
];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactQuote[genRandomInt(reactQuote.length - 1)];
  return (
    <header>
      <h1>React Essentials</h1>
      <p>{description}</p>
    </header>
  );
}


function coreConcept(){
	return(
		<li>
			<img src="" alt="" />
			<h3>Title</h3>
			<p>Description</p>
		</li>
	)	
}








function App() {
  return (
    <div>
      <Header />
      <main>
		
        <h1>Time to get started!</h1>
        <p>React concepts you will need for all your projects.</p>
      </main>
    </div>
  );
}

export default App;
