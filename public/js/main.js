var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};

const appData = () => {
    return {
        percent: 0,

        appInit() {
            // source: https://codepen.io/A_kamel/pen/qBmmGKJ
            window.addEventListener('scroll', () => {
                let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
                    height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

                this.percent = Math.round((winScroll / height) * 100);
            });
        },
    };
};

