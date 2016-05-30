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

list.innerHTML="<table><tr><td value='dfws' text='ef'>'jhbgkj'</td></tr></table>";
treeTable.innerHTML="<tr><td value='dfws' text='ef'>'jhbgkj'</td></tr>";
var dor=0;
function tree1(dor)
{
	for (j=0;j<newTree.length;j++)
	{	
		if(newTree[j].getAttention==dor)
		list.innerHTML="<li value='newTree[j].title' class='newTree[j].gender' id=''li'+ newTree[j].id'></li>"	
	
	}
}

tree1();
var newTree=[];
//בניית מערך מקביל בתוספת מס' הדור לכל אדם
function findGeneandParents()
for (j=0;j<tree.length;j++)
{
	var idParentPerson=tree[j].id;
for (i=0;i<tree.length;i++)
	{
		var generations=0
		
		if(tree[i].id==idParentPerson)
		{
			generations++;
			findGeneandParents(tree[i].idParent)
		}
	
			newPerson.id=tree[i].id;
			newPerson.title=tree[i].title;
			newPerson.parentID= tree[i].parentID;
			newPerson.gender= tree[i].gender;
			newPerson.generation=generation;
			
			newTree[j]=newPerson;
	}	
}	
	/*for (j=0;j<tree.length;j++)
	{
		
	}	*/
	findGeneandParents(0)
	function say(a){alert(a)}
say(newTree[2].generation)	
}



li1.text=tree[0].title
function say(a){alert(a)};

//בנית מערך כשאר הדורות מקוננים אחד בתוך השני
var arrychildren=[];
var generation=0;

function findChildren(idParent)
{
	//מספר הילד במערך הילדים
		var j= 0;
	for (i=0;i<tree.length;i++)
	{
		list.innerHTML="<ul value='newTree[j].title' class='newTree[j].gender' id=''li'+ newTree[j].id'></ul>"
		var children=[];
		if(tree[i].parentID==idParent)
		{
			
			var newPerson=new object();
			newPerson.id=tree[i].id;
			newPerson.title=tree[i].title;
			newPerson.gender= tree[i].gender;
			newPerson.generation=generation;
			children[j]=newPerson;
			j++;
			findChildren(newPerson.id);
			list.innerHTML="<li value='newTree[j].title' class='newTree[j].gender' id=''li'+ newTree[j].id'></li>"
		}
		arrychildren[i]=children;
		
	}
	
}
var currentPerson= new object();
currentPerson.id=tree[0].id;

currentPerson.children=findChildren(tree[0].id);

function do(){ document.write(arrychildren)};
do();

