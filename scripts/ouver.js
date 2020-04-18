var animationData = {
    "v": "5.6.9",
    "fr": 60,
    "ip": 0,
    "op": 305,
    "w": 250,
    "h": 250,
    "nm": "Logo ouver v2",
    "ddd": 0,
    "assets": [{
        "id": "image_0",
        "w": 932,
        "h": 928,
        "u": "images/",
        "p": "img_0.png",
        "e": 0
    }],
    "layers": [{
        "ddd": 0,
        "ind": 1,
        "ty": 2,
        "nm": "Logo ouver v2 rounded",
        "refId": "image_0",
        "sr": 1,
        "ks": {
            "o": {
                "a": 0,
                "k": 100,
                "ix": 11
            },
            "r": {
                "a": 1,
                "k": [{
                    "i": {
                        "x": [0.833],
                        "y": [0.833]
                    },
                    "o": {
                        "x": [0.167],
                        "y": [0.167]
                    },
                    "t": 0,
                    "s": [0]
                }, {
                    "t": 304,
                    "s": [359]
                }],
                "ix": 10,
                "x": "var $bm_rt;\n$bm_rt = transform.rotation;"
            },
            "p": {
                "a": 0,
                "k": [124, 127, 0],
                "ix": 2
            },
            "a": {
                "a": 0,
                "k": [466, 464, 0],
                "ix": 1
            },
            "s": {
                "a": 0,
                "k": [3.97, 3.97, 100],
                "ix": 6
            }
        },
        "ao": 0,
        "ip": 0,
        "op": 311,
        "st": 0,
        "bm": 0
    }],
    "markers": []
};
var params = {
    container: document.getElementById('lottie'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: animationData
};

var anim;

anim = lottie.loadAnimation(params);