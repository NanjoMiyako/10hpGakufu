

Init();

var totalLines = [];
var CurrentLine = [];
var CurrentBend = [];
var CurrentExtend = [];
var CurrentIdx = 0;
var LineCount = 0;
var Tempo = 100;

function InitTab(){
	HiddenAllTab();
	DisplayTab(TAB_GAKUFU_SAKUSEI);
}

function Init(){
	totalLines = [];
	CurrentLine = [];
	CurrentBend = [];
	CurrentExtend = [];
	CurrentIdx = 0;
	LineCount = 0;
	Tempo = 100;
	
	printAllPrevLines();
}

function DisplayGakufuSakuseiTab(){
}

function DisplayDataImportTab(){
}

function CpyLineNum(){
	var lineNumElem = document.getElementById("CpyLineNumTextBox");
	var lineNumStr;
	if(isNaN(lineNumElem.value) || LineCount < lineNumElem.value){
		return;
	}else{
		lineNumStr = "s"
		lineNumStr += parseInt(lineNumElem.value);

		CurrentLine.push(lineNumStr);
		CurrentBend.push(0.0);
		CurrentExtend.push(0);
		CurrentIdx++;

		RegistCurrentLine();
		ClearCurrentLine();
		
		
	}
	
	printAllPrevLines();
}

