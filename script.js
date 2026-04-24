var qData = [
    { q: "ভারতের সংবিধানের কত নম্বর ধারা অনুযায়ী রাষ্ট্রপতি 'জাতীয় জরুরি অবস্থা' ঘোষণা করতে পারেন?", a: "৩৫২ নম্বর ধারা", opts: ["৩৫২ নম্বর ধারা", "৩৫৬ নম্বর ধারা", "৩৬০ নম্বর ধারা", "৩৬৮ নম্বর ধারা"] },
    { q: "ইবন বতুতা কোন শাসকের রাজত্বকালে ভারতে এসেছিলেন?", a: "মহম্মদ বিন তুঘলক", opts: ["আলাউদ্দিন খিলজি", "মহম্মদ বিন তুঘলক", "ফিরোজ শাহ তুঘলক", "গিয়াসউদ্দিন বলবন"] },
    { q: "বায়ুমণ্ডলের কোন স্তরে উল্কাপিণ্ড এসে পুড়ে ছাই হয়ে যায়?", a: "মেসোস্ফিয়ার", opts: ["ট্রপোস্ফিয়ার", "স্ট্র্যাটোস্ফিয়ার", "মেসোস্ফিয়ার", "আয়নোস্ফিয়ার"] },
    { q: "কোষের 'প্রোটিন ফ্যাক্টরি' কাকে বলা হয়?", a: "রাইবোজোম", opts: ["লাইসোজোম", "রাইবোজোম", "মাইটোকনড্রিয়া", "গলগি বডি"] },
    { q: "সিন্ধু সভ্যতার 'লোথাল' বন্দরটি কোন নদীর তীরে অবস্থিত ছিল?", a: "ভোগাবো", opts: ["সিন্ধু", "রাভি", "ভোগাবো", "ঘর্ঘরা"] },
    { q: "সংবিধানের কত নম্বর তফসিলে (Schedule) 'দলত্যাগ বিরোধী আইন' বর্ণিত আছে?", a: "দশম তফসিল", opts: ["অষ্টম তফসিল", "নবম তফসিল", "দশম তফসিল", "একাদশ তফসিল"] },
    { q: "কে ১৯০৫ সালে 'অভিনব ভারত' নামক বিপ্লবী সংগঠন প্রতিষ্ঠা করেন?", a: "ভি. ডি. সাভারকর", opts: ["বারীন্দ্র ঘোষ", "প্রফুল্ল চাকি", "ভি. ডি. সাভারকর", "রাসবিহারী বসু"] },
    { q: "পৃথিবীর গভীরতম হ্রদ কোনটি?", a: "বৈকাল হ্রদ", opts: ["কাস্পিয়ান সাগর", "সুপিরিয়র হ্রদ", "বৈকাল হ্রদ", "ভিক্টোরিয়া হ্রদ"] },
    { q: "জলের স্থায়ী ক্ষরতা দূর করতে নিচের কোনটি ব্যবহৃত হয়?", a: "সোডিয়াম কার্বনেট", opts: ["সোডিয়াম বাইকার্বনেট", "ক্যালসিয়াম সালফেট", "সোডিয়াম কার্বনেট", "পটাসিয়াম পারম্যাঙ্গানেট"] },
    { q: "কম্পিউটারের প্রধান মেমোরি কোনটি?", a: "RAM", opts: ["Hard Disk", "RAM", "ROM", "Cache Memory"] },
    { q: "গ্লুকোমা মানব শরীরের কোন অঙ্গকে ক্ষতিগ্রস্ত করে?", a: "চোখ", opts: ["ফুসফুস", "চোখ", "বৃক্ক", "যকৃৎ"] },
    { q: "তুজুক-ই-বাবরী কোন ভাষায় রচিত?", a: "তুর্কি", opts: ["ফারসি", "আরবি", "তুর্কি", "উর্দু"] },
    { q: "ভারতের সর্বোচ্চ জলপ্রপাত কুঞ্চিকল কোন রাজ্যে অবস্থিত?", a: "কর্ণাটক", opts: ["কেরল", "কর্ণাটক", "মহারাষ্ট্র", "তামিলনাড়ু"] },
    { q: "অর্থনীতিতে 'CRR' এর পূর্ণরূপ কী?", a: "Cash Reserve Ratio", opts: ["Cash Reserve Rate", "Cash Reserve Ratio", "Credit Reserve Ratio", "Currency Reserve Rate"] },
    { q: "কে লোকসভার প্রথম মহিলা স্পিকার ছিলেন?", a: "মীরা কুমার", opts: ["সুষমা স্বরাজ", "মীরা কুমার", "সুমিত্রা মহাজন", "প্রতিভা পাতিল"] },
    { q: "নিচের কোন পদ্ধতিটি সূর্য থেকে তাপ পৃথিবীতে আসার প্রধান মাধ্যম?", a: "বিকিরণ", opts: ["পরিবহন", "পরিচলন", "বিকিরণ", "প্রতিসরণ"] },
    { q: "বিখ্যাত 'গদর পার্টি' সান ফ্রান্সিসকোতে কত সালে প্রতিষ্ঠিত হয়?", a: "১৯১৩", opts: ["১৯০৭", "১৯১১", "১৯১৩", "১৯১৫"] },
    { q: "রক্তের লোহিত কণিকা (RBC) কোথায় তৈরি হয়?", a: "অস্থিমজ্জা", opts: ["যকৃৎ", "প্লীহা", "অস্থিমজ্জা", "হৃৎপিণ্ড"] },
    { q: "ভারতের কোন মন্দিরকে 'ব্ল্যাক প্যাগোডা' বলা হয়?", a: "কোণার্কের সূর্য মন্দির", opts: ["সোমনাথ মন্দির", "কোণার্কের সূর্য মন্দির", "মিনাক্ষী মন্দির", "জগন্নাথ মন্দির"] },
    { q: "ভারতের কোন রাজ্যে প্রথম 'পঞ্চায়েতি রাজ' ব্যবস্থা চালু হয়?", a: "রাজস্থান", opts: ["অন্ধ্রপ্রদেশ", "রাজস্থান", "পশ্চিমবঙ্গ", "গুজরাট"] },
    { q: "বিশ্বের বৃহত্তম ম্যানগ্রোভ অরণ্য কোনটি?", a: "সুন্দরবন", opts: ["পিচাভরম", "সুন্দরবন", "কোরিঙ্গা", "ভিতরকণিকা"] },
    { q: "পার্লামেন্টের যৌথ অধিবেশনে সভাপতিত্ব কে করেন?", a: "লোকসভার স্পিকার", opts: ["রাষ্ট্রপতি", "উপ-রাষ্ট্রপতি", "প্রধানমন্ত্রী", "লোকসভার স্পিকার"] },
    { q: "গান্ধীজি কত সালে দক্ষিণ আফ্রিকা থেকে ভারতে ফিরে আসেন?", a: "১৯১৫", opts: ["১৯১১", "১৯১৩", "১৯১৫", "১৯১৭"] },
    { q: "হৃৎপিণ্ডের আবরণীকে কী বলা হয়?", a: "পেরিকার্ডিয়াম", opts: ["প্লুরা", "পেরিকার্ডিয়াম", "মেনিনজেস", "পেরিটোনিয়াম"] },
    { q: "সংবিধান সংশোধনের পদ্ধতি কোন দেশের সংবিধান থেকে নেওয়া হয়েছে?", a: "দক্ষিণ আফ্রিকা", opts: ["আমেরিকা", "আয়ারল্যান্ড", "দক্ষিণ আফ্রিকা", "কানাডা"] },
    { q: "পর্যায় সারণির কোন গ্রুপকে 'হ্যালোজেন' বলা হয়?", a: "গ্রুপ ১৭", opts: ["গ্রুপ ১৫", "গ্রুপ ১৬", "গ্রুপ ১৭", "গ্রুপ ১৮"] },
    { q: "বিখ্যাত 'অজন্তা গুহা' কোন রাজ্যে অবস্থিত?", a: "মহারাষ্ট্র", opts: ["মধ্যপ্রদেশ", "মহারাষ্ট্র", "কর্ণাটক", "ওড়িশা"] },
    { q: "ভারতের জাতীয় আয়ের গণনা কে প্রথম করেছিলেন?", a: "দাদাভাই নওরোজি", opts: ["মহালনোবিশ", "দাদাভাই নওরোজি", "ভি. কে. আর. ভি. রাও", "অমর্ত্য সেন"] },
    { q: "কোন গভর্নর জেনারেল সতীদাহ প্রথা রদ করেছিলেন?", a: "লর্ড উইলিয়াম বেন্টিঙ্ক", opts: ["লর্ড ডালহৌসি", "লর্ড বেন্টিঙ্ক", "লর্ড কার্জন", "লর্ড ক্যানিং"] },
    { q: "শান্তিস্বরূপ ভাটনগর পুরস্কার কোন ক্ষেত্রে প্রদান করা হয়?", a: "বিজ্ঞান ও প্রযুক্তি", opts: ["সাহিত্য", "বিজ্ঞান ও প্রযুক্তি", "समाजসেবা", "খেলাধুলা"] },
    { q: "CPU-র পূর্ণরূপ কী?", a: "Central Processing Unit", opts: ["Central Programming Unit", "Central Processing Unit", "Control Processing Unit", "Common Processing Unit"] },
    { q: "কে ভার্নাকুলার প্রেস অ্যাক্ট (১৮৭৮) বাতিল করেছিলেন?", a: "লর্ড রিপন", opts: ["লর্ড লিটন", "লর্ড কার্জন", "লর্ড রিপন", "লর্ড ডাফরিন"] },
    { q: "লোহার মরিচা ধরা কোন ধরনের পরিবর্তন?", a: "রাসায়নিক পরিবর্তন", opts: ["ভৌত পরিবর্তন", "রাসায়নিক পরিবর্তন", "জৈবিক পরিবর্তন", "কোনটিই নয়"] },
    { q: "বিজয় ঘাট কার সমাধিস্থল?", a: "লাল বাহাদুর শাস্ত্রী", opts: ["মহাত্মা গান্ধী", "জওহরলাল নেহেরু", "লাল বাহাদুর শাস্ত্রী", "ইন্দিরা গান্ধী"] },
    { q: "রিখটার স্কেলে ভূমিকম্পের কী পরিমাপ করা হয়?", a: "তীব্রতা", opts: ["গতিবেগ", "তীব্রতা", "উৎসস্থল", "স্থায়িত্বকাল"] },
    { q: "হিমোগ্লোবিনের মূল উপাদান কোনটি?", a: "লোহা", opts: ["তামা", "লোহা", "ম্যাগনেসিয়াম", "ক্যালসিয়াম"] },
    { q: "মহেঞ্জোদারো কথাটির অর্থ কী?", a: "মৃতের স্তূপ", opts: ["জীবিতদের শহর", "মৃতের স্তূপ", "শান্তির দেশ", "পবিত্র ভূমি"] },
    { q: "পশ্চিমবঙ্গের রূপকার কাকে বলা হয়?", a: "বিধান চন্দ্র রায়", opts: ["নেতাজি সুভাষচন্দ্র বসু", "বিধান চন্দ্র রায়", "প্রফুল্ল চন্দ্র ঘোষ", "জ্যোতি বসু"] },
    { q: "টিনিয়া সোলিয়াম কোন প্রাণীর বিজ্ঞানসম্মত নাম?", a: "শুয়োরের ফিতাকৃমি", opts: ["কেঁচো", "যকৃৎ কৃমি", "গোল কৃমি", "শুয়োরের ফিতাকৃমি"] },
    { q: "গউরী চ্যান শৃঙ্গটি ভারতের কোন রাজ্যে অবস্থিত?", a: "অরুণাচল প্রদেশ", opts: ["সিকিম", "অরুণাচল প্রদেশ", "হিমাচল প্রদেশ", "উত্তরাখণ্ড"] }
];

