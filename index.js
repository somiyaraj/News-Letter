/*This line selects the HTML element with the ID `articles-container` and assigns it to
 the constant `main`. This is where the news articles will be appended in the DOM.*/
const main = document.getElementById('articles-container');
/*Two variables `data` and `dataLength` are declared. `data` will hold the array of articles fetched from the API, 
and `dataLength` will store the number of articles.*/
let data;
let dataLength;
/*1-> An asynchronous function (`getData`) is defined to fetch data from the NewsAPI.
2-> The (`fetch`) function makes a GET request to the API endpoint with the provided URL and API key.
3-> The (`await`) keyword is used to wait for the response from the API, which is then converted to JSON format.
4-> The resulting JSON object is assigned to (`result`), from which (`result.articles`) (an array of articles) is assigned to the (`data`) variable.
5-> (`dataLength`) is set to the length of the `data` array.
6->The fetched articles are logged to the console for debugging purposes.
7->Finally, the (`renderUI`) function is called to render the fetched articles on the webpage.*/
async function getData() {
    const res = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=b7ffdaf797634749b738eeea32fa6505")
    const result = await res.json();
    data = result.articles;
    dataLength = data.length;
    console.log("\n : data:", data)

    renderUI();
}

getData(); 

/*1-> The (`renderUI`) function is defined to create and append the articles to the main container.
2-> A `for` loop iterates over the `data` array, creating an HTML `article` element for each news article.
3-> The `innerHTML` property of the `article` element is set to a template string that includes:
4-> An `img` element displaying the article's image.
 5-> A `div` containing:
6-> An `h1` element displaying the article's title.
7-> A `p` element displaying the article's description.
8-> A bold `p` element displaying the author's name.
9-> An a element linking to the full article, opening in a new tab (target="_blank").
10-> Each `article` element is appended to the main container.*/
function renderUI() {
    for(let i=0; i<dataLength; i++) {
        const article = document.createElement('article');
        article.innerHTML = `
            <img class="article-image" src="${data[i].urlToImage}" alt="news"/>
            <div class="article-content">
                <h1>${data[i].title}</h1>
                <p>${data[i].description}</p>
               <b> <p> Author: ${data[i].author}  </p> </b>
                <a href="${data[i].url} sty" target="_blank"> Read More...  </a>
            </div>
        `;
        main.appendChild(article);
    }
}

