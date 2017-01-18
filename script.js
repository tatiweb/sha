var $ = function( id ) { return document.getElementById( id ); };

function focusinput(){
    $("input").focus();

    $("input").value = "SHA                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     2017"
    hash();
}

function changeFontSize(){
	$("input").style.fontSize = $("slider").value+"px";
	$("input").style.height = $("slider").value*1.7+"px";
}

function toggleLeftArrow(){
    toggleVisibility("arrow_left_up");
    toggleVisibility("arrow_left_down");
}

function toggleRightArrow(){
    toggleVisibility("arrow_right_up");
    toggleVisibility("arrow_right_down");
}

function toggleVisibility(elementName){
	(document.getElementById(elementName).style.display == 'none') ?document.getElementById(elementName).style.display='block' : document.getElementById(elementName).style.display='none'
}


function hash(){
    output = sha1($("input").value);
    $("SHA1_normal").value = output;
    $("SHA1_uppercase").value = output.toUpperCase();
    $("SHA1_split").value = splitper(output,2,":");

    // to make this site more colorful and happy, we convert the hex we get to HTML colors following the infamous freedom flag :)
    flag = "#" + splitper(output,6," #");
    flagcolors = flag.split(" "); // a flag is postfixed with remaining, not html safe colors, such as + C0
    if (flagcolors[flagcolors.length-1].length < 7){
        flagcolors[flagcolors.length-1] = flagcolors[flagcolors.length-1].replace("#","+");
    }
    flag = flagcolors.join(" ");
    $("SHA1_freedomflag").value = flag;

    var happyColors = "";

    asciiNeeded = (flagcolors[flagcolors.length-1].length < 7);

    if (flagcolors.length > 1) {
        for (j=0;j<flagcolors.length;j++){
            if (j < flagcolors.length-2) {
                happyColors += "<span class='flagblock' style='background-color: "+flagcolors[j]+"'>&nbsp;</span>";
            } else {
                if (asciiNeeded){
                    happyColors += "<span class='flagblock' style='background-color: "+flagcolors[j]+"'><span class='flagcode'>" +flagcolors[(j+1)]+ "</span></span>";
                    break;
                } else {
                    happyColors += "<span class='flagblock' style='background-color: "+flagcolors[j]+"'>&nbsp;</span>";
                }
            }
        }
    }
    $("SHA1_flag").innerHTML = happyColors;
	$("logo").innerHTML = happyColors;
	$("textcode").innerHTML = flagcolors[flagcolors.length-1];

	$("logotext").innerHTML = $("input").value.substring(0,6);
}

// with 11061 spaces, you have SHA( *11061) 2017 that has a flag with +2017
// also one at 26832 (happy colors), 30439, , in the 64000 in lowercase.
function shabrute(){
	padding = "";
	answer = "";
	skip = 1;

	while (1){
		padding += " "
		bla = sha1("SHA" + padding + "2017")
		answer = bla.substring(36)
		if (answer == "2017")
			alert(padding.length)
	}

}

function splitper(value, n, separator){
    var returnValue = "";

    for (j=0; j<value.length; j += n){
        returnValue += value.substr(j,n) + separator;
    }

    return returnValue.substr(0,returnValue.length-(separator.length));
}
