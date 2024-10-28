
document.querySelector(".section__fIve-button").onclick =
    function ()
    {
        var Name = document.getElementById("Name").value
        var Telephone = document.getElementById("telephone").value;
        var Email= document.getElementById("email").value;

        console.log(Name,Telephone,Email)
    }
$(".burger__menu").on("click", function() {
    $(this).toggleClass("active");
    $(".burger__menu-open").toggleClass("open");
});