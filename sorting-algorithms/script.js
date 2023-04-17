// let array = [];

let array = [7,8,11,14,15,19,13,5,4,1,3,9,18,12,20,16,17,2,10,6];
let arrd =  [7,8,11,14,15,19,13,5,4,1,3,9,18,12,20,16,17,2,10,6];
let offsetG = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
let color = ["#ff9800","coral","#f44336","#4CAF50","#2196F3","brown","#fa1a8e","#ff4466","#9b870c","#010b13","#ff9800","coral","#f44336","#4CAF50","#2196F3","brown","#fa1a8e","#ff4466","#9b870c","#010b13"];


async function insertionSort(){
    let arr = [...array];
    let offset= [...offsetG];
    let wrapper = document.getElementById("wrapper2")
    let j;
    let key;
    arr.map((item,index)=>{
        let div = document.createElement("div");
        div.classList.add("box");
        div.innerText = item;
        div.style.backgroundColor = color[index];
        wrapper.appendChild(div);
    })
    
    let boxes = document.querySelectorAll("#wrapper2 .box")

    for(let i=0; i<arr.length;i++){
        j=i;   
        key=arr[i];

        let dd = arrd.indexOf(arr[j]);

        boxes[dd].style.transform = "translateY("+-70+"px)";
        await new Promise(r=>setTimeout(r,600));

        let counter=0;
        
        while(j>0 && arr[j-1]>key){

            arr[j]=arr[j-1];
            j--;

            let d = arrd.indexOf(arr[j]);
            
            offset[d] +=70; 
            boxes[d].style.transform= "translateX("+offset[d]+"px)";


            await new Promise(r=>setTimeout(r,600))
            counter++;

        }
        offset[dd] -=(counter)*70; 
        boxes[dd].style.transform= "translateX("+offset[dd]+"px)";
        await new Promise(r=>setTimeout(r,600))
        
        arr[j]=key;
        
    }

}

insertionSort();

async function selectionSort(){
    let arr = [...array];
    let offset = [...offsetG]

    let wrapper = document.getElementById("wrapper3")
    let j;
    let key;
    arr.map((item,index)=>{
        let div = document.createElement("div");
        div.classList.add("box");
        div.innerText = item;
        div.style.backgroundColor = color[index];
        wrapper.appendChild(div);
    })
    
    let boxes = document.querySelectorAll("#wrapper3 .box")
    let min;
    let pos;
    for(let i=0; i<arr.length; i++){
        min=arr[i];
        pos=i;
        let dd = arrd.indexOf(arr[i]);
        boxes[dd].style.transform = "translate("+offset[dd]+"px,"+(-70)+"px)";
        await new Promise(r=>setTimeout(r,600));


        for(let j=i; j<arr.length; j++){
         
            if(min>arr[j]){
                boxes[dd].style.transform = "translate("+offset[dd]+"px,"+0+"px)";
                await new Promise(r=>setTimeout(r,600));

                min=arr[j];
                pos=j;

                dd = arrd.indexOf(arr[j]);
                boxes[dd].style.transform = "translate("+offset[dd]+"px,"+-70+"px)";
                await new Promise(r=>setTimeout(r,600));
            }
        }

        arr[pos]=arr[i];
        arr[i] = min;


        offset[dd] += -70*(pos-i);
        boxes[dd].style.transform = "translateX("+offset[dd]+"px)";
        await new Promise(r=>setTimeout(r,600));
        dd = arrd.indexOf(arr[pos]);

        offset[dd] += 70*(pos-i);
        boxes[dd].style.transform = "translateX("+offset[dd]+"px)";
        await new Promise(r=>setTimeout(r,600));

    }
}

selectionSort();



async function bubbleSort(){
    let arr = [...array];
    let offset= [...offsetG];
    let wrapper = document.getElementById("wrapper")
    
    arr.map((item,index)=>{
        let div = document.createElement("div");
        div.classList.add("box");
        div.innerText = item;
        div.style.backgroundColor = color[index];
        wrapper.appendChild(div);
    })

    let boxes = document.querySelectorAll("#wrapper .box")

    let len = arr.length;
    let temp;
    for(let i=0; i<len-1;i++){
        for(let j=1; j<len-i; j++){
            if(arr[j-1] > arr[j]){

                    let d = arrd.indexOf(arr[j])
                    let dd = arrd.indexOf(arr[j-1])

                    temp = arr[j];
                    arr[j] = arr[j-1];
                    arr[j-1] = temp;
                    
                    offset[dd] +=70; 
                    boxes[dd].style.transform =  "translateX("+offset[dd]+"px)";


                    offset[d] -=70; 
                    boxes[d].style.transform= "translateX("+offset[d]+"px)";
                    await new Promise(r=>setTimeout(r,800))


                    // boxes[j].innerText = arr[j];
                    // boxes[j-1].innerText = arr[j-1];
                }
           
        }

    }
}
bubbleSort();

//**********************************************************Merge Sort **************************************************************/

let wrapper = document.getElementById("wrapper4")
array.map((item,index)=>{
    let div = document.createElement("div");
    div.classList.add("box");
    div.innerText = item;
    div.style.backgroundColor = color[index];
    wrapper.appendChild(div);
})

