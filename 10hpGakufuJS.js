const TAB_GAKUFU_SAKUSEI = "tab_GakufuSakusei"
const TAB_DATA_I = "tab_DataImport"

var AllTabNameList = [
TAB_GAKUFU_SAKUSEI,
TAB_DATA_I
];

InitTab();
Init();

var CurrentLine = [];
var CurrentBend = [];
var CurrentIdx = 0;

function InitTab(){
	HiddenAllTab();
	DisplayTab(TAB_GAKUFU_SAKUSEI);
}

function Init(){
}

function DisplayGakufuSakuseiTab(){
}

function DisplayDataImportTab(){
}


function DisplayTab(tabNm){

	//タブごとの各種表示用処理
	if(tabNm == TAB_GAKUFU_SAKUSEI){
		DisplayGakufuSakuseiTab();
	}else if(tabNm == TAB_DATA_I){
		DisplayDataImportTab();
	}

	var tabElem1 = document.getElementById(tabNm);
	tabElem1.style.display = 'block';

}
//すべてのタブを非表示にする
function HiddenAllTab(){
	var tabElem1;
	for(var i=0; i<AllTabNameList.length; i++){
		tabElem1 = document.getElementById(AllTabNameList[i]);
		tabElem1.style.display = 'none';
	}
	
}

function ChangeTab(){
	HiddenAllTab();
	
	//選択されたタブを取得
	var form1 = document.getElementById("form1");
	var selectedTabIdx = form1.tabPages.selectedIndex;
	var selectedTabNm = form1.tabPages.options[selectedTabIdx].value;

	DisplayTab(selectedTabNm);
}


function DisplayCurrentLine(){
}
function addOneSpit(){
	var elem = document.getElementById("CurrentLine");
	elem.innerHTML = "1a"
}

function addOneSuck(){
	var elem = document.getElementById("CurrentLine");
	elem.innerHTML = "①a"
}
