const apiKey = "nDgyHgCdorDhOADMd6uPqYd3KWt7495f";

const http_call = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

//promesas en cadena
http_call
    .then((resp) => resp.json())
    .then(({ data }) => {
        //desestructuracion
        const { url } = data.images.original;
        //creacion del elemento
        const img = document.createElement("img");
        //set atribute
        img.src = url;
        //append en el documento
        document.body.append(img);
    })
    .catch(console.warn);