var curQ = 0, userScore = 0, qTimer, secLeft = 30;

function beginQuizNow() {
    document.getElementById("start-area").style.display = "none";
    document.getElementById("quiz-main-container").style.display = "block";
    displayNextQuestion();
}

function runTimer() {
    secLeft = 30;
    document.getElementById("timer-box").innerHTML = secLeft;
    clearInterval(qTimer);
    qTimer = setInterval(function() {
        secLeft--;
        document.getElementById("timer-box").innerHTML = secLeft;
        if(secLeft <= 0) { 
            clearInterval(qTimer); 
            revealCorrectAns(); 
        }
    }, 1000);
}

function displayNextQuestion() {
    if (curQ >= qData.length) { 
        showFinalSummary(); 
        return; 
    }
    runTimer();
    var currentData = qData[curQ];
    document.getElementById("quiz-progress").innerHTML = "প্রশ্ন: " + (curQ + 1) + " / " + qData.length;
    document.getElementById("main-q-text").innerHTML = (curQ + 1) + ". " + currentData.q;
    
    var optContainer = document.getElementById("main-opt-container");
    optContainer.innerHTML = "";
    
    currentData.opts.forEach(function(val) {
        var b = document.createElement("button");
        b.className = "opt-btn";
        b.innerHTML = val;
        b.onclick = function() { validateUserChoice(b, val); };
        optContainer.appendChild(b);
    });
}

