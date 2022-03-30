liffstarter = function (){
    function init(){
        initializeLiff("1653675461-o2bZ0Lrr");
        liffReady();
    }
    // liff初始化
    function initializeLiff(myLiffId) {
        liff
            .init({
                liffId: myLiffId
            })
            .then(() => {
                // start to use LIFF's api
                console.log("OS: " + liff.getOS()); // 取得目前開啟頁面的裝置 web, iOS, android
                console.log("InClient: " + liff.isInClient()); // 是否在 LINE App 內開啟 。
                console.log("LoggedIn: " + liff.isLoggedIn()); // 否已登入 LINE Login,網頁環境下才有未登入情境。

                // gets the current user's email address and profile information
                const idToken = liff.getDecodedIDToken();
                console.log(idToken) // print decoded idToken object

                if (!liff.isLoggedIn()) {
                    liff.login();
                }
            })
            .catch((err) => {
                console.log(err)
            });
            console.log("liff.init")
    }

    // execute any process after the completion of liff.init()
    function liffReady(){
        liff.ready.then(function(){

            // Getting the screen type from which the LIFF app was launched
            console.log(liff.getContext());
            // $("p").html(JSON.stringify(liff.getContext()));

            // Gets the current user's profile.

            liff.getProfile().then(function(profile){
                console.log(profile)
                lineid = profile.userId
                userName = profile.displayName
                userPic = profile.pictureUrl
                // 取得資料
                main.getData();

                console.log("lineid: " + lineid)
                console.log("userName: " + userName)
                console.log("userPic: " + userPic)
            }).catch(function(err){
                console.log(err)
            });

            // opens the specified URL in LINE's in-app browser or an external browser
            // liff.openWindow({
            //     url: "https://mouthpre.darlie.cecmartech.com/sp2021/index.html?lineid="+lineid,
            //     external: true  // Whether to open the URL in an external browser
            // })ß
        });
        console.log("liff.ready")
    }

    {
        $(document).ready(function () {
            init();
        });
    }

}
var liffstarter = new liffstarter();
