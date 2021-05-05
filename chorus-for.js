for (let i = 100;i <= 200;i ++ ){
  if (i % 3 && i === 0 ){
    console.log("Loopy")
  }
  else if(i % 4 && i ===0){
    console.log("Lighthouse")
  }
  else if (i % 3 && i === 0 && i % 4 && i===0 ){
    console.log("LoopyLighthouse")
  }
}