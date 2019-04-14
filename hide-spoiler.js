kw = ['Big Ass','Sex','Latin MILF','MILF','Holes','Blonde','Seduced','Busty','hot','busty','brunette','Hardcore','blowjob','Taboo','stranger talk','dating','Dating','anal sex','milf','anus sex','arse','ass','ass fuck','ass hole','assfucker','asshole','big boob','boobs','blonde girl','sexy teen','sexy teens','musterbating','musterbation','assshole','bastard','bitch','black cock','cock','cockfucker','cocksuck','cocksucker','coonnass','crap','cunt','cyberfuck','damn','darn','dick','dirty','douche','dummy','erect','erection','erotic','escort','faggot','fuck','Fuck off','fuck you','fuckass','fuckhole','hard core','hardcore','homoerotic','lesbian','lesbians','mother fucker','motherfuck','motherfucker','nigger','orgasim','orgasm','penis','penisfucker','piss','piss off','porn','pornography','pussy','sex','sexy','slut','suck','tits','xxx','condom']
tags = "SPANEMBIULOLI";
total = 0;

for(var ii = 0; ii < kw.length; ii++)
{
	o = $(`:contains(${kw[ii]}):not(:has(:contains(${kw[ii]})))`)
	for(var i = 0; i < o.length; i++)
	{
		if (!o[i].parentNode || o[i].parentNode.nodeName === "BODY") {
          continue;
        }
		hideSpoiler(o[i]);
		total++;
	}
}

if(total >= 10) {
	headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
	for(var i = 0; i < headings.length; i++) hideNode(headings[i]);
}

function hideSpoiler(node) {
	ancestor = node.parentNode;
	if(ancestor != null) {
		if (ancestor.parentNode != null 
				&& ancestor.tagName != 'BODY')
				ancestor = ancestor.parentNode;	
		imgs = ancestor.getElementsByTagName('img');
		for(var i = 0; i < imgs.length; i++) 
			imgs[i].style.webkitFilter = "blur(10px)"
		lists = ancestor.getElementsByTagName('li');
		for(var i = 0; i < lists.length; i++) hideNode(lists[i]);
	}

	if (node == null || node.parentNode == null) return;
	all_child = node.parentNode.children;
	for(var i = 0; i < all_child; i++) {
		var type = all_child[i].tagName;
		if (tags.match(type) != null) hideNode(all_child[i]);
	}
	hideNode(node);
}

function hideNode(node) {
	node.textContent = '[TEXT BLOCKED: SPOILER DETECTED]';
	node.style.color = 'red'
}
