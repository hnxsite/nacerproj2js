let arabic = document.getElementById("arabic");
let english = document.getElementById("English");
let Français = document.getElementById("Français");
let Nederlands = document.getElementById("Nederlands");
let title = document.getElementById("title");
let nacer = document.getElementById("nacer");
let id20 = document.getElementById("id20");
let p1 = document.getElementById("p1");
arabic.onclick = ()=>{
    setLanugage("arabic");
};
english.onclick = ()=>{
    setLanugage("english");
};
Français.onclick = ()=>{
    setLanugage("Français");
};
Nederlands.onclick = ()=>{
    setLanugage("Nederlands");
};
function setLanugage(getLanugage){
if(getLanugage === "arabic"){
    title.innerHTML="المبرمج نصر";
    nacer.innerHTML="موقع متعدد اللغات";
    id20.innerHTML= "تنويه";
    p1.innerHTML="بفضل الله أولا ثم بفضل أكايمية شيار وعلى رأسها المبرمج الكبير جيمو شيار اصبحت مصمم مواقع محترف وأستطيع الدمج بين المعلومات التي تعلمتها من الأكاديمية وأنتج محتوى جديد لم أتعرف عليه في الفيديوهات";

}else if(getLanugage === "english"){
    title.innerHTML="coder nacer";
    nacer.innerHTML="Multilingual site";
    id20.innerHTML= "Notice"
    p1.innerHTML="Thanks to God first, and then thanks to the Shiar Academy, headed by the great programmer, Jimo Shiar, I became a professional web designer, and I can combine the information I learned from the academy and produce new content that I did not recognize in the videos";
}else if(getLanugage === "Français"){
    title.innerHTML="programmeur nacer";
    nacer.innerHTML="Site multilingue";
    id20.innerHTML= "Remarquer";
    p1.innerHTML="Grâce à Dieu d'abord, puis grâce à la Shiar Academy, dirigée par le grand programmeur Jimo Shiar, je suis devenu un concepteur de sites Web professionnel, et je peux combiner les informations que j'ai apprises de l'académie et produire de nouveaux contenus que je ne reconnaissais pas dans les vidéos";
}else if(getLanugage === "Nederlands"){
    title.innerHTML = "programmeur nacer";
    nacer.innerHTML="Meertalige website";
    id20.innerHTML= "Merk op";
    p1.innerHTML="Eerst dankzij God, en daarna dankzij de Shiar Academy, geleid door de grote programmeur Jimo Shiar, ben ik een professionele webdesigner geworden en kan ik de informatie die ik van de academie heb geleerd combineren en nieuwe inhoud produceren die ik niet herkende in de video's";
}
 }
 class slider{
     constructor(){
         this.images =[];
         this.images[0] ="img5.jpg";
         this.images[1] ="img6.jpg";
         this.images[2] ="img7.jpg";
         this.images[3] ="img8.jpg";
         this.counter = 0;
         this.playslider();
        setInterval(()=>{
            this.playslider();
        },2000); 
     }
     playslider(){
         if(this.counter<this.images.length -1){
             this.counter++;
         }
         else{
             this.counter = 0;
         }
         document.slider2.src = this.images[this.counter];
     }
 }
 onload = new slider();