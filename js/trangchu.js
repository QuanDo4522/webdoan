function chonmuc($this) {
    let x = document.getElementsByClassName('muc');
    for (let i = 0; i < x.length; ++i) {
        x[i].classList.remove("choose");
        document.getElementsByClassName(x[i].getAttribute('id'))[0].style.display = "none";
    }
    $this.classList.add("choose");
    let id = $this.getAttribute('id');
    document.getElementsByClassName(id)[0].style.display = "block";
}