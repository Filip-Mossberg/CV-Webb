fetch('CV-Info.json')
.then(output => output.json())
.then(content => {
    const asideContainer = document.getElementsByClassName("aside-text-container")[0]
    asideContainer.appendChild(AsideText(content.AsideText), AsideContact(content.AsideContact))

    const mainContainer = document.getElementsByClassName('main')[0]
    mainContainer.appendChild(MainContent(content.MainContent));

});

    const container = document.createElement('div');
    container.className = "aside-text-box";

    // Function for the Aside Text (Under the image and above the contact info)
    function AsideText(obj){

        obj.forEach(item => {

            if(item.Title === "Ankarskolan" || item.Title === "Sommarvärd"){
                const line = document.createElement('div')
                line.className = "small-line";

                container.appendChild(line)
            }

            let textElement;
            (item.Title === "Education" ||  item.Title === "Work") ? textElement = document.createElement('h2'): textElement = document.createElement('h3');
            textElement.textContent = item.Title;
            (item.Title === "Education" ||  item.Title === "Work") ? textElement.className = "aside-head-title": textElement.className = "aside-title";
            container.appendChild(textElement);

            const textElement1 = document.createElement('p');
            textElement1.textContent = item.StudyWork;
            container.appendChild(textElement1);

            const textElement2 = document.createElement('p');
            textElement2.textContent = item.Date;
            container.appendChild(textElement2);

            

            if(item.Date === "2022-Now"){
                const line = document.createElement('div')
                line.className = "small-line";

                container.appendChild(line)
            }
        });
        return container; 
    }
    // Function for the Aside Contact information
    function AsideContact(obj){

        obj.forEach(item => {
            if(item.Contact === "Contact"){
                const title = document.createElement('h2')
                title.className = "aside-head-title";
                title.textContent = item.Contact;
                container.appendChild(title);
            }
            else {
                const symbol = document.createElement('i');

                if(item.Contact === "073-734 65 66"){
                    symbol.className = "fa-solid fa-phone";
                }
                else{
                    (item.Contact === "filip.mossberg@gmail.com") ? symbol.className = "fa-solid fa-envelope": symbol.className = "fa-solid fa-house";
                }

                const contactBox = document.createElement('div');
                contactBox.className = "contact-boxes";
    
                const redArea = document.createElement('div');
                redArea.className = "red-area";
    
                const whiteArea = document.createElement('div');
                const contact = document.createElement('p');
                contact.textContent = item.Contact;
                whiteArea.className = "text-area";

                redArea.appendChild(symbol);
                whiteArea.appendChild(contact);
                contactBox.appendChild(redArea);
                contactBox.appendChild(whiteArea);
                container.appendChild(contactBox);
            }
        })
        return container;
    }

    // Function for the main text area of the CV in combination with the header
    function MainContent(obj){
        const mainContent = document.createElement('div');

        obj.forEach(item => {

            let textElement;

            if(item.Title === "Filip Mossberg"){
                const header = document.createElement('div');
                header.className = "header";

                textElement = document.createElement('h1');
                textElement.className = "cv-title";
                textElement.textContent = item.Title;

                header.appendChild(textElement);
                mainContent.appendChild(header);
            }
            else{
                const textArea = document.createElement('div');
                textArea.className = "text";

                (item.Title === "About me" || item.Title === "Work Experience") ? textElement = document.createElement('h1'): textElement = document.createElement('h3');
                textElement.textContent = item.Title;
                textArea.appendChild(textElement);

                textElement = document.createElement('p');
                textElement.textContent = item.Text;
                textArea.appendChild(textElement);

                mainContent.appendChild(textArea);
            }
        })
        return mainContent;

    }