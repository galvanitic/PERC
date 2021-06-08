console.log('Content script works!');
var un = "rjg3268";
var pw = "V464!uM3S";
var signInSequence = function () {
    var _a;
    if (document.getElementById("login-button")) {
        var signInButton_1 = (_a = document.getElementById("login-button")) === null || _a === void 0 ? void 0 : _a.children[0];
        var username = document.getElementById("username");
        var password = document.getElementById("password");
        username.value = un;
        password.value = pw;
        signInButton_1.value = "Begin Scraping";
        setTimeout(function () {
            signInButton_1.click();
            console.log('Sign in button pressed');
        }, 2000);
    }
};
var scrapingSeqence = function () {
    var fos = document.getElementById("fos_fl");
    var levels = ['L', 'U', 'G'];
    var ccyys = "20212";
    var search_type_main = "FIELD";
    var fos_fl;
    var level;
    // let rootEP = `https://utdirect.utexas.edu/apps/registrar/course_schedule/20212/results/?ccyys=${ccyys}&search_type_main=${search_type_main}&fos_fl=${fos_fl}&level=${level}`;
    if (fos) {
        var fosChildren = fos.children;
        var _loop_1 = function (j) {
            var _loop_2 = function (i) {
                var fos_1 = fosChildren[i];
                var fosValue = fos_1.value.split(' ').join('+');
                setTimeout(function () {
                    window.open("https://utdirect.utexas.edu/apps/registrar/course_schedule/20212/results/?ccyys=" + ccyys + "&search_type_main=" + search_type_main + "&fos_fl=" + fosValue + "&level=" + levels[j], "_blank");
                }, 2000);
            };
            for (var i = 0; i < fosChildren.length; i++) {
                _loop_2(i);
            }
        };
        // Iterate through fields of study and save them 
        for (var j = 0; j < levels.length; j++) {
            _loop_1(j);
        }
    }
};
var main = function () {
    signInSequence();
    scrapingSeqence();
};
main();
