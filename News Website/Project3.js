console.log("this is my project3")
// c8fcf0344f7a4320ae51f55c28d5fed8

let newsAccordion = document.getElementById("newsAccordion");
let xhr = new XMLHttpRequest();
xhr.open("GET" , "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=c8fcf0344f7a4320ae51f55c28d5fed8" , "ture");
xhr.onload = function () {
  if(this.status === 200){
    let json = JSON.parse(this.responseText);
    let article = json.articles
    empty = "";
    article.forEach( function(element , index  ) {
      console.log(element)
      let news = `<div class="panel panel-default">
      <div class="panel-heading"  >
        <h4 class="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse${index}"><strong><b style="color: red;">${index+1} Breaking News </b>${element.title}</strong></a>
        </h4>
      </div>
      <div id="collapse${index}" class="panel-collapse collapse ">
        <div class="panel-body">${element.description} <a href="${element.url}" target = _blank> Read More</div>
      </div>
      </div>`
      empty += news; 
    });
    newsAccordion.innerHTML = empty;
    // console.log(article)
    // console.log(json);
  }
  else{
    console.error;
  }
}
xhr.send();