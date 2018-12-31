// DeepWeaver mainPageJavaScriptDocument v0.1.0
//jquesry, web3js, tiltjs, threejs, spmodals
//messid3, sanchopanza
/*jshint esversion: 6 */	
// ----------------------------------------------infura WEB3-afterquest8-addmetamask		  
if (typeof web3 !== 'undefined') {
    web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/8f088b30a069420aab49992c8f994320"));
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/8f088b30a069420aab49992c8f994320"));
}
const Abi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"startblock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_quest","type":"bytes32"},{"name":"_reward","type":"uint256"}],"name":"createQuest","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"setMaxDevMintAmount","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"questReward","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"setQuestPeriodicity","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"INITIAL_SUPPLY","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MAX_SUPPLY","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_quest","type":"string"}],"name":"solveQuest","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"startPromotionalStage","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"announceMinting","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_number","type":"uint256"}],"name":"setSocialMultiplier","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"}],"name":"AIDmint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"addMinter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"renounceMinter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_user","type":"address"}],"name":"rewardUser","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"isMinter","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"test","type":"string"}],"name":"joiLittleHelper","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"setMaxQuestReward","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"userIncentive","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"karmaSystem","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"startTransitionalStage","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"RewardSize","type":"uint256"},{"indexed":false,"name":"DatePosted","type":"uint256"}],"name":"NewQuestEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"WinReward","type":"uint256"},{"indexed":false,"name":"WinAnswer","type":"string"},{"indexed":false,"name":"WinAddres","type":"address"}],"name":"QuestRedeemedEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"UserAdress","type":"address"},{"indexed":false,"name":"RewardSize","type":"uint256"}],"name":"UserRewarded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"MaxRewardDecresed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"PeriodicitySet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"date","type":"uint256"}],"name":"MintingAnnounce","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"promo","type":"bool"}],"name":"PromotionalStageStarted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"transition","type":"bool"}],"name":"TransitionalStageStarted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"value","type":"uint256"}],"name":"DevEmissionSetLower","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"MinterAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"MinterRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}];
const Contract = '0x19d2Ee2B5bc7eD47e00ce0b13b7BD6F40f68f72E';
const contractInstance = new web3.eth.Contract(Abi, Contract);
//-----------------------------------------------------------------------------stats
contractInstance.methods.totalSupply().call().then(function(total) {
    $("#totalSupply").text((total / 1000000000000000000).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
});
var Qsolved = false;
contractInstance.getPastEvents(
    'QuestRedeemedEvent', {
        fromBlock: 3387684,
        toBlock: 'latest'
    },
    (err, events) => {}
).then(function(events) {
    console.log(events.length);
    n = events.length;
    if (n > 1) {
        Qsolved = true;
        render();
    }
});
contractInstance.getPastEvents(
    'QuestRedeemedEvent', {
        fromBlock: 3387684,
        toBlock: 'latest'
    },
    (err, events) => {}
).then(function(events) {
    $("#questData").text(events.length);
    contractInstance.getPastEvents(
        'NewQuestEvent', {
            fromBlock: 3387684,
            toBlock: 'latest'
        },
        (err, events) => {}
    ).then(function(events) {
        $("#questData").append("/" + events.length);
    });
});
var now = new Date().getTime();
var countDownDate = new Date("Feb 14, 2019 12:00:00").getTime();
var distance = countDownDate - now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
$("#halfing").text(days + "d " + hours + "h ");
//---------------------------------------------------------------------3dThree.js,particles
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(7, window.innerWidth / window.innerHeight, 1, 100);
var renderer = new THREE.WebGLRenderer({
    alpha: true
});
renderer.setSize(250, 150);
renderer.setClearColor(0x000000, 0);
$(".EMPTYBLOCK").append(renderer.domElement);
var radius = 2.8;
var segments = 10;
var rings = 8;
var lightAmb = new THREE.AmbientLight(0x777777);
scene.add(lightAmb);
var geometry = new THREE.SphereGeometry(radius, segments, rings);
var material = new THREE.MeshBasicMaterial({
    color: 0xFA2B0,
    wireframe: true
});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.y = 0.1;
camera.position.x = -1.1;
if (navigator.appVersion.indexOf("Chrome/") != -1) {
    camera.position.y = 0.3;
    camera.position.x = -1.2;
}
camera.position.z = 63;
cube.rotation.x = 0.5;
var render = function() {
    "use strict";
    requestAnimationFrame(render);
    cube.rotation.x += 0.001;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
};
//----------------------------------------------------Questsandpuzzles:firstquest
const code0 = ["", "xvb", "zIG", "xHN", "Edh", "uck", "win", "drl", "NYA", "QXJ"];
const code1 = ["", "2aX", "Hom", "LoV", "Jss", "reB", "inu", "rhm", "GJy", "zIG"];
const code2 = ["", "abc", "Ygm", "roo", "pcw", "LCB", "one", "qdr", "eli", "LCB"];
const code3 = ["", "nus", "thi", "zaG", "Rub", "FaT", "mdh", "RhI", "all", "RhI"];
const code4 = ["", "Lee", "uhF", "Bvb", "yrs", "Dby", "idd", "==", "lwi", "ZXZ"];
$("button").click(function() {
    if (this.id === "c") {
        "use strict";
        $("#numberPad").text("");
        var audio = $("#clearSound")[0];
        audio.currentTime = 0;
        audio.play();
        return;
    }
    if ($("#numberPad").text().length >= 12) {
        var audio = $("#deniedSound")[0];
        audio.play();
        return;
    } else {
        $("#numberPad").append(this.id);
        enterDigit();
    }
});

function enterDigit() {
    "use strict";
    $("#numberPad").css("-webkit-animation-name", "purplePulse").css("-webkit-animation-duration", "0.05s").css("-webkit-animation-iteration-count", "1");
    var audio = $("#padSound")[0];
    audio.currentTime = 0;
    audio.play();
    console.log("enterDigit");
    if ($("#numberPad").text().length >= 11) {
        check();
        return;
    }
    if ($("#numberPad").text().length >= 18) {
        error();
    }
    setTimeout(function() {
        $("#numberPad").css("-webkit-animation-name", "none").css("-webkit-animation-duration", "none").css("-webkit-animation-iteration-count", "none");
        $("#numberPad").outerHeight();
    }, 50);
}
//Mixmixmix-utf8result
function check() {
    "use strict";
    var SecretNumber = $("#numberPad").text();
    contractInstance.methods.joiLittleHelper(SecretNumber).call().then(function(total2) {
        console.log(total2);
        if (total2 === "0x22e75b98d77a1aa568a700d5a5488774f482e5fd4f6ada734bcc118e5a634967") {
            var audio = $("#zenSound")[0];
            audio.play();
        }
    });
    var audio = $("#misterySound")[0];
    audio.play();
    $(".thumbnail2").hide();
    var hohoho = code0[SecretNumber[0]] + code1[SecretNumber[1]] + code0[SecretNumber[2]] + code3[SecretNumber[3]] + code2[SecretNumber[4]] + code1[SecretNumber[5]] + code3[SecretNumber[6]] + code1[SecretNumber[7]] + code4[SecretNumber[8]] + code2[SecretNumber[9]] + code4[SecretNumber[10]];
    $("#reward").text(hohoho);
}
//-------------------------------------------------------------------------siteinteractive
$(".banner").scroll(function() {
    "use strict";
    var scrollTop = $(this).scrollTop();
    $('.citySleeps').css({
        opacity: function() {
            var elementHeight = $(this).height(),
                opacity = 1 - ((1 - (elementHeight - scrollTop) / elementHeight) * 1.9);
            return opacity;
        }
    });
    $('.mafiaAwakens').css({
        opacity: function() {
            var elementHeight = $(this).height(),
                opacity = 3.4 - ((1 - (elementHeight - scrollTop) / elementHeight) * 1.9);
            return opacity;
        }
    });
    $('.communityAwakens').css({
        opacity: function() {
            var elementHeight = $(this).height(),
                opacity = 6.8 - ((1 - (elementHeight - scrollTop) / elementHeight) * 1.9);

            return opacity;
        }
    });
});

function knockknock() {
    "use strict";
    var audio = $("#humSound")[0];
    audio.currentTime = 0;
    audio.play();
    $(".banner").animate({
        scrollTop: $(document).height()
    }, "slow");
    if ($(".banner").scrollTop() > 300) {
        $("#questBuilding").toggleClass("profile1300");
        $('.communityAwakens').toggleClass("profile1301");
        $(".mafiaAwakens").toggleClass("profile1301");
        $(".citySleeps").toggleClass("profile1301");
        if (Qsolved === false) {
            $(".CIRCLEOBJECT").show();
        }
    }
}
$(window).scroll(function() {
    "use strict";
    if ($(".banner").scrollTop() < 200) {
        var scrollTop = $(this).scrollTop();
        $('.citySleeps').css({
            opacity: function() {
                var elementHeight = $(this).height(),
                    opacity = 0.8 - ((1 - (elementHeight - scrollTop) / elementHeight));
                return opacity;
            }
        });
    }
});

var audioOpen = $("#closeSound")[0],
    audioClose = $("#openSound")[0],
    music = $("#musicSound")[0],
    modalValue = "";
audioOpen.volume = 0.7;
$(".thumbnail").click(function() {
    "use strict";
    audioOpen.play();
    $("#_" + this.id).show();
    modalValue = this.id;
});
$("#questMe").click(function() {
    "use strict";
    music.play();
    $("#_questMe").show();
    modalValue = this.id;
});
$("#modals").mousedown(function() {
    "use strict";
    setTimeout(function() {
        $("#_" + modalValue).hide();
        audioClose.play();
    }, 50);
});

$('.modal-content').tilt({
    maxTilt: 1,
    perspective: 1000,
});
$('.thumbnail').tilt({
    glare: true,
    maxGlare: 0.5,
    scale: 1.05
});


function clickme() {
    "use strict";
    $("#box").toggleClass("box2Hide").addClass("box2");
    $(".thumbnail2").show();
    $("#reward").text("");
    $("#numberPad").text("");
    var audio = $("#clickSound")[0];
    audio.currentTime = 0;
    audio.volume = 0.7;
    audio.play();
}
var no = true;

function playmeDen() {
    "use strict";
    if (no) {
        if (Qsolved === false) {
            $("html, body").animate({
                scrollTop: $(document).height()
            }, 1000);
        }
        $("#Coin").toggleClass("coinDrop");
        $("#CoinInv").toggleClass("coinDropInvisible");
        audio = $("#solveSound")[0];
        audio.volume = 0.5;
        audio.currentTime = 0;
        audio.play();
        no = false;
        return;
    }
    var audio = $("#deniedSound")[0];
    audio.play();
}

function error() {
    "use strict";
    var audio = $("#errorSound")[0];
    audio.play();
    $(".content").hide();
    $("#errorCheck").show();
    setTimeout(function() {
        window.location.replace("https://deep-quest.com");
    }, 4000);
}