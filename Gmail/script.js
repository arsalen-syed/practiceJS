var divHTML = `<div class="emailRow">
<div class="emailRow__options">
  <span class="material-icons"> star_border </span>
</div>

<h3 class="emailRow__title">YouTube</h3>

<div class="emailRow__message">
  <h4>
    You Got a New Subscriber
    <span class="emailRow__description"> - on Your Channel Future Coders </span>
  </h4>
</div>

<p class="emailRow__time">10pm</p>
</div>`


// document.getElementById("emailList").innerHTML = divHTML;
// document.getElementById("emailList").innerHTML = divHTML;

for (var i = 0; i < 3; i++) {
    document.getElementById("emailList").innerHTML += divHTML;
    // console.log(i)
}
  