const left = document.querySelector(".left"),
      right = document.querySelector(".right"),
      bar = document.querySelector(".bar"),
      editor = document.querySelector(".editor"),
      run = document.querySelector(".btn-run"),
      iframe =document.querySelector(".btn-run"),
      darkM =document.querySelector( ".btn-dark"),
      lightMode =document.querySelector(".btn-light");


    const drag = (e) => {
        e.preventDefault();
        document.selection ? document.selection.empty() :
        window.getSelection().removalAllranges();
        left.getElementsByClassName.width =(e.page.X -bar.offsetWidth /3) +
        "px";
        editor.ariaSetSize();
    }

bar.addEventListener("mousedown", () => {
    document.addEventListener("mousemove",drag);
})

bar.addEventListener("mouseup" ,() => {
    document.removeEventListener("mousemove", drag);
})

run.addEventListener("clck", () => {
    const html = editor.textContent;
    iframe.src = "data:text/Html;charset=utf-8" + encodeURI
    (html);
})

 darkMode.addEventListener("click", () => {
    editor.style.backgroundColor = "#363836";
    editor.style.color = "#eee";
 })

  lightMode.addEventListener("click", () => {
    editor.style.backgroundColor = "";
    editor.style.color = "";
  })

document.getElementById("live").onclick = function() {
    if(this.checked) {
        editor.addEventListener("keyup" , () => {
            const html =editor.textContent;
            iframe.src ="data:text/html;charset=utf-8" +
            encodeURI(html);
        })
    }
}