let boxes = document.querySelectorAll("#wrapper4 .box");

let offset = [...offsetG];

async function sort(array){
    
    let len = array.length;

    if(len === 1) return array;

    let left = [];
    let right = [];

    if(len % 2 === 0){

        for(let i =0;i<Math.floor(len/2);i++){
            left.push(array[i]);
            right.push(array[i+Math.floor(len/2)]);
        }

        left = await sort(left);
        right = await sort(right);

    }else{

        right.push(array[Math.floor(len/2)]);
        for(let i = 0; i<Math.floor(len/2); i++){
            left.push(array[i]);
            right.push(array[Math.floor(len/2)+i+1])
        }

        left = await sort(left);
        right = await sort(right);
        
    }
    let result = merge(left,right);
    return result;
}

async function merge(left,right){

    // console.log("left: "+left+" and right: "+right+" will be merged.");

    for(let i=0;i<left.length;i++){
        let d = arrd.indexOf(left[i]);
        boxes[d].style.transform =  "translate("+offset[d]+"px"+","+-70+"px)";
        await new Promise(r=>setTimeout(r,600));
    }
    for(let i=0;i<right.length;i++){
        let d = arrd.indexOf(right[i]);
        boxes[d].style.transform =  "translate("+offset[d]+"px"+","+-70+"px)";
        await new Promise(r=>setTimeout(r,600));
    }
    

    let result = [];
    let lefti=0;
    let rightj=0;

    while(lefti<left.length && rightj<right.length){
        
        if(left[lefti] <= right[rightj]){
            result.push(left[lefti++]);
        }else{
            result.push(right[rightj++]);
        }
    }

    if(lefti<left.length){
        for(let i=lefti;i<left.length;i++){
            result.push(left[i]);
        }
    }else{
        for(let i=rightj;i<right.length;i++){
            result.push(right[i]);
        }
    }

    for(let i=0;i<result.length;i++){
        let d = arrd.indexOf(result[i]);
        offset[d] = (i-d)*70;
        boxes[d].style.transform =  "translate("+offset[d]+"px"+","+0+"px)";
        await new Promise(r=>setTimeout(r,600));
    }
    
    return result;
}

let arr = [...array];
sort(arr);


//************************************************************Quick Sort*****************************************************************/

let wrap = document.getElementById("wrapper5")
array.map((item,index)=>{
    let div = document.createElement("div");
    div.classList.add("box");
    div.innerText = item;
    div.style.backgroundColor = color[index];
    wrap.appendChild(div);
})

let boxss = document.querySelectorAll("#wrapper5 .box");

let offs = [...offsetG];

let arrq = [...array];
arrq = quickSort(arrq,0,arrq.length-1);

async function quickSort(array,low,high){
    
    if(low>=high) {
        return array;
    }
    
    let obj = await partition(array,low,high);

    array = await quickSort(obj.array,low,obj.pivot-1);
    array = await quickSort(obj.array,obj.pivot+1,high);
 
    return array;
    
}


async function partition(array,low,high){
    let pivot = Math.floor((Math.random()*(high-low)+low));
    
    
    console.log("The pivot in array is: "+array[pivot]+" low: "+low+" high: "+high+" array[high]: "+array[high])

    let temp = array[high];
    array[high] = array[pivot];
    array[pivot] = temp;


    let d = arrd.indexOf(array[high]);
    let dd = arrd.indexOf(array[pivot]);

    offs[d] += (high-pivot)*70;

    boxss[d].style.transform =  "translate("+offs[d]+"px"+","+0+"px)";
    await new Promise(r=>setTimeout(r,600));

    offs[dd] += -(high-pivot)*70;

    boxss[dd].style.transform =  "translate("+offs[dd]+"px"+","+0+"px)";
    await new Promise(r=>setTimeout(r,600));


    let i=low-1;
    let j=low;

    for(j=low; j<high; j++){
        if(array[j]<=array[high]){
            i++;
            temp = array[i];
            array[i] = array[j]
            array[j] = temp;

            d = arrd.indexOf(array[i]);
            dd = arrd.indexOf(array[j])

            offs[d] += -(j-i)*70;

            console.log(i,j)

            boxss[d].style.transform =  "translate("+offs[d]+"px"+","+0+"px)";
            await new Promise(r=>setTimeout(r,600));
        
            offs[dd] += (j-i)*70;
        
            boxss[dd].style.transform =  "translate("+offs[dd]+"px"+","+0+"px)";
            await new Promise(r=>setTimeout(r,600));
        

        }
    }


    temp = array[high];
    array[high] = array[i+1];
    array[i+1] = temp;

    d = arrd.indexOf(array[high]);
    dd = arrd.indexOf(array[i+1])

    offs[d] += (high-i-1)*70;

    boxss[d].style.transform =  "translate("+offs[d]+"px"+","+0+"px)";
    await new Promise(r=>setTimeout(r,600));

    offs[dd] -= (high-i-1)*70;

    boxss[dd].style.transform =  "translate("+offs[dd]+"px"+","+0+"px)";
    await new Promise(r=>setTimeout(r,600));

    let obj = {
        pivot: i+1,
        array: array
    }

    return obj;

}

