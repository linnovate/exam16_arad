<head>
<title></title>
<script language="javascript" type="text/javascript">
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
function ArrFamely()
{
	//הפונקציה ממינת את העץ המשפחתי לפי דורות המשפחה בסדר עולה כאשר ראש המשפחה נמצא בהתחלה ושאר הדורות לפי הרצף מופיעים במערך 
	var ezerfamely;
	var flagfamely=1
	var famelyLength=tree.length;
	for(var i=0; i<famelyLength; i++)
	{
		if(flag==0)
		{
			i++;
			flag=1;
		}
		for(var j=i; i<famelyLength; i++)
		{
		  if(tree[i].parentID > tree[j].parentID)
			  flagfamely=0;
		      ezerfamely=tree[i];
			  tree[i]=tree[j];
			  tree[j]=ezerfamely;
		}
	}
}
function famely()
{
	//הפונקציה בונה את העץ המשפחתי כאשר היא מוסיפה לכל דור את בני דורו כאשר המין הוא זכר הרקע נצבע בכחול ולהפך באדום
	//עבור כל אחד מבני המשפחה נבנה כפתור עליו הוא מופיע
	ArrFamely();
	var j=1;
	var newbranch;
	ver btn;
	for(var i=0; i<tree.length; i=j){
		var newbranch=document.getElementById("branch"+i); 
		for(j=i+1;j=<tree.length;j++)
		{
			 //בנית הכפתור
			  btn =new button();
			  //הכנסת שם בן המשפחה שיופיע על המסך
			  btn.value=tree[i].title;
			  //מיון המין לפי צבעים
			  if(tree[i].gender=="female")
				  btn.background=red;
			  else
				  btn.background=blue;
			  if(tree[i].parentID!=tree[j].parentID)
				  break;
			  i=j;
			  //"הוספה ל"גריד
			  newbranch.add(btn);
		}
	     
	}
		
}
<body>"גריד"
//העץ המשפחתי יופיע בלחיצת כפתור
<input id="treefamely" type="button" value="הצג עץ משפחתי" onclick="famely"/>
//הגריד שעליו מופיעים הענפים המשפחתים
<input id="branch1" type="rectangle"/>
< br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
<input id="branch2" type="rectangle"/>
< br>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
<input id="branch3" type="rectangle"/>
< br>>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
<input id="branch4" type="rectangle"/>
< br>&nbsp &nbsp &nbsp &nbsp &nbsp
<input id="branch5" type="rectangle"/>
< br>&nbsp &nbsp &nbsp &nbsp
<input id="branch6" type="rectangle"/>
< br>&nbsp &nbsp &nbsp
<input id="branch7" type="rectangle"/>
< br>&nbsp &nbsp
<input id="branch8" type="rectangle"/>
< br>>&nbsp
<input id="branch9" type="rectangle"/>
< br>
<input id="branch10" type="rectangle"/>
< br>
<input id="branch11" type="rectangle"/>
< br>
<input id="branch12" type="rectangle"/>
< br>
<input id="branch13" type="rectangle"/>
< br>
<input id="branch14" type="rectangle"/>
< br>
<input id="branch15" type="rectangle"/>
</body>
</head>