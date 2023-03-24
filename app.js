const $input = $("#input");
const $search = $("#search");
const $remove = $("#remove");
const $gallery = $("#container_gallery");

function addGif(res) {
    let randomIndex = Math.floor(Math.random() * res.data.length);
    let $newDiv = $("<div>", {class: "giphyImage"});
    let $newGiph = $("<img>", {src: res.data[randomIndex].images.original.url, class: "giphImage"});
    $newDiv.append($newGiph);
    $gallery.append($newDiv);
}

$("#search").on("click", async function(e) {
    e.preventDefault();

    let input = $input.val();
    $input.val("");
    
    const response = await axios.get("https://api.giphy.com/v1/gifs/search?api_key=egZzHOLOvfIZroA0jDDwr15TfUt4kEnT", {params: {q: input}});
    addGif(response.data);
})

$("#remove").on("click", function() {
    $gallery.empty();
});