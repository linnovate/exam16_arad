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
//פונקציה למעבר על מערך העץ 
function ShowTheTree(tree,curI){
	//לולאה העוברת על כל המערך
		for(var i=curI; i<tree.length; i++)
		{
			//התחלת רשומה חדשה לכל תא במערך- אם אין לו בנים הוא יוצג בודד
			document.write("<ul>")
			if(tree[i].gender=="male")
						document.write("<lh class="male">tree[i].title</lh>")
					else
						document.write("<lh class="female">tree[i].title</lh>")	
			//לולאה העוברת על כל תא במערך ובודקת מי הבנים שלו
			for(var j=i+1 ;j< tree.length ;j++)
			{
				//מציאת בן
				if(tree[j].parentID==i)
				{
					//הוספת הבן לרשימה ע"פ שיוך של זכר/נקבה
					if(tree[j].gender=="male")
						document.write("<li class="male">tree[j].title</li>")
					else
						document.write("<li class="female">tree[j].title</li>")	
					//חזרה לפונקציה לבדיקת הבנים של הבן הנוכחי
					ShowTheTree(tree+j,j)					
				}
			}
			//סגירת הרשימה
			document.write("</ul>")
		}
}
//טעינת הפונקציה בזמן טעינת הדף
document.onload = ShowTheTree(tree,0)
			
