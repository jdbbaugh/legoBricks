const eventListeners = {
  handleFormSubmission () {
    const creator = document.getElementById("lego__creator").value;
    const name = document.getElementById("lego__name").value;
    const shape = document.getElementById("lego__shape").value;
    const color = document.querySelector("#lego__color2").value;
    console.log(document.querySelector("#lego__color2").value);

      const legoObject = {
        creatorName: creator,
        legoName: name,
        legoColor: color,
        legoShape: shape
    };

    data.getResources()
    .then(resourcesArray => {
      resourcesArray.forEach(legoness => {
        document.querySelector("#display-container").appendChild(domComponents.createDomElement({
          elementType: "div",
          content: `${legoness.id} Creator: ${legoness.creatorName} Name: ${legoness.legoName} Shape: ${legoness.legoShape} Color: ${legoness.legoColor}`,
          cssClass: `legoId${legoness.id}`
        }))
        // console.log(legoness);
        document.querySelector(`#display-container`).appendChild(domComponents.createDomElement({
          elementType: "button",
          content: "delete lego from json",
          cssClass: `${legoness.id}`
        }))
      })
      
    });
 data.postLego(legoObject);
    },
    deleteButton () {
      // console.log(event.path[0].classList[0]);
      let num = event.path[0].classList[0]
      data.deleteLego(num);
      
      let gone = document.querySelector(`button[class='${num}']`)
      let alsoGone = document.querySelector(`div[class='legoId${num}']`)
      
      gone.parentNode.removeChild(gone);
      alsoGone.parentNode.removeChild(alsoGone);
    }
  };
