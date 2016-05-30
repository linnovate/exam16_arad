var tree = [
{
	id : 1,
	title: "Alex",
	parentID: 0,
	gender: "male"
},
{
	id : 2,
	title: "Avi",
	parentID: 1,
	gender: "male"
},
{
	id : 3,
	title: "Aviva",
	parentID: 1,
	gender: "female"
},
{
	id : 4,
	title: "Bonita",
	parentID: 3,
	gender: "female"
},
{
	id : 5,
	title: "Boaz",
	parentID: 3,
	gender: "male"
},
{
	id : 6,
	title: "Joe",
	parentID: 2,
	gender: "male"
},
{
	id : 7,
	title: "Judy",
	parentID: 1,
	gender: "female"
},
{
	id : 8,
	title: "Deborah",
	parentID: 6,
	gender: "female"
},
{
	id : 9,
	title: "Hadas",
	parentID: 1,
	gender: "female"
},
{
	id : 10,
	title: "William",
	parentID: 2,
	gender: "male"
},
{
	id : 11,
	title: "Jacky",
	parentID: 10,
	gender: "male"
},
{
	id : 12,
	title: "Zvulun",
	parentID: 9,
	gender: "male"
},
{
	id : 13,
	title: "Chava",
	parentID: 9,
	gender: "female"
},
{
	id : 14,
	title: "Teddy",
	parentID: 10,
	gender: "male"
},
{
	id : 15,
	title: "Yevgeni",
	parentID: 7,
	gender: "male"
},
{
	id : 16,
	title: "Kochava",
	parentID: 1,
	gender: "female"
},
{
	id : 17,
	title: "Leon",
	parentID: 16,
	gender: "male"
},
{
	id : 18,
	title: "Meir",
	parentID: 15,
	gender: "male"
},
{
	id : 19,
	title: "Mary",
	parentID: 15,
	gender: "female"
},
{
	id : 20,
	title: "Nava",
	parentID: 15,
	gender: "female"
},
{
	id : 21,
	title: "Sigalit",
	parentID: 15,
	gender: "female"
},
{
	id : 22,
	title: "Susann",
	parentID: 6,
	gender: "female"
},
{
	id : 23,
	title: "Pablo",
	parentID: 1,
	gender: "male"
},
{
	id : 24,
	title: "Charles",
	parentID: 6,
	gender: "male"
},
{
	id : 25,
	title: "Karen",
	parentID: 15,
	gender: "female"
},
{
	id : 26,
	title: "Raul",
	parentID: 6,
	gender: "male"
},
{
	id : 27,
	title: "Shaul",
	parentID: 16,
	gender: "male"
},
{
	id : 28,
	title: "Tehila",
	parentID: 2,
	gender: "female"
},
{
	id : 29,
	title: "Tom",
	parentID: 2,
	gender: "male"
}];


<!DOCTYPE html>
<html>
<head>
<style>
.male { 
    border: 2px solid lightgrey;
    color: lightgrey;
    padding: 5px;
    margin: 15px;
}
.female { 
    border: 2px solid lightgrey;
    color: green;
    padding: 5px;
    margin: 15px;
}
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
<script>

//Function pull out all the children of the Father
  children = $(document).ready(function(){
    $("ul").children();
});
//Function pull out all the Grandchildren of the Father
  Grandchildren = $(document).ready(function(){
    $("ul").children("li.first");
});

//Function pull out all the Great-grandchildren of the Father
  Great-grandchildren = $(document).ready(function(){
    $("ul").children("li.span");
}); 

 grandparent=document.getElementById(1)

</script>
</head>

<body >
  <div id=1 , title="alex", parentID=0, gender=male >alex
    <ul id=2 , title="avi", parentID=1, class=male  >avi
      <li id=6 , title="joe", parentID=2, class=male >joe
        <span id=8 , title="deborra", parentID=6, class=female >devora</span>
		<span id=22 , title="sussan", parentID=6, class=male>sussan</span>
		<span id=24 , title="charles", parentID=6, class=male>charles</span>
		<span id=26 , title="raul", parentID=6, class=male>raul</span>
      </li>
      <li id=10 , title="william", parentID=2, class=male >william
        <span id=11 , title="jaky", parentID=10, class=male >jaky</span>
		<span id=14 , title="deborra", parentID=10, class=male >tedy<span>
      </li>
	  <li id=28 , title="tehila", parentID=2, class=female >tehila
      </li>
	  <li id=29 , title="tom", parentID=2, class=male >tom
      </li>
    </ul> 
    <ul id=3 , title="aviva", parentID=1, class=female >aviva
       <li id=4 , title="bonita", parentID=3, class=female> bonita 
	   <li/>
	   <li id=5 , title="boaz", parentID=3, class=male> boaz 
	   <li/>
    <ul/>
	<ul id=7 , title="judy", parentID=1, class=female >judy
       <li id=15 , title="yeudit", parentID=7, class=female > yeudit
	    <span id=18 , title="meir", parentID=15, class=male >meir</span>
		<span id=19 , title="marry", parentID=15, class=female >marry</span>
		<span id=20 , title="nava", parentID=15, class=female >nava</span>
		<span id=21 , title="sigalit", parentID=15, class=female >sigalit</span>
		<span id=25 , title="karen", parentID=15, class=female >karen</span>
	   <li/>
    <ul/>
	<ul id=23, title="pablo", parentID=1, class=male >pablo
    <ul/>
	<ul id=9, title="hadas", parentID=1, class=female >hadas
       <li id=12 , title="zvulun", parentID=9, class=male > zvulun 
	   <li/>
	   <li id=13 , title="chava", parentID=9, class=female> chava 
	   <li/>
    <ul/>
	<ul id=17 , title="kochava", parentID=16, class=female>kochava
       <li id=17 , title="leon", parentID=16, class=male > leon 
	   <li/>
	   <li id=27 , title="shaul", parentID=16, class=male> shaul 
	   <li/>
    <ul/>
  </div>
  <div>
  var 
      <input type= "text" , value = grandparent()> 
	  <br/>
	  <input type= "text" , value = children()> 
	  <br/>
	  <input type= "text" , value = Grandchildren()>
	  <br/>
	  <input  type= "text" , value = Great-grandchildren()>
  <div/>
</body>

</html>
