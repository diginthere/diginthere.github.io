document.addEventListener("DOMContentLoaded", function () {
    (function () {
        var d = document,
            w = window;
        var tf = d.createElement("script");
        tf.src = "https://embed.typeform.com/embed.js";
        tf.onload = function () {
            window.tf.load("01J73TFJS8HA9YNNZHNZPK5Y97", {
                container: "#typeform-embed",
                iframe: {
                    hideHeaders: true,
                    hideFooters: true,
                },
            });
        };
        d.body.appendChild(tf);
    })();
});
