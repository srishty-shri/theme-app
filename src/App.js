import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const {background_color : b_color } = window.runTimeConfig.body;
  const {background_color : f_color} = window.runTimeConfig.footer;
  const {dummy_text} = window.runTimeConfig.section;
  const {getSize, secondaryColor, logoLocation} = window.runTimeConfig.general;
  const b_style = {
    backgroundColor : b_color,
    padding : getSize(1),
    fontSize : getSize(1.5)
  }

  const f_style = {
    backgroundColor : f_color,
    padding : getSize(1)
  }

  const n_style = {
    backgroundColor : secondaryColor,
    marginTop : getSize(1),
    padding : getSize(1)
  }

  return (
  <div id="body" style={b_style}>
    <header><img width={getSize(3)} height={getSize(3)} src={logoLocation} alt="LOGO" ></img></header>
        <nav style={n_style}>
          <a href="javascript:void(0);">HTML</a> |
          <a href="javascript:void(0);">Lorem Ipsum</a> |
          <a href="javascript:void(0);">Lorem Ipsum</a> |
          <a href="javascript:void(0);">Lorem Ipsum</a>
        </nav>
            <section>
                <p>Top Stories</p>
                <section>
                  <p>News</p>
                  <article>{dummy_text}</article>
                  <article>{dummy_text}</article>
                  <article>{dummy_text}</article>
                </section>
                <section>
                  <p>Sport</p>
                  <article>{dummy_text}</article>
                  <article>{dummy_text}</article>
                  <article>{dummy_text}</article>
                </section>
              </section>
        <aside>Aside</aside>
        <footer style={f_style}>Footer</footer>
    </div>
  );
}

export default App;