function validateUserChoice(btn, selected) {
    clearInterval(qTimer);
    var allButtons = document.querySelectorAll(".opt-btn");
    allButtons.forEach(function(item) { item.disabled = true; });

    if (selected === qData[curQ].a) {
        btn.classList.add("correct-ans");
        userScore++;
        document.getElementById("score-val").innerHTML = userScore;
        try { document.getElementById("snd-right").play(); } catch(e) {}
    } else {
        btn.classList.add("wrong-ans");
        try { document.getElementById("snd-wrong").play(); } catch(e) {}
        allButtons.forEach(function(item) { 
            if(item.innerHTML === qData[curQ].a) item.classList.add("correct-ans"); 
        });
    }
    setTimeout(moveForward, 1500);
}

function revealCorrectAns() {
    var allButtons = document.querySelectorAll(".opt-btn");
    allButtons.forEach(function(item) {
        if(item.innerHTML === qData[curQ].a) item.classList.add("correct-ans");
        item.disabled = true;
    });
    try { document.getElementById("snd-wrong").play(); } catch(e) {}
    setTimeout(moveForward, 1500);
}

function moveForward() {
    curQ++;
    displayNextQuestion();
}

function showFinalSummary() {
    document.getElementById("question-area").style.display = "none";
    document.getElementById("quiz-progress").style.display = "none";
    document.getElementById("timer-box").style.display = "none";
    
    var resPanel = document.getElementById("result-area");
    resPanel.style.display = "block";
    document.getElementById("res-score").innerHTML = "আপনার স্কোর: " + userScore + " / " + qData.length;
}