
import Accordion from "./accordionComponent";


function App() {

    return (
        <div className="App">
            <div className="accordion">
                <div className="accordion__wrapper">
                    <h1 className="acc-title">Accordion</h1>
                    <div className="accordion-container">
                        <Accordion />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;
