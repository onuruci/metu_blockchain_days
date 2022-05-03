//import Header from "./components/Header/Header";
import logo from "./images/logo.png";

function App() {
  return (
    <div className="App">
      <section id="light-blue">
        <nav id="header">
          <a href="#">
            <img src={logo} alt="" srcset="" />
          </a>
          <div className="tabContainer">
            <a className="header_tab" href="#">About</a>
            <a className="header_tab" href="#">Prizes</a>
            <a className="header_tab" href="#">Schedule</a>
            <a className="header_tab" href="#">Speakers</a>
            <a className="header_tab" href="#">Sponsors</a>
            <a className="header_tab" href="#">Enemies</a>
            <a className="header_tab" href="#">Venue</a>
            <a className="header_tab" href="#">Concert</a>
            <a className="header_tab" href="#">FAQ</a>
          </div>
        </nav>
        <div id="namer">
          <div id="nameContainer">
            <h1 id="metu">METU</h1>
            <h1 id="blockchain">Blockchain Days</h1>
          </div>
        </div>
        <div id="dateapply">
          <div className="date">11-12 June, 2022</div>
          <a href="#">
            <button className="applyButton">Apply to Event</button>
          </a>
        </div>
      </section>
      <section id="about">
        <div className="aboutContainer">
          <h2 className="subheader">
            About Blockchain Days
          </h2>
          <p className="aboutexplanation">
            Lorem ipsum dolor sit amet. Et quae debitis sit accusantium earum sed architecto ducimus? Eos harum aperiam eos voluptatem veritatis in molestiae omnis 33 illo inventore! Qui quibusdam doloribus hic optio quod et aspernatur necessitatibus nam voluptas autem et laboriosam quia.
            Quo obcaecati fugit numquam aliquam cum corrupti placeat sit assumenda voluptas ut voluptatem voluptatibus? Ab repellat tempore hic minima excepturi cum laboriosam reiciendis 33 distinctio eius.
            Qui error vitae ab nostrum repellendus et sint modi ea architecto quisquam qui ullam earum! Et animi beatae est nisi dolorem et quia impedit in accusantium sunt qui tempora similique et minus nostrum et similique distinctio.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
