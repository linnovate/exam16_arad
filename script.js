
var treeOrderBy=[] ;//   מערך בו יהיו אנשים ממוינים לפי IDPARENT; 
var indexx=0;
 function binaryTree()
{
	
	var node=0;
	  for(var i=0;i<tree.length;i++)
	  {
		  // ובודק מי האבא שלילדים שלו אין ילדים ומכני ס אותו למשתנה
		  if(tree[i].parentID>node)
		  {
			  node=tree[i].parentID;
		  }
	  }
	  //שליחה לפונ  את המשתנה
	  enterTotreeOrderBy(node);
}
//הפונ מכניסה למערך בצורה ממוינת מהילד האחרון עד לאבא
function enterTotreeOrderBy(node)
{
	//בדיקה אם הגיע לאיבר האחרון
	if(node!=0)
	{
		//מעבר על המערך והכנס למערך החדש בצורה מסודרת מאחרון עד ללמעלה
		for(var i=0;i<tree.length;i++)
		{// בדיקה כל ילד אם האבא שלו עכשיו
			if(tree[i].parentID==node)
			{
			//
			
				var child=document.getElementById("list").innerHTML;
				//בנית איבר חדש ברשימה
			child.innerHTML='<li value="+tree[i].title+"><li/>'
			if(tree[i].gender)=="male")
			{
				child.style.color="red"
			}
				treeOrderBy[indexx]=tree[i];
				indexx++;
			}
		}
		//  שליחה שוב לאותה פןנ רק אם האיבר הבא בתור
		document.getElementById("list").innerHTML='<ul id="+node+"><ul/>'
		enterTotreeOrderBy(node-1);
		
	}
	else
	{
		//הכנסת במיקום האחרון את האבא הראשון
		treeOrderBy[indexx]=0;
	}
	
}	  
/* function printBinaryTree()
{
	for(var i=0;i<)
	var listPerson=document.getElementById("list").innerHTML=treeOrderBy;
	
} */
		
	

	alert("aaaa")

ordeBybinaryTree(tree); */
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
