const getImagen = async () => {
    const apiKey = "nDgyHgCdorDhOADMd6uPqYd3KWt7495f";
    try {
        //peticion
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        //acceso a los datos
        const { data } = await resp.json();
        const { url } = data.images.original;

        console.log(url);

        //creacion del elemento y asignacion de su origen
        const img = document.createElement("img");
        img.src = url;
        //adicion al documento
        document.body.append(img);
    } catch (error) {
        console.warn(error);
    }
};

getImagen();
