
var chunkfive = {  
  src: 'http://kevinkaske.com/projects/ematoda/myriadwebpro-bold.swf'  
};  
  
sIFR.activate(chunkfive);  
  

sIFR.replace(chunkfive, {
    selector: '.sifr-title' ,
	offsetTop: '5',
	
	css: [
	      '.sIFR-root {  color: #e0e0e0; leading: 2; letter-spacing: -1.5; }'  ,
	      'em { font-style: normal; color: #25bdd5; }'
	],

	wmode: 'transparent'
  
});

sIFR.replace(chunkfive, {
    selector: '.sifr-subtitle' ,
	offsetTop: '5',
	
	css: [
	      '.sIFR-root {  color: #e0e0e0; leading: 2; }'  ,
	      'em { font-style: normal; color: #25bdd5; }'
	],

	wmode: 'transparent'
  
});