
var hidden = true;

$(document).ready(function () {
    $('#myframe').attr('src', 'http://localhost:3000/');
});

function mobileWidth() {
    document.getElementById("myframe").style.height = "100%";
    document.getElementById("myframe").style.width = "100%";
}

function notMobileWidth() {
    document.getElementById("myframe").style.height = "590px";
    document.getElementById("myframe").style.width = "400px";
}

window.addEventListener("message", evt => {
    var iFrame = document.getElementById('myframe');
    if (evt.data === 'shows') {
        hidden = false;
        if (document.documentElement.clientWidth > 600) {
            iFrame.contentWindow.postMessage("notMobile", "http://localhost:3000/");
            notMobileWidth();
        } else {
            iFrame.contentWindow.postMessage("Mobile", "http://localhost:3000/");
            mobileWidth();
        }

    }

        else  if (evt.data === 'hides') {
            hidden = true;
            document.getElementById("myframe").style.height = "95px";
            document.getElementById("myframe").style.width = "95px";
        } 
    else if (evt.data === 'requestWidth') {
        if (document.documentElement.clientWidth > 600) {
            iFrame.contentWindow.postMessage("notMobile", "http://localhost:3000/");
        } else {
            iFrame.contentWindow.postMessage("Mobile", "http://localhost:3000/");
        }
    } else if (isJson(evt.data)) {
        let arr = JSON.parse((evt.data));
        if (arr.hasOwnProperty('navigate')) {
            window.location.href = arr['navigate'];
        }
    }
});

function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
window.addEventListener("resize", function () {
    let iFrame = document.getElementById('myframe');
    if (document.documentElement.clientWidth > 600) {
        if (!hidden) {
            iFrame.contentWindow.postMessage("notMobile", "http://localhost:3000/");
            notMobileWidth();
        }
    } else {
        if (!hidden) {
            mobileWidth();
            iFrame.contentWindow.postMessage("Mobile", "http://localhost:3000/");
        }
    }
}, true);
$(document).ready(function () {
    window.onload = function () {

        // setTimeout(function () {
        //     $('.preloader').fadeOut(500, function () {
        //         $('.preloader').remove();
        //     });
        // }, 650);
        if (document.documentElement.clientWidth < 600) {
            if (!hidden)
                mobileWidth();
        } else {

            if (!hidden)
                notMobileWidth();
        }
    };
    // $('<iframe src="http://support.b-pal.net/" id="myframe" style="display: block; border: none; position: fixed; width: 450px; height: 647px; max-height: 100%; opacity: 1; right: 0px; bottom: 0px; background: none transparent; margin: 0px; max-width: 100vw; transform: translateY(0px); transition: none 0s ease 0s; visibility: visible; z-index: 999999999 !important;"></iframe>').appendTo("body");


    $('<iframe src="https://montychatbot2.herokuapp.com/"   style="display: block; border: none; position: fixed; width: 100%; height: 100%; max-height: 100%; opacity: 1; right: 0; bottom: 0; background: none transparent; margin: 0; max-width: 100vw; transform: translateY(0px); transition: none 0s ease 0s; visibility: visible; z-index: 999999999 !important;style="transform: scale(0.28,0.28) translate(1258px,-865px);width: 1000px;height: 700px;border-radius: 50px;"></iframe>').appendTo("body");
    //$('<iframe width="2024" height="2000" src="http://localhost:3000/" style="-webkit-transform:scale(0.5);-moz-transform-scale(0.5);"></iframe>').appendTo("body")
   

});

