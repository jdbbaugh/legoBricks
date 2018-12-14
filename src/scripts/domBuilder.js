const domBuilder = {
//     appendInputForm () {
//         // console.log("testing method");
//         let attachToHtml = document.getElementById("display-container");
//         attachToHtml.appendChild(domComponents.createDomElement({
//             elementType: "fieldset",
//             attributes: {
//                 id: "label-container"
//             },
//         }));
//         let attachToFieldSet = document.getElementById("label-container");
//         attachToFieldSet.appendChild(domComponents.createDomElement({
//             elementType: "label",
//             content: "Creator",
//             attributes: {
//                 for: "lego__creator",
//                 id: "creator"
//             },
//         }));
//         attachToFieldSet.appendChild(domComponents.createDomElement({
//             elementType: "label",
//             attributes: {
//                 id: "lego__creator",
//                 name: "lego__creator",
//                 type: "text"
//             },
//         }));
//     }
// };
    appendInputForm () {
    let inputForm = `<article>
    <fieldset>
    <label for="lego__creator">Creator:</label>
    <input id="lego__creator" name="lego__creator" type="text" autofocus />
    </fieldset>
    <fieldset>
    <label for="lego__name">Name:</label>
    <input id="lego__name" name="lego__name" type="text" autofocus />
    </fieldset>
    <fieldset>
    <label for="lego__shape">Shape:</label>
    <input id="lego__shape" name="lego__shape" type="text" autofocus />
    </fieldset>
    <button class="btn lego__save">Save Lego Creation</button>
    </article>`
    let displayContainer = document.querySelector("#display-container")
    displayContainer.innerHTML = inputForm;

    document.querySelector("article").appendChild(domComponents.createDomElement({
        elementType: "select",
        attributes: {
            id: "lego__color2"
        }
    }))
    
    data.getResourceColors()
    .then(colorArray => {
        colorArray.forEach(info => {
            // console.log(info);
            document.getElementById("lego__color2").appendChild(domComponents.createDomElement({
                elementType: "option",
                content: `${info.color}`,
                cssClass: `${info.id}`,
            }))
        })
    })
    
    },
};