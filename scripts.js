var savedBurgers = [];

var submittedBurgers = 0;

var currentBurger = {
  burger1: "",
  burger2: "",
  burger3: "",
  burger4: "",
  burger5: ""
};

var topBun = "http://smashburger.com/wp-content/themes/smashburger_v3/img/bun_top.png";
var lettuce = "https://d301r8r2i6eqlt.cloudfront.net/wp-content/uploads/2017/04/07132627/lettuce1.png";
var cheese = "https://previews.123rf.com/images/bwf211/bwf2111604/bwf211160400167/57329973-Side-view-of-several-slices-of-pepper-jack-cheese-isolated-on-a-white-background--Stock-Photo.jpg";
var meat = "https://i.warosu.org/data/ck/img/0067/84/1439759550020.jpg";
var bottomBun = "http://www.shoelessjoes.ca/wp-content/uploads/2013/11/sj-burger-bottom-bun.png";

$('#clearBurger').on('click', function() {
  clearBurger();
});

function clearBurger() {
  currentBurger.burger1 = "";
  $('#burger1').attr('src', "");
  currentBurger.burger2 = "";
  $('#burger2').attr('src', "");
  currentBurger.burger3 = "";
  $('#burger3').attr('src', "");
  currentBurger.burger4 = "";
  $('#burger4').attr('src', "");
  currentBurger.burger5 = "";
  $('#burger5').attr('src', "");
};

$('#submitBurger').on('click', function() {
  savedBurgers.push(currentBurger);
  console.log(savedBurgers);
  submittedBurgers++;
  $('#userNum').html(submittedBurgers);
  clearBurger();
});

$('#topBun').on('click', function() {
  if ($('#burger1').attr('src') === "") {
    $('#burger1').attr("src", topBun);
    currentBurger.burger1 = topBun;
    console.log(currentBurger);
  } else if ($('#burger2').attr('src') === "") {
    $('#burger2').attr("src", topBun);
    currentBurger.burger2 = topBun;
    console.log(currentBurger);
  } else if ($('#burger3').attr('src') === "") {
    $('#burger3').attr("src", topBun);
    currentBurger.burger3 = topBun;
    console.log(currentBurger);
  } else if ($('#burger4').attr('src') === "") {
    $('#burger4').attr('src', topBun);
    currentBurger.burger4 = topBun;
    console.log(currentBurger);
  } else if ($('#burger5').attr('src') === "") {
    $('#burger5').attr('src', topBun);
    currentBurger.burger5 = topBun;
    console.log(currentBurger);
  };
});

$('#lettuce').on('click', function() {
  if ($('#burger1').attr('src') === "") {
    $('#burger1').attr("src", lettuce);
    currentBurger.burger1 = lettuce;
    console.log(currentBurger);
  } else if ($('#burger2').attr('src') === "") {
    $('#burger2').attr("src", lettuce);
    currentBurger.burger2 = lettuce;
    console.log(currentBurger);
  } else if ($('#burger3').attr('src') === "") {
    $('#burger3').attr("src", lettuce);
    currentBurger.burger3 = lettuce;
    console.log(currentBurger);
  } else if ($('#burger4').attr('src') === "") {
    $('#burger4').attr('src', lettuce);
    currentBurger.burger4 = lettuce;
    console.log(currentBurger);
  } else if ($('#burger5').attr('src') === "") {
    $('#burger5').attr('src', lettuce);
    currentBurger.burger5 = lettuce;
    console.log(currentBurger);
  };
});

$('#cheese').on('click', function() {
  if ($('#burger1').attr('src') === "") {
    $('#burger1').attr("src", cheese);
    currentBurger.burger1 = cheese;
    console.log(currentBurger);
  } else if ($('#burger2').attr('src') === "") {
    $('#burger2').attr("src", cheese);
    currentBurger.burger2 = cheese;
    console.log(currentBurger);
  } else if ($('#burger3').attr('src') === "") {
    $('#burger3').attr("src", cheese);
    currentBurger.burger3 = cheese;
    console.log(currentBurger);
  } else if ($('#burger4').attr('src') === "") {
    $('#burger4').attr('src', cheese);
    currentBurger.burger4 = cheese;
    console.log(currentBurger);
  } else if ($('#burger5').attr('src') === "") {
    $('#burger5').attr('src', cheese);
    currentBurger.burger5 = cheese;
    console.log(currentBurger);
  };
});

$('#meat').on('click', function() {
  if ($('#burger1').attr('src') === "") {
    $('#burger1').attr("src", meat);
    currentBurger.burger1 = meat;
    console.log(currentBurger);
  } else if ($('#burger2').attr('src') === "") {
    $('#burger2').attr("src", meat);
    currentBurger.burger2 = meat;
    console.log(currentBurger);
  } else if ($('#burger3').attr('src') === "") {
    $('#burger3').attr("src", meat);
    currentBurger.burger3 = meat;
    console.log(currentBurger);
  } else if ($('#burger4').attr('src') === "") {
    $('#burger4').attr('src', meat);
    currentBurger.burger4 = meat;
    console.log(currentBurger);
  } else if ($('#burger5').attr('src') === "") {
    $('#burger5').attr('src', meat);
    currentBurger.burger5 = meat;
    console.log(currentBurger);
  };
});

$('#bottomBun').on('click', function() {
  if ($('#burger1').attr('src') === "") {
    $('#burger1').attr("src", bottomBun);
    currentBurger.burger1 = bottomBun;
    console.log(currentBurger);
  } else if ($('#burger2').attr('src') === "") {
    $('#burger2').attr("src", bottomBun);
    currentBurger.burger2 = bottomBun;
    console.log(currentBurger);
  } else if ($('#burger3').attr('src') === "") {
    $('#burger3').attr("src", bottomBun);
    currentBurger.burger3 = bottomBun;
    console.log(currentBurger);
  } else if ($('#burger4').attr('src') === "") {
    $('#burger4').attr('src', bottomBun);
    currentBurger.burger4 = bottomBun;
    console.log(currentBurger);
  } else if ($('#burger5').attr('src') === "") {
    $('#burger5').attr('src', bottomBun);
    currentBurger.burger5 = bottomBun;
    console.log(currentBurger);
  };
});
