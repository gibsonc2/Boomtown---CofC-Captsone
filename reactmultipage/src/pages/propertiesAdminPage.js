import React, { useState, useEffect } from "react";
import './../propertiesAdminCSS.css'

function PropertyAdminPage() {
  const [userEdits, setUserEdits] = useState("");

  useEffect(() => {
    // find out if the user has previously saved edits
    const storedEdits = localStorage.getItem("userEdits");
    if (storedEdits) {
      setUserEdits(storedEdits);
    }
  }, []);

  function saveEdits() {
    //get the editable element
    const editElem = document.getElementById("edit");

    //get the edited element content
    const userVersion = editElem.innerHTML;

    //save the content to local storage
    localStorage.setItem("userEdits", userVersion);

    //write a confirmation to the user
    document.getElementById("update").innerHTML = "Edits saved!";
  }

  function allowEdits() {
    document.getElementById("edit").contentEditable = "true";
    document.getElementById("edit").style.borderStyle = "solid";
    showSaveOption();
  }

  function stopEdit() {
    document.getElementById("edit").contentEditable = "false";
    document.getElementById("edit").style.borderStyle = "none";
    hideSaveOption();
  }

  function showSaveOption() {
    document.getElementById("saveEdits").style.visibility = "visible";
    document.getElementById("update").style.visibility = "visible";
    document.getElementById("doneEditing").style.visibility = "visible";
  }

  function hideSaveOption() {
    document.getElementById("saveEdits").style.visibility = "hidden";
    document.getElementById("update").style.visibility = "hidden";
    document.getElementById("doneEditing").style.visibility = "hidden";
  }

  return (
    <div>
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

      <main>
        <h1>Propery #</h1>

        <button type="button" onClick={() => window.location.href = 'properties.html'}>Back</button>
        <button type="button" onClick={allowEdits}>Edit Profile</button>

        <div id="image_row">
          <img src="house.png" alt="house image" />
          <img src="house.png" alt="house image" />
          <img src="house.png" alt="house image" />
          <img src="house.png" alt="house image" />
        </div>

        <div id="property_info">
          <h1>Property Info</h1>

          <div
            id="edit"
            contentEditable={userEdits ? "true" : "false"}
            onInput={(e) => setUserEdits(e.target.innerHTML)}
            dangerouslySetInnerHTML={{ __html: userEdits }}
          />

          <input
            type="button"
            id="saveEdits"
            value="Save"
            style={{ visibility: userEdits ? "visible" : "hidden" }}
            onClick={saveEdits}
          />
          <input
            type="button"
            id="doneEditing"
            value="Done"
            style={{ visibility: userEdits ? "visible" : "hidden" }}
            onClick={stopEdit}
          />

          <div
            id="update"
            style={{
              visibility: "hidden",
              fontWeight: "bold",
            }}
          >
            Edit information and click "Save" to save changes and "Done" to
            finish editing.
          </div>
        </div>
      </main>
    </div>
  )
          }
export default PropertyAdminPage