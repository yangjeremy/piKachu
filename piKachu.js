!function(){
	let duration = 50
	$('.actions').on('click', 'button', function(e){
    let $button = $(e.currentTarget) // button
    let speed = $button.attr('data-speed')
    $button.addClass('active').siblings('.active').removeClass('active')
		switch(speed){
			case 'slow':
			duration = 100
			break
			case 'normal':
			duration = 50
			break
			case 'fast':
			duration = 10
			break
		}
	})
	// 前缀 代码 回调
	function writeCode(prefix, code, fn){
		// 选择代码
		let container = document.querySelector("#code")
		// 选择样式
		let styleTag = document.querySelector("#styleTag")

		let n = 0
		setTimeout(function run(){
			n += 1
			container.innerHTML = code.substring(0, n)
			styleTag.innerHTML = code.substring(0, n)
			container.scrollTop = container.scrollHeight

			if (n < code.length) {
				setTimeout(run, duration)
			}else{
				fn && fn.call()
			}
		},20)
	}
	let code = `
	/*
	*  首先是 皮卡丘的皮
	*/
	.preview{
		height:100%;
		display:flex;
		justify-content:center;
		align-items:center;
		background:#fee433;
	}
	.wrapper{
		position: relative;
		width:100%;
		height:165px;
	}
	/*.wrapper > :not(:last-child){
		z-index: 1;
	}*/
	/*
	*  现在是 皮卡丘的鼻子
	*/
	.nose{
		width:0;
		height:0;
		border-style: solid;
		border-width:12px;
		border-color:#000 transparent transparent;
		border-radius:11px;
		position: absolute;
		left:50%;
		top:28px;
		margin-left:-12px;
	}
	/*
	*  接下是 皮卡丘的眼睛
	*/
	.eye{
		width:49px;
		height:49px;
		background:#2e2e2e;
		position:absolute;
		border-radius:50%;
		border:2px solid #000;
	}
	.eye::before{
		content:'';
		display:block;
		width:24px;
		height:24px;
		background:#fff;
		border-radius:50%;
		position:absolute;
		left:6px;
		top:-1px;
		border:2px solid #000;
	}
	.eye.left{
		left:50%;
		margin-left:90px;
	}
	.eye.right{
		right:50%;
		margin-right:90px;
	}
	/*
	*  然后是 皮卡丘的脸
	*/
	.face{
		position:absolute;
		width:68px;
		height:68px;
		background:#fc0d1c;
		border:2px solid #000;
		border-radius:50%;
		top:85px;
	}
	/*
	*  我是左脸
	*/
	.face.left{
		right:50%;
		margin-right:116px
	}
	/*
	*  我是右脸
	*/
	.face.right{
		left:50%;
		margin-left:116px;
	}
	/*
	*  其次是 皮卡丘的嘴巴
	*/
	.upperLip{
		width:80px;
		height:25px;
		border:2px solid #000;
		position: absolute;
		top:50px;
		background:#fee433;
	} 
	/*
	*  我是嘴唇哦
	*/
	.upperLip.left{
		right:50%;
		border-bottom-left-radius:40px 25px;
		border-top:none;
		border-right:none;
		transform: rotate(-20deg); 
	}
	.upperLip.right{
		left:50%;
		border-bottom-right-radius:40px 25px;
		border-top:none;
		border-left:none;
		transform: rotate(20deg);
	}
	/*
	*  我是舌头啦
	*/
	.lowerLip-wrapper{
		bottom: 0;
		position: absolute;
		left: 50%;
		margin-left: -150px;
		height: 110px;
		overflow: hidden;
		width: 300px;
	}
	.lowerLip{
		width: 300px;
		height:3500px;
		background:#990513;
		border-radius:200px/2000px;
		border:2px solid #000;
		position:absolute;
		bottom:0;
		overflow: hidden;
	}
	.lowerLip::after{
		content: '';
		display:block;
		position: absolute;
		bottom:-20px;
		width:100px;
		height:100px;
		background:#fc4a62;
		left:50%;
		margin-left:-50px;
		border-radius:50px;
	}
	/*
	*  我可爱吗???
	*/
	`
	writeCode('', code)

}.call()