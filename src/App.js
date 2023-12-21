import './App.css';

function App() {
  return (
  <div class="resume">
    <header class="header">
      <h1 class="name">Ann Makiichuk</h1>
      <p class="header__description">Student CH | A beginner in programming</p>
    </header>

    <section class="about">
      <h2 class="label">About Me</h2>
      <p class="description">Hi, I'm Anna. I completed my second year at
        Cherkasy State University. I am interested in
        learning such programming languages as
        JavaScript, Java and learning more about
        Node.js. I worked with a database in the pgAdmin
        (Postgress) environment. I have knowledge and
        skills in writing HTML, CSS. I am interested in
        writing web and mobile applications.</p>
    </section>

    <section class="experience">
      <h2 class="label">Experience</h2>
      <div class="experience-item">
        <h3 class="experience-item__label">Academic subjects at the university</h3>
        <ul class="list">
          <li>Programming in JavaScript</li>
          <li>Creating web applications</li>
          <li>HTML and CSS</li>
          <li>Basics of web technologies</li>
          <li>Database</li>
          <li>Website development</li>
          <li>OOP in the Java language</li>
          <li>Operating systems</li>
          <li>Programming basics</li>
        </ul>
      </div>
    </section>

    <section class="education">
      <h2 class="label">Education</h2>
      <div class="education-item">
        <h3 class="education-item__label">Bachelor's degree, 3rd year</h3>
        <p class="education-item__describe">Cherkasy State Technological University, Cherkasy | 2021 - to date</p>
      </div>
    </section>

    <section class="skills">
      <h2 class="label">Skills</h2>
      <ul class="list">
        <li>JavaScript</li>
        <li>CSS</li>
        <li>HTML</li>
        <li>Java</li>
        <li>DataBase</li>
        <li>Strong Communication</li>
        <li>Responsibility</li>
        <li>Creativity</li>
      </ul>
    </section>

    <section class="portfolio">
      <h2 class="label">GitNub</h2>
      <p class="portfolio__info">Check out my github at <a class="link" href="https://github.com/anutka-mak" target="_blank">anutka-mak</a></p>
    </section>

    <section class="contact">
      <h2 class="label">Contact</h2>
      <div class="contact__info">
        <p>Email: annmakiichuk@gmail.com</p>
        <p>Phone: +380 96 551 42 31 </p>
        <p>LinkedIn: <a class="link" href="https://www.linkedin.com/in/анна-макійчук-b92582283/" target="_blank">linkedin.com/in/анна-макійчук-b92582283/</a>
        </p>
      </div>
    </section>
  </div>
);
}

export default App;
