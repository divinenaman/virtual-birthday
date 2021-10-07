function buildNode(){
			const cake = document.getElementById("cake").getBoundingClientRect();
			const fire1 = document.querySelector("#fire-1")
			const cont = document.querySelector(".container1")

			fire1.style['z-index']=10;
			
			const fire2 = fire1.cloneNode(true)
			fire2.id="fire-2"
			cont.appendChild(fire2)

			const fire3 = fire1.cloneNode(true)
			fire3.id="fire-3"
			fire3.style["z-index"]=2
			fire3.style.transform="scaleX(-1)"
			cont.appendChild(fire3)

			const fire4 = fire1.cloneNode(true)
			fire4.id="fire-4"
			cont.appendChild(fire4)

			const fire5 = fire1.cloneNode(true)
			fire5.id="fire-5"
			fire5.style.transform="scaleX(-1)"
			cont.appendChild(fire5)

			const fire6 = fire1.cloneNode(true)
			fire6.id="fire-6"
			cont.appendChild(fire6)

			const fire7 = fire1.cloneNode(true)
			fire7.id="fire-7"
			fire7.style.transform="scaleX(-1)"
			cont.appendChild(fire7)

			const fire8 = fire1.cloneNode(true)
			fire8.id="fire-8"
			cont.appendChild(fire8)

			const fire9 = fire1.cloneNode(true)
			fire9.id="fire-9"
			fire9.style.transform="scaleX(-1)"
			cont.appendChild(fire9)

			const fire10 = fire1.cloneNode(true)
			fire10.id="fire-10"
			cont.appendChild(fire10)

			const fire11 = fire1.cloneNode(true)
			fire11.id="fire-11"
			fire11.style.transform="scaleX(-1)"
			cont.appendChild(fire11)

			const fire12 = fire1.cloneNode(true)
			fire12.id="fire-12"
			fire12.style.transform="scaleX(-1)"
			cont.appendChild(fire12)

			const fire13 = fire1.cloneNode(true)
			fire13.id="fire-13"
			fire13.style.transform="scaleX(-1)"
			cont.appendChild(fire13)

			position()
		}

		async function position(){
			const cake = document.getElementById("cake").getBoundingClientRect();
			var fire = document.querySelectorAll(".mo-fire")
			console.log(cake)

			fire[1-1].style.left = `${cake.x+230}px`
			fire[1-1].style.top = `${cake.y}px`

			fire[2-1].style.left = `${cake.x+290}px`
			fire[2-1].style.top = `${cake.y}px`

			fire[3-1].style.left = `${cake.x+350}px`
			fire[3-1].style.top = `${cake.y-45}px`

			fire[4-1].style.left = `${cake.x+367}px`
			fire[4-1].style.top = `${cake.y-45}px`

			fire[5-1].style.left = `${cake.x+370}px`
			fire[5-1].style.top = `${cake.y-5}px`

			fire[6-1].style.left = `${cake.x+405}px`
			fire[6-1].style.top = `${cake.y-40}px`

			fire[7-1].style.left = `${cake.x+428}px`
			fire[7-1].style.top = `${cake.y-3}px`

			fire[8-1].style.left = `${cake.x+448}px`
			fire[8-1].style.top = `${cake.y-42}px`

			fire[9-1].style.left = `${cake.x+455}px`
			fire[9-1].style.top = `${cake.y-4}px`

			fire[10-1].style.left = `${cake.x+478}px`
			fire[10-1].style.top = `${cake.y-4}px`

			fire[11-1].style.left = `${cake.x+554}px`
			fire[11-1].style.top = `${cake.y-35}px`

			fire[12-1].style.left = `${cake.x+575}px`
			fire[12-1].style.top = `${cake.y-2}px`

			fire[13-1].style.left = `${cake.x+630}px`
			fire[13-1].style.top = `${cake.y}px`
		}

		async function blow(){
			var audio = document.getElementById("hbd_song")
			console.log(audio.duration)
			if(isNaN(audio.duration)){
			document.getElementById("btn").innerHTML = "Play/Pause"
			document.querySelector(".container1").appendChild(audio)
			audio.src= "bday.mp3"
			audio.play()
			//audio.currentTime+=20
			Array.from(document.querySelectorAll(".mo-fire")).forEach((x,i)=>{

				x.classList.add(i%2?"blow1":"blow2")
				setTimeout(()=>{
					x.style.display="none"	
				},8000)

			})
			setTimeout(()=>{
				var cake=document.getElementById("cake")
				document.querySelector(".container1").removeChild(cake)
				var ele = document.querySelector(".celebrateContainer")
				ele.style.display='block'
				console.log("cele")
				ele.style['z-index']=100
				var ele1 = document.querySelector(".celebrateContainer")
				ele1.classList.add("canvas")
				celebrate()
			},8000)
			var j=1
			setInterval(()=>{
				var img = document.querySelector(".celebrateContainer img")
				img.style.display = img.style.display==='none'?'block':'none'
				const no_pic = 8
				// j = j>no_pic?1:j
				img.src = `./photos/${j}.jpeg`
				img.onerror = handle
				img.style.left =`${(window.innerWidth/2)-Math.floor(img.getBoundingClientRect().width/2)}px`
				j=(j+1)%(no_pic+1)
			},2000)
		 }
		 else if(audio.paused) audio.play()
		 else audio.pause()
		}

		function handle(){
			this.src=this.src.replace(/jpeg$/,'gif')
			this.onerror=null			
			console.log(this.src)
		}
		function playpause(){
			var audio = document.querySelector('audio')
			if(audio.paused) audio.play() 
			else audio.pause();
		}
		

		window.onload = buildNode;
		window.onresize = position;

		(async function picgallery(){
			const no_pic = 8
			for(let i=1;i<=no_pic;i++){
				var parent = document.querySelector(".container2 .container #row")
				var img = document.createElement('img')
				var a = document.createElement('a')
				var newNode = document.createElement('div')
				newNode.className = "col-lg-3 col-md-4 col-6"
				a.className="d-block mb-4 h-100"
				img.src="./photos/"+i+".jpeg"
				img.onerror = handle
				img.id='gallery'
				a.appendChild(img)
				newNode.appendChild(a)
				parent.appendChild(newNode)
				
				
			}
		}());

		(async function videogallery(){
			const no_video = 1
			for(let i=1;i<=no_video;i++){
				var parent = document.querySelector(".container3 .container #row")
				var vid = document.createElement('video')
				var a = document.createElement('a')
				var newNode = document.createElement('div')
				newNode.className = "col-lg-3 col-md-4 col-6"
				a.className="d-block mb-4 h-100"
				vid.src="./videos/"+i+".mp4"
				vid.id='videogallery'
				vid.controls = true
				a.appendChild(vid)
				newNode.appendChild(a)
				parent.appendChild(newNode)
				
				
			}
		}())
