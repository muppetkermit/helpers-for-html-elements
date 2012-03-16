/**
 * @author Yıldıray Mutlu
 */

		
HTMLInputElement.prototype.backspace = function(){
	var pp = this.selectionStart,d=(this.selectionEnd - this.selectionStart==0?-1: 0);
	this.value = this.value.substring(0,this.selectionStart + d)+this.value.substring(this.selectionEnd,this.value.length);
	if(this.setSelectionRange){
		this.focus();this.setSelectionRange(pp+d,pp+d);
	}
}
HTMLInputElement.prototype.space = function(){
	this.typeText(" ");
}
HTMLInputElement.prototype.typeText = function(s){
	var pp = this.selectionStart;
	this.value = this.value.substring(0,this.selectionStart)+s+this.value.substring(this.selectionEnd,this.value.length);
	if(this.setSelectionRange){
		this.focus();this.setSelectionRange(pp+1,pp+1);
	}
}

function createSelectList(document,pairs,className,style){
                var select = document.createElement("select"),option;
                
                className && (select.className += className);
                if(style){
                    for(var v in style){
                        select.style[v] = style[v];
                    }
                }
                
                for(var i=0;i<pairs.length;i++){
                    option = document.createElement("option");
                        option.value = pairs[i].value;
                        option.text = pairs[i].text;
                        pairs[i].className && (option.className += pairs[i].className);
                        select.options[i] = option;
                }
                return select;
            }
		