import React from 'react';
import './../propertiesCSS.css'

function PropertiesPage() {
  return (
    <>
      <head>
        <title>Properties Page</title>
      </head>

      <nav>
        <ul>
          <li>
            <a href="###">Realtor</a>
          </li>
          <li>
            <a href="properties.html">Properties</a>
          </li>
        </ul>
      </nav>

      <body>
        <header>
          <h1>Listed Properties</h1>
        </header>

        <main>
          {/* <div class = "row"> */}

          <figure>
            <a href="individual_propert.html">
              <img src="house.png" alt="house image" />
            </a>
            <figcaption>Property 1</figcaption>
          </figure>

          <figure>
            <a href="individual_propert.html">
              <img src="house.png" alt="house image" />
            </a>
            <figcaption>Property 2</figcaption>
          </figure>

          <figure>
            <a href="individual_propert.html">
              <img src="house.png" alt="house image" />
            </a>
            <figcaption>Property 3</figcaption>
          </figure>

          <figure>
            <a href="individual_propert.html">
              <img src="house.png" alt="house image" />
            </a>
            <figcaption>Property 4</figcaption>
          </figure>

          {/* </div> */}

          {/* <div class ="row"> */}
          <figure>
            <a href="individual_propert.html">
              <img src="house.png" alt="house image" />
            </a>
            <figcaption>Property 5</figcaption>
          </figure>

          <figure>
            <a href="individual_propert.html">
              <img src="house.png" alt="house image" />
            </a>
            <figcaption>Property 6</figcaption>
          </figure>

          <figure>
            <a href="individual_propert.html">
              <img src="house.png" alt="house image" />
            </a>
            <figcaption>Property 7</figcaption>
          </figure>

          <figure>
            <a href="individual_propert.html">
              <img src="house.png" alt="house image" />
            </a>
            <figcaption>Property 8</figcaption>
          </figure>

          {/* </div> */}
        </main>
      </body>
    </>
  );
}

export default PropertiesPage;