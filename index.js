function items(title,image,type){
    var item={}
    item.title=title
    item.image=image
    item.type=type
    return item
}
var item1=items('VENOM','./movieImg/Action/Venom.jpg','Action Movie')
var item2=items('THOR','./movieImg/Action/Thor.jpg','Action Movie')
var item3=items('SHAFT','./movieImg/Action/Shaft.jpg','Action Movie')
var item4=items('GODZILLA','./movieImg/Action/Godzilla.png','Action Movie')
var item5=items('BLOOD-SHOT','./movieImg/Action/BloodShot.jpg','Action Movie')
var item6=items('WOLVARINE','./movieImg/Action/wolvarine.jpg','Action Movie')
var item7=items('BLACK-PANTHER','./movieImg/Action/BlackPN.jpg','Action Movie')
var item8=items('X-MEN','./movieImg/Action/XMen.jpg','Action Movie')
var item9=items('JHON-WHICK','./movieImg/Action/johnwick.png','Action Movie')
var item10=items('TRIPLE-THREAT','./movieImg/Action/tripleThreat.jpg','Action Movie')
var item11=items('A-PERFECT-PLAN','./movieImg/Crime/APerfectplan.jpg','Crime Movie')
var item12=items('THE-LAST-DAYS-OF-AMERICAN-CRIME','./movieImg/Crime/ThelastDaysOfAmericanCrime.jpg','Crime Movie')
var item13=items('BAD-BOYS-FOR-LIFE','./movieImg/Crime/BadBoysForLife.jpg','Crime Movie')
var item14=items('DEVILS-NIGHT','./movieImg/Crime/DevilsNight.jpg','Crime Movie')
var item15=items('PROJECT-POWER','./movieImg/Crime/projectPower.png','Crime Movie')
var item16=items('DREAM-LAND','./movieImg/Crime/DreamLand.jpg','Crime Movie')
var item17=items('EQUAL-STANDARD','./movieImg/Crime/EqualStandard.jpg','Crime Movie')
var item18=items('LEGACY-OF-THE-BONES','./movieImg/Crime/LegacyOfTheBones.jpg','Crime Movie')
var item19=items('SUBURRA','./movieImg/Crime/suburra.jpg','Crime Movie')
var item20=items('THE-NINTH','./movieImg/Crime/TheNinth.jpg','Crime Movie')
var item21=items('CHUCKY','./movieImg/Horror/Chuky.jpg','Horror Movie')
var item22=items('CONJURING-2','./movieImg/Horror/CONJ.jpg','Horror Movie')
var item23=items('CONJURING-3','./movieImg/Horror/conj3.jpg','Horror Movie')
var item24=items('FEAR-FARM','./movieImg/Horror/fearFarm.jpg','Horror Movie')
var item25=items('IT','./movieImg/Horror/IT.jpg','Horror Movie')
var item26=items('THE-NUN','./movieImg/Horror/NAN.jpg','Horror Movie')
var item27=items('ON-HALLOWEEN','./movieImg/Horror/OnHalloween.jpg','Horror Movie')
var item28=items('SAW','./movieImg/Horror/saw.jpg','Horror Movie')
var item29=items('THE-BOY','./movieImg/Horror/theBoy.jpg','Horror Movie')
var item30=items('WIND-WALKER','./movieImg/Horror/WindWalker.jpg','Horror Movie')
var item31=items('A-SIMPLE-WEDDING','./movieImg/Romance/ASimpleWedding.jpg','Romance Movie')
var item32=items('ISI-AND-OSSI','./movieImg/Romance/IsiAndOssi.PNG','Romance Movie')
var item33=items('I-STILL-BELIEVE','./movieImg/Romance/IStillBelieve.jpg','Romance Movie')
var item34=items('LETTERS-FROM-THE-HEART','./movieImg/Romance/LettersFromTheHeart.jpg','Romance Movie')
var item35=items('ORDINARY-LOVE','./movieImg/Romance/OrdinaryLove.jpg','Romance Movie')
var item36=items('RUNAWAY-ROMANCE','./movieImg/Romance/RunawayRomance.jpg','Romance Movie')
var item37=items('THE-CRISTMAS-CABIN','./movieImg/Romance/ThCristmasCabin.jpg','Romance Movie')
var item38=items('THE-NEW-ROMANTIC','./movieImg/Romance/TheNewRomantic.jpg','Romance Movie')
var item39=items('THE-STORY-OF-US','./movieImg/Romance/TheStoryOfUs.jpg','Romance Movie')
var item40=items('TIMELESS-LOVE','./movieImg/Romance/TimelessLove.jpg','Romance Movie')
var movies=[item35,item2,item3,item39,item5,item6,item33,item8,item21,item30,item11,item12,item23,item14,item15,item16,item17,item28,item19,item20,item9,item22,item13,item24,item25,item26,item27,item18,item29,item1,item31,item32,item7,item34,item10,item36,item37,item38,item4,item40]

function makeMovie(item){
    $("#mainD").append('<div class="all" id="'+item.title+'"></div>')
    $("#"+item.title).append("<img src='"+item.image+"' id="+item.title+"1"+"></img>")
    $("#"+item.title).append("<h3>"+item.title+"</h3>")
    $("#"+item.title).append("<p>"+item.type+"</p>")
}

function makeMovies(movies){
    for (var i=0; i<movies.length; i++){
        makeMovie(movies[i])
    
    }
}
makeMovies(movies)
console.log(item11)


function test(movies,query){
    $('#mainD').html('')
    for(var i=0; i<movies.length; i++){
        if(movies[i].type===query){
            makeMovie(movies[i])
        }
        else if(!query){
            makeMovie(movies[i])
        }
    }
}
function search(){
    var value = $("#searchInp").val().toUpperCase();
    $('#mainD').html('')
    for( var i = 0; i < movies.length; i++){
        var thatMovie = movies[i]
        // console.log(thatMovie)
        if ( thatMovie.title.includes(value)){
            // makeMovie(this.thatMovie)
            makeMovie(thatMovie)
            
        }
       
        
          
    }

}

var modal = document.getElementById("myModal");
var btn = document.getElementById("ORDINARY-LOVE");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



var modal1 = document.getElementById("myModal1");
var btn1 = document.getElementById("VENOM");
var span = document.getElementsByClassName("close")[1];
btn1.onclick = function() {
  modal1.style.display = "block";
}
span.onclick = function() {
  modal1.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}


var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("IT");
var span = document.getElementsByClassName("close")[2];
btn2.onclick = function() {
  modal2.style.display = "block";
}
span.onclick = function() {
  modal2.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}
