/**
 * @param {number} millis
 */
async function sleep(millis) {
    setTimeout(function(){
    console.log("comingggg")
        return `After sleeping for ${millis} mili seconds`
    }, millis)
}

 
  let t = Date.now()
	sleep(4000).then(() => console.log(Date.now() - t)) // 100
 