function setTempo(){
	var tempoElem = document.getElementById("TempoTextBox");
	if(isNaN(tempoElem.value)){
		Tempo=100;
		tempoElem.value = "100";
	}else{
		Tempo = parseInt(tempoElem.value);
	}
	
	printAllPrevLines();
	
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

function printAllPrevLines(){
	var prevLineDiv = document.getElementById("prevLines");
	//クリア
	while(prevLineDiv.firstChild != null){ prevLineDiv.removeChild(prevLineDiv.firstChild); }

	//Tempoの行出力
	divElem = document.createElement('div');
	divElem.innerHTML = "Tempo=";
	divElem.innerHTML += Tempo;
	prevLineDiv.appendChild(divElem);


	for(var i=0; i<totalLines.length; i++){
		divElem = document.createElement('div');
		divElem.innerHTML = (i+1);
		divElem.innerHTML += " : ";
		divElem.innerHTML += totalLines[i];
		prevLineDiv.appendChild(divElem);
	}
	
}
function ClearCurrentLine(){
	CurrentLine = [];
	CurrentBend = [];
	CurrentExtend = [];
	CurrentIdx = 0;
	
}
function RegistCurrentLine(){
	totalLines.push(MakeCurrentLineStr());
	ClearCurrentLine();
	LineCount++;
	
	printAllPrevLines();
	DisplayCurrentLine();

}

function MakeCurrentLineStr(){
	var printStr = "";
	
	for(var i=0; i<CurrentLine.length; i++){
		if(printStr != ""){
			printStr += ", ";
		}
		
		if(!isNaN(CurrentLine[i])){
			if(parseInt(CurrentLine[i]) >= 1){
				printStr += CurrentLine[i];
			}else{
				printStr += getCorrespondStr(CurrentLine[i]);
			}
			if(CurrentBend[i] != 0){
				printStr += "↓";
				printStr += "(";
				if(CurrentBend[i] != 1.0){
					printStr += CurrentBend[i];
				}else{
					printStr += "1.0";
				}
				printStr += ")";
			}
		}else if(CurrentLine[i].slice(0,1) == "s"){
			printStr += "*";
			printStr += CurrentLine[i].slice(1);
			
		}else{
			printStr += CurrentLine[i];
		}
		
		if(CurrentExtend[i] != 0){
			for(var j=0; j<CurrentExtend[i]; j++){
				printStr += "+";
			}
		}
	}
	
	return printStr;

}
function DisplayCurrentLine(){
	var printStr = MakeCurrentLineStr();
	var crLineElem = document.getElementById("CurrentLine");
	
	crLineElem.innerHTML = printStr;
}

function getCorrespondStr(val){
	val2 = parseInt(val);
	
	if(val2 == -1){
		return "①"
	}else if(val2 == -2){
		return "②"
	}else if(val2 == -3){
		return "③"
	}else if(val2 == -4){
		return "④"
	}else if(val2 == -5){
		return "⑤"
	}else if(val2 == -6){
		return "⑥"
	}else if(val2 == -7){
		return "⑦"
	}else if(val2 == -8){
		return "⑧"
	}else if(val2 == -9){
		return "⑨"
	}else if(val2 == -10){
		return "⑩"
	}
	
}
function addOneSpit(){
	CurrentLine.push("1");
	CurrentBend.push(0.0);
	CurrentExtend.push(0);
	CurrentIdx++;

	DisplayCurrentLine();
}

function addOneSuck(){
	CurrentLine.push("-1");
	CurrentBend.push(0.0);
	CurrentExtend.push(0);
	CurrentIdx++;
	
	DisplayCurrentLine();
}

function addTwoSpit(){
	CurrentLine.push("2");
	CurrentBend.push(0.0);
	CurrentExtend.push(0);
	CurrentIdx++;

	DisplayCurrentLine();
}

function addTwoSuck(){
	CurrentLine.push("-2");
	CurrentBend.push(0.0);
	CurrentExtend.push(0);
	CurrentIdx++;
	
	DisplayCurrentLine();
}
function addThreeSpit(){
	CurrentLine.push("3");
	CurrentBend.push(0.0);
	CurrentExtend.push(0);
	CurrentIdx++;

	DisplayCurrentLine();
}

function addThreeSuck(){
	CurrentLine.push("-3");
	CurrentBend.push(0.0);
	CurrentExtend.push(0);
	CurrentIdx++;
	
	DisplayCurrentLine();
}

function addFourSpit(){
	CurrentLine.push("4");
	CurrentBend.push(0.0);
	CurrentExtend.push(0);
	CurrentIdx++;

	DisplayCurrentLine();
}

function addFourSuck(){
	CurrentLine.push("-4");
	CurrentBend.push(0.0);
	CurrentExtend.push(0);
	CurrentIdx++;
	
	DisplayCurrentLine();
}

function addFiveSpit(){
	CurrentLine.push("5");
	CurrentBend.push(0.0);
	CurrentExtend.push(0);
	CurrentIdx++;

	DisplayCurrentLine();
}

function addFiveSuck(){
	CurrentLine.push("-5");
	CurrentBend.push(0.0);
	CurrentExtend.push(0);
	CurrentIdx++;
	
	DisplayCurrentLine();
}

function addSixSpit(){
	CurrentLine.push("6");
	CurrentBend.push(0.0);
	CurrentExtend.push(0);
	CurrentIdx++;

	DisplayCurrentLine();
}

function addSixSuck(){
	CurrentLine.push("-6");
	CurrentBend.push(0.0);
	CurrentExtend.push(0);
	CurrentIdx++;
	
	DisplayCurrentLine();
}

function addSevenSpit(){
	CurrentLine.push("7");
	CurrentBend.push(0.0);
	CurrentExtend.push(0);
	CurrentIdx++;

	DisplayCurrentLine();
}

function addSevenSuck(){
	CurrentLine.push("-7");
	CurrentBend.push(0.0);
	CurrentExtend.push(0);
	CurrentIdx++;
	
	DisplayCurrentLine();
}

function addEightSpit(){
	CurrentLine.push("8");
	CurrentBend.push(0.0);
	CurrentExtend.push(0);
	CurrentIdx++;

	DisplayCurrentLine();
}

function addEightSuck(){
	CurrentLine.push("-8");
	CurrentBend.push(0.0);
	CurrentExtend.push(0);
	CurrentIdx++;
	
	DisplayCurrentLine();
}

function addNineSpit(){
	CurrentLine.push("9");
	CurrentBend.push(0.0);
	CurrentExtend.push(0);
	CurrentIdx++;

	DisplayCurrentLine();
}

function addNineSuck(){
	CurrentLine.push("-9");
	CurrentBend.push(0.0);
	CurrentExtend.push(0);
	CurrentIdx++;
	
	DisplayCurrentLine();
}

function addTenSpit(){
	CurrentLine.push("10");
	CurrentBend.push(0.0);
	CurrentExtend.push(0);
	CurrentIdx++;

	DisplayCurrentLine();
}

function addTenSuck(){
	CurrentLine.push("-10");
	CurrentBend.push(0.0);
	CurrentExtend.push(0);
	CurrentIdx++;
	
	DisplayCurrentLine();
}
function setBend(bVol){
	CurrentBend[CurrentIdx-1] = bVol;
	
	DisplayCurrentLine();
}
function addKyufu(kLen){
	
	if(kLen == 16){
		CurrentLine.push("16kf");
	}else if(kLen == 8){
		CurrentLine.push("8kf");
	}else if(kLen == 4){
		CurrentLine.push("4kf");
	}else if(kLen == 2){
		CurrentLine.push("2kf");
	}else if(kLen == 0){
		CurrentLine.push("zkf");
	}
	
	CurrentBend.push(-1);
	CurrentIdx++;
	
	DisplayCurrentLine();
}

function addExtend(){
	if(CurrentIdx == 0){
		return;
	}
	CurrentExtend[CurrentIdx-1]++;
	
	DisplayCurrentLine();
}

function clrExtend(){
	if(CurrentIdx == 0){
		return;
	}
	CurrentExtend[CurrentIdx-1] = 0;
	
	DisplayCurrentLine();
}

function DelCrOnpu(){
	if(CurrentIdx == 0){
		return;
	}
	
	CurrentLine.pop();
	CurrentBend.pop();
	CurrentIdx--;
	
	DisplayCurrentLine();
}

function DelEndLine(){
	if(LineCount == 0){
		return;
	}
	totalLines.pop();
	LineCount--;
	
	printAllPrevLines();
}

function LoadGakufuData(content){
	var lines = content.split("\r\n");
	var line="";
	var outputStr;
	var onpus;
	var onpu;
	var val;
	var bdVol;
	
	var tempoElem = document.getElementById("TempoTextBox");
	Tempo = parseInt(lines[0].replace("Tempo=", ""));
	tempoElem.value = Tempo;
	
	
	for(var i=1; i<lines.length; i++){
		line = lines[i];
		if(line == ""){
			continue;
		}
		

		if(line.slice(0,1) == "*"){
			outputStr = "s";
			outputStr += line.slice(1);
			totalLines.push(outputStr);
			LineCount++;
			
		}else{
			onpus = line.split(",");
			outputStr = "";
			bdVol = 0.0;
			extdVol = 0.0;
			
			for(var j=0; j<onpus.length; j++){
				onpu = onpus[j].trim();
				
				if(outputStr != ""){
					outputStr += ", ";
				}
				
				if(onpu.indexOf("kf") != -1){
					outputStr += onpu;
					continue;
				}
				
				if(onpu.indexOf("bd(") != -1){
					bdVol = onpu.slice(onpu.indexOf("bd(")+3);
					bdVol = bdVol.slice(0, bdVol.indexOf(")"));
					bdVol = Number(bdVol);
					
				}else{
					bdVol = 0.0;
				}
				
				if(onpu.indexOf("extd(") != -1){
					extdVol = onpu.slice(onpu.indexOf("extd(")+5);
					extdVol = extdVol.slice(0, extdVol.indexOf(")") );
					extdVol = Number(extdVol);
				}else{
					extdVol = 0.0;
				}
				
				val = parseInt(onpu);
				if(val >= 1){
					outputStr += val;
				}else{
					outputStr += getCorrespondStr(val);
				}
				
				if(bdVol != 0){
					outputStr += "↓";
					outputStr += "(";
					
					if(bdVol == 1.0){
						outputStr += "1.0";
					}else{
						outputStr += bdVol;
					}
					
					outputStr += ")";
				}
				
				if(extdVol != 0){
					for(var k=0; k<extdVol; k++){
						outputStr += "+";
					}
				}
				
				
				
			}
			
			
			totalLines.push(outputStr);
			LineCount++;
			
		}
	}
}

function OutputFile(){
	var outline;
	var content="";
	var extdVol;
	
	content = "Tempo=";
	content += Tempo;
	content += "\r\n";
	
	for(var i=0; i<totalLines.length; i++){
		outline = totalLines[i];
		outline = outline.replace(/↓/g, "bd");
		outline = outline.replace(/①/g, "-1");
		outline = outline.replace(/②/g, "-2");
		outline = outline.replace(/③/g, "-3");
		outline = outline.replace(/④/g, "-4");
		outline = outline.replace(/⑤/g, "-5");
		outline = outline.replace(/⑥/g, "-6");
		outline = outline.replace(/⑦/g, "-7");
		outline = outline.replace(/⑧/g, "-8");
		outline = outline.replace(/⑨/g, "-9");
		outline = outline.replace(/⑩/g, "-10");
		
		
		while(outline.indexOf("+") != -1){
			extdVol = 1;
			idx1 = outline.indexOf("+");
			for(var k=idx1+1; k<outline.length; k++){
				if(outline.charAt(k) != '+'){
					break;
				}
				extdVol++;
			}
			front = outline.slice(0, idx1);
			back = outline.slice(k);
			
			outline = front;
			outline += "extd(";
			outline += extdVol;
			outline += ")";
			outline += back;
		}
		
		
		content += outline;
		content += "\r\n";
		
	}
	
	let blob = new Blob([content],{type:"text/plan"});
	let link = document.createElement('a');
	link.href = URL.createObjectURL(blob);
	link.download = '10hpGakufu.txt';
	link.click();
}

function ImportDataOnDataImportTab(){
      var fileRef = document.getElementById('fileOnDataImportTab');
	  var content;
	  
      if (1 <= fileRef.files.length) {
			var reader = new FileReader();
			//ファイル読み出し完了後の処理を記述
			reader.onload = function (theFile) {
			var content = theFile.target.result;
			LoadGakufuData(content);
			
			printAllPrevLines();
			ClearCurrentLine();
        }

		//ファイル読み出し
        reader.readAsText(fileRef.files[0], "utf-8");

      }
}