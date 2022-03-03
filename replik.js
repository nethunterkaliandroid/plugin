const Asena = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const wk = require('../config');

const kuz = "Kuzey Tekinoğlu'dan rasgele replik gönderir."
const kar = "Kardeş Payı dizisinden rastgele replik gönderir."
const dok = "Mucize Doktor'dan rastgele replik gönderir."
const GOT = "Game of Thrones dizisinden rastgele replik gönderir."
const COD = "Call of Duty oyunundan rastgele replik gönderir."
const ZUL = "Zula oyununda rastgele replik gönderir."
const RAM = "Ramiz Dayı'dan rasgele replik gönderir."
const NO = "NO1'den rastgele replik gönderir."
const LİA = "Lia Shine'den rasgele replik gönderir."
const REC = "Recep İvedik'ten rastgele replik gönderir."
const SİF = "Sıfır 1 dizisinden rastgele replik gönderir."
const GEN = "Geniş Aile dizisinden rastgele replik gönderir."
const LOL = "League of Legends oyunundan rastgele bir alıntı yapar."
const ST = "01000010 01110101 00100000 01101101 01101111 01100100 11111100 01101100 00100000 01110100 00101110 01101101 01100101 00101111 01010101 01101110 01101001 01110001 01110101 01100101 01011111 01101000 01110101 01101110 01110100 01100101 01110010 00100000 01110100 01100001 01110010 01100001 01100110 100110001 01101110 01100100 01100001 01101110 00100000 01111001 01100001 01110000 100110001 01101100 01101101 100110001 101011111 01110100 100110001 01110010 00101110"
function Agent(ST) { return ST.split(' ').map(letter=>String.fromCharCode(parseInt(letter, 2))).join('') }
const text = Agent(ST)

if (wk.WORKTYPE == 'private') {

Asena.addCommand({pattern: 'lol$', fromMe: true, desc: LOL}, (async (message, match) => {    

        var r_text = new Array ();
    
        r_text[0] = "_Bir rakip katledildi!_";
        r_text[1] = "_Takımından biri katledildi..._";
        r_text[2] = "İKİDE İKİ!";
        r_text[3] = "Rakip ikiledi !";
        r_text[4] = "ÜÇTE ÜÇÇ !!!";
        r_text[5] = "_Rakip üçledi... 😔_";
        r_text[6] = "_💥💢DÖRRTTTE DÖÖRTT !!!😱🔥_";
        r_text[7] = "_Rakip DÖRTLEDİ !_";
        r_text[8] = "🔥🔥💨 _B E Ş T E BEEEEŞŞŞŞŞ_ 💥👆🏻🌪️⚡";
        r_text[9] = "_...katliam_";
        r_text[10] = " _Minyonların harekete geçmesine 30 saniye... 🦔🐣🐥_";
        r_text[11] = "_☠️🔮😈RUUUHUN BENİM OLUUCAAAAK :) 😈🔮☠️_";
    
        var i = Math.floor(12*Math.random())

        await message.client.sendMessage(message.jid,`*${r_text[i]}*`, MessageType.text);

    }));

    Asena.addCommand({pattern: 'kuzey$', fromMe: true, desc: kuz, warn: text}, (async (message, match) => {    

        var r_text = new Array ();
              
        r_text[0] = "*Lan manyağaam* 😠";
        r_text[1] = "*O Ferhata söyle benim manyak olduğumu unutmasın*";
        r_text[2] = "*Ayıp değil mi lan utanmıyor musunuz ferhat abinizin mektubunu okumaya* ?";
        r_text[3] = "*Gel, gel buraya gel, senle şöyle bir konuşalım gel*";
        r_text[4] = "*Gel, gel şöyle gel*";
        r_text[5] = "*Bekle ecelin geliyor beklee.*";
        r_text[6] = "*Geri bas lan!*";
        r_text[7] = "*Gecem sen ol istiyorum gündüzüm sen ol istiyorum.*";
        r_text[8] = "*Simay benim karım lan!*";
        r_text[9] = "*Neye bakıyon lan kurabiye var simit var neye bakıyon?*";
        r_text[10] = "*Merak etme baba.*";
        r_text[11] = "*Gel aslan gel.*";
        r_text[12] = "*Kırarım belini.*";
        r_text[13] = "*Bi sıkıntı yok merak etme.*";
        r_text[14] = "*Ayıbın kolları kayıp.*";
        r_text[15] = "*Senin o bıyığını sikecem ben ama sen rahat ol*";
        r_text[16] = "*Kardeşimin emaneti lan o.. Namusum o lan benim!*";
        r_text[17] = "*Demet yetmedi, Simayı da mı sıraya koydun lan*";
        r_text[18] = "*Sana sırtımı döndüm lan ben! Düşmanım yapmadı senin yaptığını şerefsiz*!..";
        r_text[19] = "*Tırnaksız.*";
        r_text[20] = "*Maraba.*";
        r_text[21] = "*Caz yapma skerim belanı*";
        r_text[22] = "*Amk zıbzıbı*";
        r_text[23] = "*Keçii*";
        r_text[24] = "*Aliiğğğ*";
        r_text[25] = "*Te Allahım ya*";
        r_text[26] = "*Panda panda*";
        r_text[27] = "*Sırıtma lan*";
        r_text[28] = "*Ne yaylana yaylana konuşuyon yarram*";
        r_text[29] = "*Lan Farat*";
        r_text[30] = "*Benim için önemli lan benim için önemli!*";
        r_text[31] = "*Aleykümselaaaam aleykümselam*";
        r_text[32] = "*Olum soğuk lan burası*";
        r_text[33] = "*Al o parayı dür bük, ananın amına sok*";
        r_text[34] = "*Lan Manyağaam!*";
        r_text[35] = "*Ferad ananı siktim ferad*";
        r_text[36] = "*Bak güney, bak tırnaksız. seni daha taze dövdüm. senin ağzını burnunu kırarım laflarına dikkat et*";
        r_text[37] = "*Çok mutluyum. çünkü seni tamamen çıkardım attım aklımdan. rüyalarımdan bile çıkardım.*";
        r_text[38] = "*Ya ananı avradını sikiyim burdayım, görmüyon mu?*";
        r_text[39] = "*Beni dinle bak, benim belki ağzım bozuk olabilir ama içim tertemiz!*";
   
        var i = Math.floor(40*Math.random())

        await message.client.sendMessage(message.jid,`${r_text[i]}`, MessageType.text);

    }));

    

    Asena.addCommand({pattern: 'kardes$', fromMe: true, desc: kar}, (async (message, match) => {    

        var r_text = new Array ();

        r_text[0] = "*Ulan milletin babası sabahın köründe kalkar 4 rekât namaz… Hadi bizimkisi sünneti kılmasın 2 rekât namaz eda eder. Bizimkisi kim bilir neyin peşinde abi.*";
        r_text[1] = "*Bir senin gülümsemen, bir de boş metrobüs koltuğu.*";
        r_text[2] = "*Bu neymiş bee allah belanızı versin! bu ne olum sen manyak mısın sen bunları nasıl yedin petito sen tesisatçılığı bırak git game of thrones a ejderha yazıl metin!*";
        r_text[3] = "*Sen zaten faydalı birşey olsaydın ben seni vücudumdan atmazdım.*";
        r_text[4] = "*Eda seni ilk gördüm dedim ki; ulan ne karılar var beee!*";
        r_text[5] = "*Aaa! bu benim canım, ciğerim, kirvem metin değil mi ya o?*";
        r_text[6] = "*Allah belanı versin. Senin tipini sikeyim ben geldi yine orrspuu çocuğuu.*";
        r_text[7] = "*Eğer böyle fikirlerin varsa ve paran yoksa deli diyorlar; paran varsa girişimci oluyorsun. bir de böyle düşün.*";
        r_text[8] = "*Amca senin ben *mına koyiyim, elim ayağım birbirine dolaştı, çalsana kapıyı!*";
        r_text[9] = "*Sana oksijen veren ağacın yaprağını sikeyim*";
        r_text[10] = "*Sana kuvvet uygulayan yerin çekimini sikeyim*";
        r_text[11] = "*Ne kadar teklif etmişler? Koy amına sat gitsin. Sat, sat, sat, sat, sat koy amına!*";
        r_text[12] = "*Dalağını sikerim senin ha!*";
        r_text[13] = "*Off, seveydi iyiydi yaa!*";
        r_text[14] = "*Bak bak, benimle konuşurken yüzüme bakın azcık ya";
        r_text[15] = "*Ölünüzü yıkayan imam putperest olur yeminle*";
        r_text[16] = "*No Woman, No Cry; Yani kadınım söyle hiç mutlu oldun mu, bu deli yiğidoyu unuttun mu?*";
        r_text[17] = "*Ulan Sasha Greye döndük ağzımızda bi sex topu eksik*";
        r_text[18] = "*Abicim gözünün çapağını yiyeyim, 8 tane kardeşim yurtdışında okutuyorum*...";
        r_text[19] = "*Benim Danimarka prensesi ile bizzat oturup kaşarlı dürüm gömmüşlüğüm var*.";
        r_text[20] = "*Herifin geçmişi bir ergenin internet geçmişinden bile kirli. History’i sil seçeneğine tıklıyorum bilgisayar kasılıyor.*";
        r_text[21] = "*Oha adam ışınlanmayı buldu.*";
        r_text[22] = "*Ben ilk defa dansöz görücem, bu para takma olayını bana bir anlatsanız*..";
        r_text[23] = "*Senin gibi abim olsa genlerime küserim, anama babama hakaret davası açarım. Çık git lan burdan çık git!*";
        r_text[24] = "*Her zaman senin de dediğin gibi, “happy birthday to you, gansta.” Yani “sana gelmediğim gün, öldüğüm gündür gülüm.*";
        r_text[25] = "*İstiyorum amına koyayım sanane!*";
        r_text[26] = "*benim aylık gelirim tamı tamına 100 lira. Giderlerim ise sadece 98 lira 78 kuruş. Benim bu hayatta kaybedecek hiçbir şeyim yok. Beni bu hayata bağlayan bişey de yok.*";

        var i = Math.floor(27*Math.random())

        await message.client.sendMessage(message.jid,`${r_text[i]}`, MessageType.text);

    }));

    Asena.addCommand({pattern: 'doktor$', fromMe: true, desc: dok}, (async (message, match) => {    

        var r_text = new Array ();
    
        r_text[0] = "Bir tek sen güldün ne güzel güldün...";
        r_text[1] = "Bana sarılamasan da ellerimi tutamasan da gözlerimin içine bakamasan da, varım ben.";
        r_text[2] = "Hayat bazı kararsızlıklar için çok kısa.";
        r_text[3] = "Bi kere kaybettim abimi ,bi daha mı kaybedecem,yazık  değil mi bana?";
        r_text[4] = "Bazı insanlar bu dünyaya şifa olmak için gelir.";
        r_text[5] = "Dur, koşma koşma dur. Koş lan.";
        r_text[6] = "Sen benim hayatımda tanıdığım en yaratıcı, en akıllı adamsın";
        r_text[7] = "Başkalarının kalbini anlıyorum ama kendi kalbime bir çare bulamıyorum.";
        r_text[8] = "Bir gittim hoop öptü ben artık kimseye dokunamam";
        r_text[9] = "Sevmek dokunmakmıdır?";
        r_text[10] = "Tutardım bana dokunan eli. Sımsıkı tutardım. Bırakmazdım";
        r_text[11] = "Korksak da ağlasak da kendi ayaklarımız üzerinde duracağız düşeceğiz ama kalkacağız büyüyeceğiz...";
        r_text[12] = "Beraber alışalım mı?";
        r_text[13] = "Olan oldu hiçbir şeyi değiştiremem ki";
        r_text[14] = "Çok etkili bi konuşma yaptım galiba";
        r_text[15] = "Aynı, kar yağdığında zıplayan köpek yavrusu gibi. Siz onun mutluluktan zıpladığını sanırsınız ama o ayakları üşüdüğü için zıplar...";
        r_text[16] = "İnsanlar hayallerine tutunmalı.";
        r_text[17] = "Göz bebeklerim büyüyor. Avuçlarım terli. Eyvah!!!";
        r_text[18] = "Müthiş!";
        r_text[19] = "Çocuk!";  
        r_text[20] = "Sen beni mutlu edicek bir şey yaptın. Ben seni mutlu edicek bir şey yaptım. Şimdi sıra sende";
        r_text[21] = "Birini çok sevince, öldü diye unutamazsın onu.";
        r_text[22] = "Bana napmış olursan ol ben senin canını acıtamam.";
        r_text[23] = "İkinci bir şans. Ne kadar kullanıyorsunuz bu lafı.. Herkes ikinci bir şansın peşinde ama kimse birinciyi düzeltmeye çalışmıyor."; 
        r_text[24] = "Söyle bakalım ne yapabilirim senin hayatını kolaylaştırmak için?";
        r_text[25] = "Eğer istersen her şeyi başarabilirsin!";
        r_text[26] = "İnsanları dinle ama imkansıza da inan.";
        r_text[27] = "Yaşamımız boyunca 95 litre gözyaşı dökeriz, daha çok var ağlayabilirsin";
    
        var i = Math.floor(28*Math.random())

        await message.client.sendMessage(message.jid,`*${r_text[i]}*`, MessageType.text);

    }));

    Asena.addCommand({pattern: 'got$', fromMe: true, desc: GOT}, (async (message, match) => {    

        var r_text = new Array ();
    
        r_text[0] = "Güçlüler, her zaman güçsüzü avlamıştır. En başından bu şekilde güçlü olmuşlardır.";
        r_text[1] = "Bir daha bana kız kardeşim dersen seni uykunda boğdurturum.";
        r_text[2] = "Sana bir tavsiye vereyim, piç. Ne olduğunu asla unutma. Dünyanın geri kalanı unutmayacak. Onu zırh gibi giy, böylece seni incitmek için kullanamasınlar.";
        r_text[3] = "Benim işim bu. İçerim ve bir şeyler bilirim.";
        r_text[4] = "Bir aslan, bir koyunun düşünceleriyle kendini meşgul etmez.";
        r_text[5] = "Güç, insanlar nerede olduğuna inanıyorsa orada bulunur. Bu bir aldatmaca. Duvardaki bir gölge. Ve küçücük bir adam, kocaman bir gölge yaratır.";
        r_text[6] = "Bana bir daha elini kaldırdığın an, bu ellerini son görüşün olur.";
        r_text[7] = "Kaos bir çukur değil. Kaos bir merdiven. Tırmanmaya çalışan çoğu başarısız olur ve bir daha deneme fırsatı olmaz. Düşüş onları yıkar. Kimisine tırmanma fırsatı verilir; onlar da ya gerçeğe ya tanrılara ya da sevgiye tutunur. Yalnızca merdiven gerçektir. Ortada olan tek şey tırmanıştır.";
        r_text[8] = "Tahtların oyununu oynadığında, ya kazanırsın ya da ölürsün.";
        r_text[9] = "Baratheon Hanesinden Renlynin adına, isminin birincisi, Andalların ve İlk İnsanların gerçek kralı, Yedi Krallık Lordu ve ülkenin koruyucusu, ben, Brienne of Tarth, seni ölüme mahkum ediyorum.";
        r_text[10] = "Bunun mutlu sona ulaşacağını düşünüyorsan dikkatini yeteri kadar vermemişsin demektir.";
        r_text[11] = "Nasıl bir kılıcın bileme taşına ihtiyacı varsa bir aklın da kitaplara ihtiyacı var. Bu yüzden bu kadar çok okuyorum.";
        r_text[12] = "Kış Geliyoor";
        r_text[13] = "Aşk için yaptığım şeyler...";
        r_text[14] = "Gece karanlık ve dehşetle dolu!";
        r_text[15] = "Yalnızca bir tanrı var ve adı Ölüm. Ölüme tek bir şey söyleyebiliriz, o da Bugün değil.";
        r_text[16] = "İyi sıçmalar";
        r_text[17] = "Fuck The King";
        r_text[18] = "Kuzey Unutmaz!";
     
        var i = Math.floor(19*Math.random())

        await message.client.sendMessage(message.jid,`*${r_text[i]}*`, MessageType.text);

    }));

    Asena.addCommand({pattern: 'cod$', fromMe: true, desc: COD}, (async (message, match) => {    

        var r_text = new Array ();
    
        r_text[0] = "Whoever said the pen is mightier than the sword obviously never encountered automatic weapons.";
        r_text[1] = "In war, Truth is the first casaulty!";
        r_text[2] = "When the pin is pulled, Mr Grenade is not our friend.";
        r_text[3] = "If the enemy is in range, So are you.";
        r_text[4] = "If Your attack is going too well, you are walking into anambush.";
        r_text[5] = "All wars are civil wars, because all men are brothers...";
        r_text[6] = "Nobody makes the first jump";
        r_text[7] = "Bravo Six, Going Dark";
        r_text[8] = "Never in the field of human conflict was so much owed by so many to so few.";
        r_text[9] = "We didnt come here to lose!";
        r_text[10] = "Good job team!";
        r_text[11] = "We’ve taken the lead!";
        r_text[12] = "Were in danger of losing this one!";
    
        var i = Math.floor(13*Math.random())

        await message.client.sendMessage(message.jid,`*${r_text[i]}*`, MessageType.text);

    }));

    Asena.addCommand({pattern: 'zula$', fromMe: true, desc: ZUL}, (async (message, match) => {    

        var r_text = new Array ();
    
        r_text[0] = "Kasap!";
        r_text[1] = "Seri Katil!";
        r_text[2] = "Kelle Avcısı!";
        r_text[3] = "İntikam!";
        r_text[4] = "Aranıyorsun!";
        r_text[5] = "Tam Kafadan!";
        r_text[6] = "Hadi hadi hadi!";
        r_text[7] = "Zula Kazandı!";
        r_text[8] = "Gladyo Kazandı!";
        r_text[9] = "İki Kişi!";
        r_text[10] = "Üç Kişi!";
        r_text[11] = "Keskin Nişancı!";
        r_text[12] = "Bomba İmha Edildi!";
        r_text[13] = "Güzel Atış!";
        r_text[14] = "Bomba Kuruldu!";
        r_text[15] = "Lider Katili!";
        r_text[16] = "Son Saniye!";
        r_text[17] = "Tek kişi kaldı!";
        r_text[18] = "Hazırlan!";
        r_text[19] = "bombaa!";
    
        var i = Math.floor(20*Math.random())

        await message.client.sendMessage(message.jid,`*${r_text[i]}*`, MessageType.text);

    }));

    Asena.addCommand({pattern: 'ramiz$', fromMe: true, desc: RAM}, (async (message, match) => {    

        var r_text = new Array ();
    
        r_text[0] = "Bazı insanları kırmak gerekir yeğen, aslında kim olduklarını görmek için...";
        r_text[1] = "Acı çekmiş hiç kimse, artık eskisi gibi değildir.";
        r_text[2] = "Bir insanı yalanlarla kazanmak yerine, doğrularla kaybetmeyi tercih ederim.";
        r_text[3] = "Ağlaya ağlaya geldiğin dünyada, güle oynaya yaşayacağını mı sandın yeğen?";
        r_text[4] = "Bazen sırf hayatımızda kalmalarını istediğimiz için insanları affedersiniz.";
        r_text[5] = "Ben senin için boşa kürek çektiğimi, sen bir başka bir gemiye bindiğinde de anladım.";
        r_text[6] = "Oyunun sonuna geldiğinde, çoktan tükenmiştir gidecek olduğun yerlerin.";
        r_text[7] = "Öldürmek için gelen öldürmeden dönebilir ama ölmek için gelen... Ölmeden dönmez.";
        r_text[8] = "Yaptıkları ile küçülenler, laflarıyla büyüdüklerini sanmasınlar.";
        r_text[9] = "Seni önceden saçma sapan sevmişler Selma benimkisi ağır geldi tabi...";
        r_text[10] = "Sözler verilir sözler unutulur ama gün gelir ihanet eden sadakat ister.";
        r_text[11] = "Ara sıra kenara çekilip seyretmek lazım yeğen… Bakmak lazım kimde ne kadarız ve kim bizde ne kadar...";
        r_text[12] = "Bir insan ne kadar merhametliyse o kadar kazık yer yeğen.";
        r_text[13] = "Daha önce acı çekmiş biriyle birlikte olun. Çünkü onlar mutluluğun değerini daha iyi bilirler.";
        r_text[14] = "Elinden bir şey gelmeyince kabullenmek kolaydır.";
        r_text[15] = "Kim kazanmışki ben kazanacaktım seni bu şehri.";
        r_text[16] = "Bir hata, gözden kaçan bir söz; her şeyi kaybetmektir.";
        r_text[17] = "Delikanlı adamın silahı yüreğidir,oda tutukluk yapmaz..";
        r_text[18] = "Kiminle güldüğünü belki unutabilirsin,ama kiminle ağladığını asla!";
        r_text[19] = "Sadakat sır saklamak mıdır? Sessiz kalmak mıdır? Kıyametin kopacağını bile bile.";
        r_text[20] = "Kaygılanma çocuk, herkes ölür! Kimi toprağa, kimi yüreğe gömülür.";
        r_text[21] = "Herkesin bir geçmişi vardır, bir de geçmemişi.";
        r_text[22] = "Seni ölüme götürse de, doğrudan asla şaşmayacaksın.";
        r_text[23] = "Portakalı soymadan içinin iyi olup olmadığını anlayamazsın.";
        r_text[24] = "Bazen sevdiğin insanları korumanın tek yolu onlardan uzak durmaktır...";
        r_text[25] = "Gerçek niyetini kimse bilmeyecek.Kaderin sırrındır kaderini kimseyle paylaşmayacaksın...";
        r_text[26] = "Artık kaybedecek hiçbir şeyinin kalmaması, özgürlük olsa gerek.";
        r_text[27] = "Uykun gelmiyor diye gözlerini suçlama, Belkide o beklediğin uyku değildir.";
        r_text[28] = "Dön bak arkana yeğen. Gitmez” dediğin kaç kişi yanında?";
        r_text[29] = "Sen ağaç baltaya ne demiş bilirmisin kardeş? Ben senin beni kestiğine değil, sapının benden olduğuna üzülüyorum!";
   
        var i = Math.floor(30*Math.random())

        await message.client.sendMessage(message.jid,`*${r_text[i]}*`, MessageType.text);

    }));

    Asena.addCommand({pattern: 'no1$', fromMe: true, desc: NO}, (async (message, match) => {    

        var r_text = new Array ();
    
        r_text[0] = "Sokaklar tekin değil gezdim elim cebimde, rehberim rap içindeyim çemberin bir şekilde.";
        r_text[1] = "Susuzluğumu alkol dindirebilir.";
        r_text[2] = "Pes etmedim fakat herşey eskisinden farklı.";
        r_text[3] = "Mutlu gibi davranırım onun yüzü gülsün..";
        r_text[4] = "Hiçbi melek ölmez ama sen bi kere dirilmedin.";
        r_text[5] = "Çok umutlu görünmeyi inan çok unuttum.";
        r_text[6] = "Hangi tepeden bakarsan bak değişmez manzara.";
        r_text[7] = "Sikik düzenin içinde üzülmeye doyamadım.";
        r_text[8] = "Sesin kesilirse gözlerin anlatır mı herşeyi?";
        r_text[9] = "Hayatım kumar bayım, çok fazla zarardayım..";
        r_text[10] = "Kimseye anlatamadım derdimi.";
        r_text[11] = "Hiç ışık yok farkındayım...";
        r_text[12] = "Sikik hesaplar peşinde bütün bildiklerim.";
        r_text[13] = "Dinle sakın düşme dostum ışıkların peşine.";
        r_text[14] = "Kıyasla, bak aynaya kim daha çok hasta.";
        r_text[15] = "Yanlışım tamamda neden tek doğrunuz buydu?";
        r_text[16] = "Neler gerekliydi biraz gülümsemek için?";
        r_text[17] = "Sevdiğim her kadın öldü rakı masasında.";
        r_text[18] = "Sönüp giden tebessümü esrarla mı dirilttin?";
        r_text[19] = "Umutlarımı söndürüp ışıkları yaktım.";
        r_text[20] = "Dilenmeyi reddeden bi tinerciden dahası..";
        r_text[21] = "Masum bu ruhumda bıraktığın izler..";
        r_text[22] = "Biz öldük ama ben yaşıyorum.";
        r_text[23] = "Unutursun sevdiğine sarılmayı dayı.";
        r_text[24] = "Annem kafamda kırıcak elimdeki şişeyi.";
        r_text[25] = "Biz bu gece uyumadık gün size günaydı.";
        r_text[26] = "Ölmek için yaşamaktan daha çok çaba sarfettim.";
        r_text[27] = "Burda tramvay yok gençliğim travma.";
        r_text[28] = "Sonra öl ve hep rahat kal.";
        r_text[29] = "Herşey yolunda değil, sadece sen yolundasın.";
    
        var i = Math.floor(30*Math.random())

        await message.client.sendMessage(message.jid,`*${r_text[i]}*`, MessageType.text);

    }));

    Asena.addCommand({pattern: 'lia$', fromMe: true, desc: LİA}, (async (message, match) => {    

        var r_text = new Array ();
    
        r_text[0] = "Hiçkimsemiz yok aden.";
        r_text[1] = "Tanrım bu sürmeli sonsuza dek.";
        r_text[2] = "Değilim iyimser, olamam iyi de.";
        r_text[3] = "Çöküyor üzerime yine geceler.";
        r_text[4] = "Üzgünüm anne erken eve dönemem.";
        r_text[5] = "Çok uzağım evimden.";
        r_text[6] = "Hep benden bahseder bi numara dediklerin.";
        r_text[7] = "Alçaktan geliyorum bunu bilmelisiniz.";
        r_text[8] = "Dostlarım yanımdayken sınayın beni.";
        r_text[9] = "Baba bak yapıyorum senin gibi kariyer.";
        r_text[10] = "Diziyorum paraları sikik şehir labirent.";
        r_text[11] = "Merhaba orospu çocukları ölümsüzüm ben.";
        r_text[12] = "Beni bloklayamaz havalı kadınlar.";
        r_text[13] = "Uçuyoruz biz hala yakalayan yok.";
        r_text[14] = "Beni alt etmeye çalışma çünkü bi bok değilsin.";
        r_text[15] = "Eziklerle takılmam bi mücevher gibiyim.";
        r_text[16] = "Artık edemiyorum gecene eşlik.";
        r_text[16] = "Birileri geldi ve değiştin!";
        r_text[17] = "Bilmiyorum tüm gece ne içtim";
        r_text[18] = "Ben bi tek kendime yenildim.";
        r_text[19] = "Sen olduğun gibi değilsin bak.";
        r_text[20] = "Dostlarım oldukları gibi kalmadılar.";
        r_text[21] = "Söylesene çalışıyosun kim olmaya?";
        r_text[22] = "Bu sen değilsin inan!";
        r_text[23] = "Genç ölebilirim bak.";
        r_text[24] = "Kızım tut çekiyor aşk.";
        r_text[25] = "Aklımı kaybedemem bida.";
        r_text[26] = "Bi kez kendine dürüst ol mesela!";
        r_text[27] = "Git yalnız kalplerin içinde yaşa!";
        r_text[28] = "Hiç kimse sana ben gibi bakmaz..";
        r_text[29] = "Yıldızlar bizim için yağıyor düşmekten korkma.";
        r_text[30] = "Masal anlatma bana!";
        r_text[31] = "Heartbreaker";
        r_text[32] = "İhtiyacım olan bu değil..";
        r_text[33] = "Seni tanıyamıyorum hiç.";
        r_text[34] = "Önceden bi kalbe sahiptin.";
        r_text[35] = "Bir süre daha kal inan bana değilim kendimde.";
        r_text[36] = "Beraber başarabiliriz!";
        r_text[37] = "Bu kez kazanıyoruz tut elimden.";
        r_text[38] = "Bi an önce son hamleni yap.";
        r_text[39] = "İzin veriyorum oyun oynamana.";
        r_text[40] = "Kaygı dolu adamlara git şovunu yap!";
        r_text[41] = "Varmı içinde kalp?";
        r_text[42] = "Kızım başaramıcaksın vurulmayla ölmem!";
        r_text[43] = "Sen gidersen eğer hikayemiz yarım kalır.";
        r_text[44] = "Kaçamam bi sürü dert!";
        r_text[45] = "Bi kazananı yoksa niye savaşıyoruz?";
    
        var i = Math.floor(46*Math.random())

        await message.client.sendMessage(message.jid,`*${r_text[i]}*`, MessageType.text);

    }));

    Asena.addCommand({pattern: 'recep$', fromMe: true, desc: REC}, (async (message, match) => {    

        var r_text = new Array ();
    
        r_text[0] = "Ekinler baş vermeden kör buzağı topallamazmış.";
        r_text[1] = "Hocam sana gafam girsin.";
        r_text[2] = "Hepimiz kalorilerimizi yakalım, göbeklerden kurtulalım.";
        r_text[3] = "Ne bahıyon?";
        r_text[4] = "en suya düşsen hiç batmazsın biliyo musun. Neden, çünkü senin tipin kayık.";
        r_text[5] = "Bu ne saçma hayat, bu ne serkeş hayat, bu ne dingil hayat ya? Bu ne kopuk hayat, bu ne manyak yaşam tarzı ya, bu ne bohemi ya?";
        r_text[6] = "Gonuşma lan!";
        r_text[7] = "Kadının yaşı, erkeğin maaşı sorulmaz koçuum. Biraz yol yordam öğren dingil!";
        r_text[8] = "Sende sinsilik var yanıma 5 metreden fazla yakalaşma!";
        r_text[9] = "Senin içine bi şey kaçmış yavrum, ortasında i harfi var.";
        r_text[10] = "Aç şu camı mamı, bu ne kokuyo, apuş arası kokuyo resmen ya.";
        r_text[11] = "Nedir senin derdin arkadaşım? Kafan mı iyi anlamadım ki!";
        r_text[12] = "Agrasifim, kompleksliyim!";
        r_text[13] = "Uyudum sandın değil mi buhoo buhoo..";
        r_text[14] = "Kan görüyorum hocam vahşet görüyorum şakak kemiğinden girmiş levye görüyorum hocam, levye hocam adamın şakak kemiğinden girmiş hocam.";
        r_text[15] = "Benim canım yanmaz gardaşşş..";
        r_text[16] = "Bundan sonra bu kafilenin başkanı benim.";
        r_text[17] = "Bu internet aleminde çoh garı gız var diyolar doğru mu?";
        r_text[18] = "Laf sokarım derinden aklın oynar yerinden.";
        r_text[19] = "Lan ikiz dingiller, o dilini gopartırım senin.";
        r_text[20] = "Problem nedir gardaş? Hıı Takaşi Hiroşi Mahat hı. Nedir la sizin derdiniz geldiniz burda artislik mi yapıyonguz?";
        r_text[22] = "Acı macı bize işler mi bacı ya?";
    
        var i = Math.floor(23*Math.random())

        await message.client.sendMessage(message.jid,`*${r_text[i]}*`, MessageType.text);

    }));

    Asena.addCommand({pattern: 'sifir1$', fromMe: true, desc: SİF}, (async (message, match) => {    

        var r_text = new Array ();
    
        r_text[0] = "Yaptıklarm icin pişman deyilim haa aklım hala yapmadıklarımda!";
        r_text[1] = "Hodri meydan biloocan.";
        r_text[2] = "Niye sıktın lan çocuğun bacağına icab eder mi Özgür?";
        r_text[3] = "Siktir git! Bu saatten sonra tekerlekli sandalyeyle gez.";
        r_text[4] = "Ne bakıyon lan gevşek!";
        r_text[5] = "Değişirse kahrolim ya, onlar da bizim gibi etten kemikten deel mi?";
        r_text[6] = "Öleceğiz diye gülmeyek mi?";
        r_text[7] = "Abilerin konuşurken lafa girme, tamam?";
        r_text[8] = "İhanet eden sadakat beklemesin bab ba.";
        r_text[9] = "Yapılan her kahpeliğe bir mermi borcumuz olsun.";
        r_text[10] = "Mutsuz insanları ayakta tutan tek şey hayalleridir.";
        r_text[11] = "Bah hele lan yavşağa orjin rayban takıyor.";
        r_text[10] = "Sevdikten sonra dili, dini ne fark eder ana.";
        r_text[13] = "Ya akar kanımız kaldırım taşlarına ya da teneşir paklar artık sizi.";
        r_text[14] = "Cio ölme ha!";
        r_text[15] = "Selamun aleyküm var mı bi şeyler?";
        r_text[16] = "Az dan Az Gider Çoktan Çok Gider!";
        r_text[17] = "Gidere gider değil alayına gider.";
        r_text[18] = "Lan ben doğma büyüme Adanalıyım, ne demek soğuk duruyorsun!";
        r_text[19] = "Senin yaptığın atar, benim hayatıma renk katar be güzelim!";
        r_text[20] = "Bu aşkı ikiye bölersek, sana eyvah düşer, bana eyvallah!";
        r_text[21] = "Biz ne ateşler gördük suyu görünce korkan, rüzgarı görünce cesaret alan, her ikisi de gidince kendi kendine sönen!";
        r_text[22] = "Sağır olan tek organ kulaklar değildir. Bilirim kulaktan geçen onca söz kalbe geçmez kimi zaman!";
        r_text[23] = "Benim sürdüğüm hayatın geri vitesi yok.";
        r_text[24] = "Farkımız efendi olmak, delikanlı olmak farzımız.";
        r_text[25] = "Her ne kadar kabadayılıkta gözüm olmasa da, dalımı kıranın ağacını kökten sökmesini iyi bilirim.";
        r_text[26] = "Bana yapacağın gider en fazla hoşuma gider.";
        r_text[27] = "Suskunluğumu hаfife аlmа konuşursаm аğır gelir kаldırаmаzsın.";
    
        var i = Math.floor(28*Math.random())

        await message.client.sendMessage(message.jid,`*${r_text[i]}*`, MessageType.text);

    }));

    Asena.addCommand({pattern: 'genişaile$', fromMe: true, desc: GEN}, (async (message, match) => {    

        var r_text = new Array ();
    
        r_text[0] = "Allah’ın var ettiği kulu sen nasıl yok yazarsın hocaa!";
        r_text[1] = "Başınız sağ olsun, ölüm işte. Geldi mi direkt öldürüyor!";
        r_text[2] = "Vay arkadaş! Bizdeki kader Çin Malı mıdır? Ben anlamadım ki!";
        r_text[3] = "Giyinikken ayrı çekiciyim, çıplakken imdat çekiciyim.";
        r_text[4] = "Cuma namazını çok kalabalık diye pazar günü kılan Ulvi.";
        r_text[5] = "Yağmurlu havada bahçe sulayan Ulvi";
        r_text[6] = "Adam gibi çayını iç sonra ortaokulu 2. sınıftan terk ettiğin gibi terket burayı.";
        r_text[7] = "Sana şimdi çok pis dalarım amma aramızda müthiş bi aşk doğar diye korkuyorum.";
        r_text[8] = "Sana benim gözümle bakıcak adamın aklını kırarım lan!";
    
        var i = Math.floor(9*Math.random())

        await message.client.sendMessage(message.jid,`*${r_text[i]}*`, MessageType.text);

    }));
}
else if (wk.WORKTYPE == 'public') {
    Asena.addCommand({pattern: 'kuzey$', fromMe: false, desc: kuz}, (async (message, match) => {    

        var r_text = new Array ();
              
        r_text[0] = "*Lan manyağaam* 😠";
        r_text[1] = "*O Ferhata söyle benim manyak olduğumu unutmasın*";
        r_text[2] = "*Ayıp değil mi lan utanmıyor musunuz ferhat abinizin mektubunu okumaya* ?";
        r_text[3] = "*Gel, gel buraya gel, senle şöyle bir konuşalım gel*";
        r_text[4] = "*Gel, gel şöyle gel*";
        r_text[5] = "*Bekle ecelin geliyor beklee.*";
        r_text[6] = "*Geri bas lan!*";
        r_text[7] = "*Gecem sen ol istiyorum gündüzüm sen ol istiyorum.*";
        r_text[8] = "*Simay benim karım lan!*";
        r_text[9] = "*Neye bakıyon lan kurabiye var simit var neye bakıyon?*";
        r_text[10] = "*Merak etme baba.*";
        r_text[11] = "*Gel aslan gel.*";
        r_text[12] = "*Kırarım belini.*";
        r_text[13] = "*Bi sıkıntı yok merak etme.*";
        r_text[14] = "*Ayıbın kolları kayıp.*";
        r_text[15] = "*Senin o bıyığını sikecem ben ama sen rahat ol*";
        r_text[16] = "*Kardeşimin emaneti lan o.. Namusum o lan benim!*";
        r_text[17] = "*Demet yetmedi, Simayı da mı sıraya koydun lan*";
        r_text[18] = "*Sana sırtımı döndüm lan ben! Düşmanım yapmadı senin yaptığını şerefsiz*!..";
        r_text[19] = "*Tırnaksız.*";
        r_text[20] = "*Maraba.*";
        r_text[21] = "*Caz yapma skerim belanı*";
        r_text[22] = "*Amk zıbzıbı*";
        r_text[23] = "*Keçii*";
        r_text[24] = "*Aliiğğğ*";
        r_text[25] = "*Te Allahım ya*";
        r_text[26] = "*Panda panda*";
        r_text[27] = "*Sırıtma lan*";
        r_text[28] = "*Ne yaylana yaylana konuşuyon yarram*";
        r_text[29] = "*Lan Farat*";
        r_text[30] = "*Benim için önemli lan benim için önemli!*";
        r_text[31] = "*Aleykümselaaaam aleykümselam*";
        r_text[32] = "*Olum soğuk lan burası*";
        r_text[33] = "*Al o parayı dür bük, ananın amına sok*";
        r_text[34] = "*Lan Manyağaam!*";
        r_text[35] = "*Ferad ananı siktim ferad*";
        r_text[36] = "*Bak güney, bak tırnaksız. seni daha taze dövdüm. senin ağzını burnunu kırarım laflarına dikkat et*";
        r_text[37] = "*Çok mutluyum. çünkü seni tamamen çıkardım attım aklımdan. rüyalarımdan bile çıkardım.*";
        r_text[38] = "*Ya ananı avradını sikiyim burdayım, görmüyon mu?*";
        r_text[39] = "*Beni dinle bak, benim belki ağzım bozuk olabilir ama içim tertemiz!*";
   
        var i = Math.floor(40*Math.random())

        await message.client.sendMessage(message.jid,`${r_text[i]}`, MessageType.text);

    }));

    Asena.addCommand({pattern: 'kardes$', fromMe: false, desc: kar}, (async (message, match) => {    

        var r_text = new Array ();

        r_text[0] = "*Ulan milletin babası sabahın köründe kalkar 4 rekât namaz… Hadi bizimkisi sünneti kılmasın 2 rekât namaz eda eder. Bizimkisi kim bilir neyin peşinde abi.*";
        r_text[1] = "*Bir senin gülümsemen, bir de boş metrobüs koltuğu.*";
        r_text[2] = "*Bu neymiş bee allah belanızı versin! bu ne olum sen manyak mısın sen bunları nasıl yedin petito sen tesisatçılığı bırak git game of thrones a ejderha yazıl metin!*";
        r_text[3] = "*Sen zaten faydalı birşey olsaydın ben seni vücudumdan atmazdım.*";
        r_text[4] = "*Eda seni ilk gördüm dedim ki; ulan ne karılar var beee!*";
        r_text[5] = "*Aaa! bu benim canım, ciğerim, kirvem metin değil mi ya o?*";
        r_text[6] = "*Allah belanı versin. Senin tipini sikeyim ben geldi yine orrspuu çocuğuu.*";
        r_text[7] = "*Eğer böyle fikirlerin varsa ve paran yoksa deli diyorlar; paran varsa girişimci oluyorsun. bir de böyle düşün.*";
        r_text[8] = "*Amca senin ben *mına koyiyim, elim ayağım birbirine dolaştı, çalsana kapıyı!*";
        r_text[9] = "*Sana oksijen veren ağacın yaprağını sikeyim*";
        r_text[10] = "*Sana kuvvet uygulayan yerin çekimini sikeyim*";
        r_text[11] = "*Ne kadar teklif etmişler? Koy amına sat gitsin. Sat, sat, sat, sat, sat koy amına!*";
        r_text[12] = "*Dalağını sikerim senin ha!*";
        r_text[13] = "*Off, seveydi iyiydi yaa!*";
        r_text[14] = "*Bak bak, benimle konuşurken yüzüme bakın azcık ya";
        r_text[15] = "*Ölünüzü yıkayan imam putperest olur yeminle*";
        r_text[16] = "*No Woman, No Cry; Yani kadınım söyle hiç mutlu oldun mu, bu deli yiğidoyu unuttun mu?*";
        r_text[17] = "*Ulan Sasha Greye döndük ağzımızda bi sex topu eksik*";
        r_text[18] = "*Abicim gözünün çapağını yiyeyim, 8 tane kardeşim yurtdışında okutuyorum*...";
        r_text[19] = "*Benim Danimarka prensesi ile bizzat oturup kaşarlı dürüm gömmüşlüğüm var*.";
        r_text[20] = "*Herifin geçmişi bir ergenin internet geçmişinden bile kirli. History’i sil seçeneğine tıklıyorum bilgisayar kasılıyor.*";
        r_text[21] = "*Oha adam ışınlanmayı buldu.*";
        r_text[22] = "*Ben ilk defa dansöz görücem, bu para takma olayını bana bir anlatsanız*..";
        r_text[23] = "*Senin gibi abim olsa genlerime küserim, anama babama hakaret davası açarım. Çık git lan burdan çık git!*";
        r_text[24] = "*Her zaman senin de dediğin gibi, “happy birthday to you, gansta.” Yani “sana gelmediğim gün, öldüğüm gündür gülüm.*";
        r_text[25] = "*İstiyorum amına koyayım sanane!*";
        r_text[26] = "*benim aylık gelirim tamı tamına 100 lira. Giderlerim ise sadece 98 lira 78 kuruş. Benim bu hayatta kaybedecek hiçbir şeyim yok. Beni bu hayata bağlayan bişey de yok.*";

        var i = Math.floor(27*Math.random())

        await message.client.sendMessage(message.jid,`${r_text[i]}`, MessageType.text);

    }));

    Asena.addCommand({pattern: 'doktor$', fromMe: false, desc: dok}, (async (message, match) => {    

        var r_text = new Array ();
    
        r_text[0] = "Bir tek sen güldün ne güzel güldün...";
        r_text[1] = "Bana sarılamasan da ellerimi tutamasan da gözlerimin içine bakamasan da, varım ben.";
        r_text[2] = "Hayat bazı kararsızlıklar için çok kısa.";
        r_text[3] = "Bi kere kaybettim abimi ,bi daha mı kaybedecem,yazık  değil mi bana?";
        r_text[4] = "Bazı insanlar bu dünyaya şifa olmak için gelir.";
        r_text[5] = "Dur, koşma koşma dur. Koş lan.";
        r_text[6] = "Sen benim hayatımda tanıdığım en yaratıcı, en akıllı adamsın";
        r_text[7] = "Başkalarının kalbini anlıyorum ama kendi kalbime bir çare bulamıyorum.";
        r_text[8] = "Bir gittim hoop öptü ben artık kimseye dokunamam";
        r_text[9] = "Sevmek dokunmakmıdır?";
        r_text[10] = "Tutardım bana dokunan eli. Sımsıkı tutardım. Bırakmazdım";
        r_text[11] = "Korksak da ağlasak da kendi ayaklarımız üzerinde duracağız düşeceğiz ama kalkacağız büyüyeceğiz...";
        r_text[12] = "Beraber alışalım mı?";
        r_text[13] = "Olan oldu hiçbir şeyi değiştiremem ki";
        r_text[14] = "Çok etkili bi konuşma yaptım galiba";
        r_text[15] = "Aynı, kar yağdığında zıplayan köpek yavrusu gibi. Siz onun mutluluktan zıpladığını sanırsınız ama o ayakları üşüdüğü için zıplar...";
        r_text[16] = "İnsanlar hayallerine tutunmalı.";
        r_text[17] = "Göz bebeklerim büyüyor. Avuçlarım terli. Eyvah!!!";
        r_text[18] = "Müthiş!";
        r_text[19] = "Çocuk!";  
        r_text[20] = "Sen beni mutlu edicek bir şey yaptın. Ben seni mutlu edicek bir şey yaptım. Şimdi sıra sende";
        r_text[21] = "Birini çok sevince, öldü diye unutamazsın onu.";
        r_text[22] = "Bana napmış olursan ol ben senin canını acıtamam.";
        r_text[23] = "İkinci bir şans. Ne kadar kullanıyorsunuz bu lafı.. Herkes ikinci bir şansın peşinde ama kimse birinciyi düzeltmeye çalışmıyor."; 
        r_text[24] = "Söyle bakalım ne yapabilirim senin hayatını kolaylaştırmak için?";
        r_text[25] = "Eğer istersen her şeyi başarabilirsin!";
        r_text[26] = "İnsanları dinle ama imkansıza da inan.";
        r_text[27] = "Yaşamımız boyunca 95 litre gözyaşı dökeriz, daha çok var ağlayabilirsin";
    
        var i = Math.floor(28*Math.random())

        await message.client.sendMessage(message.jid,`*${r_text[i]}*`, MessageType.text);

    }));

    Asena.addCommand({pattern: 'got$', fromMe: false, desc: GOT}, (async (message, match) => {    

        var r_text = new Array ();
    
        r_text[0] = "Güçlüler, her zaman güçsüzü avlamıştır. En başından bu şekilde güçlü olmuşlardır.";
        r_text[1] = "Bir daha bana kız kardeşim dersen seni uykunda boğdurturum.";
        r_text[2] = "Sana bir tavsiye vereyim, piç. Ne olduğunu asla unutma. Dünyanın geri kalanı unutmayacak. Onu zırh gibi giy, böylece seni incitmek için kullanamasınlar.";
        r_text[3] = "Benim işim bu. İçerim ve bir şeyler bilirim.";
        r_text[4] = "Bir aslan, bir koyunun düşünceleriyle kendini meşgul etmez.";
        r_text[5] = "Güç, insanlar nerede olduğuna inanıyorsa orada bulunur. Bu bir aldatmaca. Duvardaki bir gölge. Ve küçücük bir adam, kocaman bir gölge yaratır.";
        r_text[6] = "Bana bir daha elini kaldırdığın an, bu ellerini son görüşün olur.";
        r_text[7] = "Kaos bir çukur değil. Kaos bir merdiven. Tırmanmaya çalışan çoğu başarısız olur ve bir daha deneme fırsatı olmaz. Düşüş onları yıkar. Kimisine tırmanma fırsatı verilir; onlar da ya gerçeğe ya tanrılara ya da sevgiye tutunur. Yalnızca merdiven gerçektir. Ortada olan tek şey tırmanıştır.";
        r_text[8] = "Tahtların oyununu oynadığında, ya kazanırsın ya da ölürsün.";
        r_text[9] = "Baratheon Hanesinden Renlynin adına, isminin birincisi, Andalların ve İlk İnsanların gerçek kralı, Yedi Krallık Lordu ve ülkenin koruyucusu, ben, Brienne of Tarth, seni ölüme mahkum ediyorum.";
        r_text[10] = "Bunun mutlu sona ulaşacağını düşünüyorsan dikkatini yeteri kadar vermemişsin demektir.";
        r_text[11] = "Nasıl bir kılıcın bileme taşına ihtiyacı varsa bir aklın da kitaplara ihtiyacı var. Bu yüzden bu kadar çok okuyorum.";
        r_text[12] = "Kış Geliyoor";
        r_text[13] = "Aşk için yaptığım şeyler...";
        r_text[14] = "Gece karanlık ve dehşetle dolu!";
        r_text[15] = "Yalnızca bir tanrı var ve adı Ölüm. Ölüme tek bir şey söyleyebiliriz, o da Bugün değil.";
        r_text[16] = "İyi sıçmalar";
        r_text[17] = "Fuck The King";
        r_text[18] = "Kuzey Unutmaz!";
     
        var i = Math.floor(19*Math.random())

        await message.client.sendMessage(message.jid,`*${r_text[i]}*`, MessageType.text);

    }));

    Asena.addCommand({pattern: 'cod$', fromMe: false, desc: COD}, (async (message, match) => {    

        var r_text = new Array ();
    
        r_text[0] = "Whoever said the pen is mightier than the sword obviously never encountered automatic weapons.";
        r_text[1] = "In war, Truth is the first casaulty!";
        r_text[2] = "When the pin is pulled, Mr Grenade is not our friend.";
        r_text[3] = "If the enemy is in range, So are you.";
        r_text[4] = "If Your attack is going too well, you are walking into anambush.";
        r_text[5] = "All wars are civil wars, because all men are brothers...";
        r_text[6] = "Nobody makes the first jump";
        r_text[7] = "Bravo Six, Going Dark";
        r_text[8] = "Never in the field of human conflict was so much owed by so many to so few.";
        r_text[9] = "We didnt come here to lose!";
        r_text[10] = "Good job team!";
        r_text[11] = "We’ve taken the lead!";
        r_text[12] = "Were in danger of losing this one!";
    
        var i = Math.floor(13*Math.random())

        await message.client.sendMessage(message.jid,`*${r_text[i]}*`, MessageType.text);

    }));

    Asena.addCommand({pattern: 'zula$', fromMe: false, desc: ZUL}, (async (message, match) => {    

        var r_text = new Array ();
    
        r_text[0] = "Kasap!";
        r_text[1] = "Seri Katil!";
        r_text[2] = "Kelle Avcısı!";
        r_text[3] = "İntikam!";
        r_text[4] = "Aranıyorsun!";
        r_text[5] = "Tam Kafadan!";
        r_text[6] = "Hadi hadi hadi!";
        r_text[7] = "Zula Kazandı!";
        r_text[8] = "Gladyo Kazandı!";
        r_text[9] = "İki Kişi!";
        r_text[10] = "Üç Kişi!";
        r_text[11] = "Keskin Nişancı!";
        r_text[12] = "Bomba İmha Edildi!";
        r_text[13] = "Güzel Atış!";
        r_text[14] = "Bomba Kuruldu!";
        r_text[15] = "Lider Katili!";
        r_text[16] = "Son Saniye!";
        r_text[17] = "Tek kişi kaldı!";
        r_text[18] = "Hazırlan!";
        r_text[19] = "bombaa!";
    
        var i = Math.floor(20*Math.random())

        await message.client.sendMessage(message.jid,`*${r_text[i]}*`, MessageType.text);

    }));

     Asena.addCommand({pattern: 'lol$', fromMe: false, desc: LOL}, (async (message, match) => {    

        var r_text = new Array ();
    
        r_text[0] = "_Bir rakip katledildi!_";
        r_text[1] = "_Takımından biri katledildi..._";
        r_text[2] = "İKİDE İKİ!";
        r_text[3] = "Rakip ikiledi !";
        r_text[4] = "ÜÇTE ÜÇÇ !!!";
        r_text[5] = "_Rakip üçledi... 😔_";
        r_text[6] = "_💥💢DÖRRTTTE DÖÖRTT !!!😱🔥_";
        r_text[7] = "_Rakip DÖRTLEDİ !_";
        r_text[8] = "🔥🔥💨 _B E Ş T E BEEEEŞŞŞŞŞ_ 💥👆🏻🌪️⚡";
        r_text[9] = "_...katliam_";
        r_text[10] = " _Minyonların harekete geçmesine 30 saniye... 🦔🐣🐥_";
        r_text[11] = "_☠️🔮😈RUUUHUN BENİM OLUUCAAAAK :) 😈🔮☠️_";
    
        var i = Math.floor(12*Math.random())

        await message.client.sendMessage(message.jid,`*${r_text[i]}*`, MessageType.text);

    }));

    Asena.addCommand({pattern: 'ramiz$', fromMe: false, desc: RAM}, (async (message, match) => {    

        var r_text = new Array ();
    
        r_text[0] = "Bazı insanları kırmak gerekir yeğen, aslında kim olduklarını görmek için...";
        r_text[1] = "Acı çekmiş hiç kimse, artık eskisi gibi değildir.";
        r_text[2] = "Bir insanı yalanlarla kazanmak yerine, doğrularla kaybetmeyi tercih ederim.";
        r_text[3] = "Ağlaya ağlaya geldiğin dünyada, güle oynaya yaşayacağını mı sandın yeğen?";
        r_text[4] = "Bazen sırf hayatımızda kalmalarını istediğimiz için insanları affedersiniz.";
        r_text[5] = "Ben senin için boşa kürek çektiğimi, sen bir başka bir gemiye bindiğinde de anladım.";
        r_text[6] = "Oyunun sonuna geldiğinde, çoktan tükenmiştir gidecek olduğun yerlerin.";
        r_text[7] = "Öldürmek için gelen öldürmeden dönebilir ama ölmek için gelen... Ölmeden dönmez.";
        r_text[8] = "Yaptıkları ile küçülenler, laflarıyla büyüdüklerini sanmasınlar.";
        r_text[9] = "Seni önceden saçma sapan sevmişler Selma benimkisi ağır geldi tabi...";
        r_text[10] = "Sözler verilir sözler unutulur ama gün gelir ihanet eden sadakat ister.";
        r_text[11] = "Ara sıra kenara çekilip seyretmek lazım yeğen… Bakmak lazım kimde ne kadarız ve kim bizde ne kadar...";
        r_text[12] = "Bir insan ne kadar merhametliyse o kadar kazık yer yeğen.";
        r_text[13] = "Daha önce acı çekmiş biriyle birlikte olun. Çünkü onlar mutluluğun değerini daha iyi bilirler.";
        r_text[14] = "Elinden bir şey gelmeyince kabullenmek kolaydır.";
        r_text[15] = "Kim kazanmışki ben kazanacaktım seni bu şehri.";
        r_text[16] = "Bir hata, gözden kaçan bir söz; her şeyi kaybetmektir.";
        r_text[17] = "Delikanlı adamın silahı yüreğidir,oda tutukluk yapmaz..";
        r_text[18] = "Kiminle güldüğünü belki unutabilirsin,ama kiminle ağladığını asla!";
        r_text[19] = "Sadakat sır saklamak mıdır? Sessiz kalmak mıdır? Kıyametin kopacağını bile bile.";
        r_text[20] = "Kaygılanma çocuk, herkes ölür! Kimi toprağa, kimi yüreğe gömülür.";
        r_text[21] = "Herkesin bir geçmişi vardır, bir de geçmemişi.";
        r_text[22] = "Seni ölüme götürse de, doğrudan asla şaşmayacaksın.";
        r_text[23] = "Portakalı soymadan içinin iyi olup olmadığını anlayamazsın.";
        r_text[24] = "Bazen sevdiğin insanları korumanın tek yolu onlardan uzak durmaktır...";
        r_text[25] = "Gerçek niyetini kimse bilmeyecek.Kaderin sırrındır kaderini kimseyle paylaşmayacaksın...";
        r_text[26] = "Artık kaybedecek hiçbir şeyinin kalmaması, özgürlük olsa gerek.";
        r_text[27] = "Uykun gelmiyor diye gözlerini suçlama, Belkide o beklediğin uyku değildir.";
        r_text[28] = "Dön bak arkana yeğen. Gitmez” dediğin kaç kişi yanında?";
        r_text[29] = "Sen ağaç baltaya ne demiş bilirmisin kardeş? Ben senin beni kestiğine değil, sapının benden olduğuna üzülüyorum!";
   
        var i = Math.floor(30*Math.random())

        await message.client.sendMessage(message.jid,`*${r_text[i]}*`, MessageType.text);

    }));

    Asena.addCommand({pattern: 'no1$', fromMe: false, desc: NO}, (async (message, match) => {    

        var r_text = new Array ();
    
        r_text[0] = "Sokaklar tekin değil gezdim elim cebimde, rehberim rap içindeyim çemberin bir şekilde.";
        r_text[1] = "Susuzluğumu alkol dindirebilir.";
        r_text[2] = "Pes etmedim fakat herşey eskisinden farklı.";
        r_text[3] = "Mutlu gibi davranırım onun yüzü gülsün..";
        r_text[4] = "Hiçbi melek ölmez ama sen bi kere dirilmedin.";
        r_text[5] = "Çok umutlu görünmeyi inan çok unuttum.";
        r_text[6] = "Hangi tepeden bakarsan bak değişmez manzara.";
        r_text[7] = "Sikik düzenin içinde üzülmeye doyamadım.";
        r_text[8] = "Sesin kesilirse gözlerin anlatır mı herşeyi?";
        r_text[9] = "Hayatım kumar bayım, çok fazla zarardayım..";
        r_text[10] = "Kimseye anlatamadım derdimi.";
        r_text[11] = "Hiç ışık yok farkındayım...";
        r_text[12] = "Sikik hesaplar peşinde bütün bildiklerim.";
        r_text[13] = "Dinle sakın düşme dostum ışıkların peşine.";
        r_text[14] = "Kıyasla, bak aynaya kim daha çok hasta.";
        r_text[15] = "Yanlışım tamamda neden tek doğrunuz buydu?";
        r_text[16] = "Neler gerekliydi biraz gülümsemek için?";
        r_text[17] = "Sevdiğim her kadın öldü rakı masasında.";
        r_text[18] = "Sönüp giden tebessümü esrarla mı dirilttin?";
        r_text[19] = "Umutlarımı söndürüp ışıkları yaktım.";
        r_text[20] = "Dilenmeyi reddeden bi tinerciden dahası..";
        r_text[21] = "Masum bu ruhumda bıraktığın izler..";
        r_text[22] = "Biz öldük ama ben yaşıyorum.";
        r_text[23] = "Unutursun sevdiğine sarılmayı dayı.";
        r_text[24] = "Annem kafamda kırıcak elimdeki şişeyi.";
        r_text[25] = "Biz bu gece uyumadık gün size günaydı.";
        r_text[26] = "Ölmek için yaşamaktan daha çok çaba sarfettim.";
        r_text[27] = "Burda tramvay yok gençliğim travma.";
        r_text[28] = "Sonra öl ve hep rahat kal.";
        r_text[29] = "Herşey yolunda değil, sadece sen yolundasın.";
    
        var i = Math.floor(30*Math.random())

        await message.client.sendMessage(message.jid,`*${r_text[i]}*`, MessageType.text);

    }));

    Asena.addCommand({pattern: 'lia$', fromMe: false, desc: LİA}, (async (message, match) => {    

        var r_text = new Array ();
    
        r_text[0] = "Hiçkimsemiz yok aden.";
        r_text[1] = "Tanrım bu sürmeli sonsuza dek.";
        r_text[2] = "Değilim iyimser, olamam iyi de.";
        r_text[3] = "Çöküyor üzerime yine geceler.";
        r_text[4] = "Üzgünüm anne erken eve dönemem.";
        r_text[5] = "Çok uzağım evimden.";
        r_text[6] = "Hep benden bahseder bi numara dediklerin.";
        r_text[7] = "Alçaktan geliyorum bunu bilmelisiniz.";
        r_text[8] = "Dostlarım yanımdayken sınayın beni.";
        r_text[9] = "Baba bak yapıyorum senin gibi kariyer.";
        r_text[10] = "Diziyorum paraları sikik şehir labirent.";
        r_text[11] = "Merhaba orospu çocukları ölümsüzüm ben.";
        r_text[12] = "Beni bloklayamaz havalı kadınlar.";
        r_text[13] = "Uçuyoruz biz hala yakalayan yok.";
        r_text[14] = "Beni alt etmeye çalışma çünkü bi bok değilsin.";
        r_text[15] = "Eziklerle takılmam bi mücevher gibiyim.";
        r_text[16] = "Artık edemiyorum gecene eşlik.";
        r_text[16] = "Birileri geldi ve değiştin!";
        r_text[17] = "Bilmiyorum tüm gece ne içtim";
        r_text[18] = "Ben bi tek kendime yenildim.";
        r_text[19] = "Sen olduğun gibi değilsin bak.";
        r_text[20] = "Dostlarım oldukları gibi kalmadılar.";
        r_text[21] = "Söylesene çalışıyosun kim olmaya?";
        r_text[22] = "Bu sen değilsin inan!";
        r_text[23] = "Genç ölebilirim bak.";
        r_text[24] = "Kızım tut çekiyor aşk.";
        r_text[25] = "Aklımı kaybedemem bida.";
        r_text[26] = "Bi kez kendine dürüst ol mesela!";
        r_text[27] = "Git yalnız kalplerin içinde yaşa!";
        r_text[28] = "Hiç kimse sana ben gibi bakmaz..";
        r_text[29] = "Yıldızlar bizim için yağıyor düşmekten korkma.";
        r_text[30] = "Masal anlatma bana!";
        r_text[31] = "Heartbreaker";
        r_text[32] = "İhtiyacım olan bu değil..";
        r_text[33] = "Seni tanıyamıyorum hiç.";
        r_text[34] = "Önceden bi kalbe sahiptin.";
        r_text[35] = "Bir süre daha kal inan bana değilim kendimde.";
        r_text[36] = "Beraber başarabiliriz!";
        r_text[37] = "Bu kez kazanıyoruz tut elimden.";
        r_text[38] = "Bi an önce son hamleni yap.";
        r_text[39] = "İzin veriyorum oyun oynamana.";
        r_text[40] = "Kaygı dolu adamlara git şovunu yap!";
        r_text[41] = "Varmı içinde kalp?";
        r_text[42] = "Kızım başaramıcaksın vurulmayla ölmem!";
        r_text[43] = "Sen gidersen eğer hikayemiz yarım kalır.";
        r_text[44] = "Kaçamam bi sürü dert!";
        r_text[45] = "Bi kazananı yoksa niye savaşıyoruz?";
    
        var i = Math.floor(46*Math.random())

        await message.client.sendMessage(message.jid,`*${r_text[i]}*`, MessageType.text);

    }));

    Asena.addCommand({pattern: 'recep$', fromMe: false, desc: REC}, (async (message, match) => {    

        var r_text = new Array ();
    
        r_text[0] = "Ekinler baş vermeden kör buzağı topallamazmış.";
        r_text[1] = "Hocam sana gafam girsin.";
        r_text[2] = "Hepimiz kalorilerimizi yakalım, göbeklerden kurtulalım.";
        r_text[3] = "Ne bahıyon?";
        r_text[4] = "en suya düşsen hiç batmazsın biliyo musun. Neden, çünkü senin tipin kayık.";
        r_text[5] = "Bu ne saçma hayat, bu ne serkeş hayat, bu ne dingil hayat ya? Bu ne kopuk hayat, bu ne manyak yaşam tarzı ya, bu ne bohemi ya?";
        r_text[6] = "Gonuşma lan!";
        r_text[7] = "Kadının yaşı, erkeğin maaşı sorulmaz koçuum. Biraz yol yordam öğren dingil!";
        r_text[8] = "Sende sinsilik var yanıma 5 metreden fazla yakalaşma!";
        r_text[9] = "Senin içine bi şey kaçmış yavrum, ortasında i harfi var.";
        r_text[10] = "Aç şu camı mamı, bu ne kokuyo, apuş arası kokuyo resmen ya.";
        r_text[11] = "Nedir senin derdin arkadaşım? Kafan mı iyi anlamadım ki!";
        r_text[12] = "Agrasifim, kompleksliyim!";
        r_text[13] = "Uyudum sandın değil mi buhoo buhoo..";
        r_text[14] = "Kan görüyorum hocam vahşet görüyorum şakak kemiğinden girmiş levye görüyorum hocam, levye hocam adamın şakak kemiğinden girmiş hocam.";
        r_text[15] = "Benim canım yanmaz gardaşşş..";
        r_text[16] = "Bundan sonra bu kafilenin başkanı benim.";
        r_text[17] = "Bu internet aleminde çoh garı gız var diyolar doğru mu?";
        r_text[18] = "Laf sokarım derinden aklın oynar yerinden.";
        r_text[19] = "Lan ikiz dingiller, o dilini gopartırım senin.";
        r_text[20] = "Problem nedir gardaş? Hıı Takaşi Hiroşi Mahat hı. Nedir la sizin derdiniz geldiniz burda artislik mi yapıyonguz?";
        r_text[22] = "Acı macı bize işler mi bacı ya?";
    
        var i = Math.floor(23*Math.random())

        await message.client.sendMessage(message.jid,`*${r_text[i]}*`, MessageType.text);

    }));

    Asena.addCommand({pattern: 'sifir1$', fromMe: false, desc: SİF}, (async (message, match) => {    

        var r_text = new Array ();
    
        r_text[0] = "Yaptıklarm icin pişman deyilim haa aklım hala yapmadıklarımda!";
        r_text[1] = "Hodri meydan biloocan.";
        r_text[2] = "Niye sıktın lan çocuğun bacağına icab eder mi Özgür?";
        r_text[3] = "Siktir git! Bu saatten sonra tekerlekli sandalyeyle gez.";
        r_text[4] = "Ne bakıyon lan gevşek!";
        r_text[5] = "Değişirse kahrolim ya, onlar da bizim gibi etten kemikten deel mi?";
        r_text[6] = "Öleceğiz diye gülmeyek mi?";
        r_text[7] = "Abilerin konuşurken lafa girme, tamam?";
        r_text[8] = "İhanet eden sadakat beklemesin bab ba.";
        r_text[9] = "Yapılan her kahpeliğe bir mermi borcumuz olsun.";
        r_text[10] = "Mutsuz insanları ayakta tutan tek şey hayalleridir.";
        r_text[11] = "Bah hele lan yavşağa orjin rayban takıyor.";
        r_text[10] = "Sevdikten sonra dili, dini ne fark eder ana.";
        r_text[13] = "Ya akar kanımız kaldırım taşlarına ya da teneşir paklar artık sizi.";
        r_text[14] = "Cio ölme ha!";
        r_text[15] = "Selamun aleyküm var mı bi şeyler?";
        r_text[16] = "Az dan Az Gider Çoktan Çok Gider!";
        r_text[17] = "Gidere gider değil alayına gider.";
        r_text[18] = "Lan ben doğma büyüme Adanalıyım, ne demek soğuk duruyorsun!";
        r_text[19] = "Senin yaptığın atar, benim hayatıma renk katar be güzelim!";
        r_text[20] = "Bu aşkı ikiye bölersek, sana eyvah düşer, bana eyvallah!";
        r_text[21] = "Biz ne ateşler gördük suyu görünce korkan, rüzgarı görünce cesaret alan, her ikisi de gidince kendi kendine sönen!";
        r_text[22] = "Sağır olan tek organ kulaklar değildir. Bilirim kulaktan geçen onca söz kalbe geçmez kimi zaman!";
        r_text[23] = "Benim sürdüğüm hayatın geri vitesi yok.";
        r_text[24] = "Farkımız efendi olmak, delikanlı olmak farzımız.";
        r_text[25] = "Her ne kadar kabadayılıkta gözüm olmasa da, dalımı kıranın ağacını kökten sökmesini iyi bilirim.";
        r_text[26] = "Bana yapacağın gider en fazla hoşuma gider.";
        r_text[27] = "Suskunluğumu hаfife аlmа konuşursаm аğır gelir kаldırаmаzsın.";
    
        var i = Math.floor(28*Math.random())

        await message.client.sendMessage(message.jid,`*${r_text[i]}*`, MessageType.text);

    }));

    Asena.addCommand({pattern: 'genişaile$', fromMe: false, desc: GEN}, (async (message, match) => {    

        var r_text = new Array ();
    
        r_text[0] = "Allah’ın var ettiği kulu sen nasıl yok yazarsın hocaa!";
        r_text[1] = "Başınız sağ olsun, ölüm işte. Geldi mi direkt öldürüyor!";
        r_text[2] = "Vay arkadaş! Bizdeki kader Çin Malı mıdır? Ben anlamadım ki!";
        r_text[3] = "Giyinikken ayrı çekiciyim, çıplakken imdat çekiciyim.";
        r_text[4] = "Cuma namazını çok kalabalık diye pazar günü kılan Ulvi.";
        r_text[5] = "Yağmurlu havada bahçe sulayan Ulvi";
        r_text[6] = "Adam gibi çayını iç sonra ortaokulu 2. sınıftan terk ettiğin gibi terket burayı.";
        r_text[7] = "Sana şimdi çok pis dalarım amma aramızda müthiş bi aşk doğar diye korkuyorum.";
        r_text[8] = "Sana benim gözümle bakıcak adamın aklını kırarım lan!";
    
        var i = Math.floor(9*Math.random())

        await message.client.sendMessage(message.jid,`*${r_text[i]}*`, MessageType.text);

    }));
    Asena.addCommand({pattern: 'kuzey$', fromMe: true, desc: kuz}, (async (message, match) => {    

        var r_text = new Array ();
              
        r_text[0] = "*Lan manyağaam* 😠";
        r_text[1] = "*O Ferhata söyle benim manyak olduğumu unutmasın*";
        r_text[2] = "*Ayıp değil mi lan utanmıyor musunuz ferhat abinizin mektubunu okumaya* ?";
        r_text[3] = "*Gel, gel buraya gel, senle şöyle bir konuşalım gel*";
        r_text[4] = "*Gel, gel şöyle gel*";
        r_text[5] = "*Bekle ecelin geliyor beklee.*";
        r_text[6] = "*Geri bas lan!*";
        r_text[7] = "*Gecem sen ol istiyorum gündüzüm sen ol istiyorum.*";
        r_text[8] = "*Simay benim karım lan!*";
        r_text[9] = "*Neye bakıyon lan kurabiye var simit var neye bakıyon?*";
        r_text[10] = "*Merak etme baba.*";
        r_text[11] = "*Gel aslan gel.*";
        r_text[12] = "*Kırarım belini.*";
        r_text[13] = "*Bi sıkıntı yok merak etme.*";
        r_text[14] = "*Ayıbın kolları kayıp.*";
        r_text[15] = "*Senin o bıyığını sikecem ben ama sen rahat ol*";
        r_text[16] = "*Kardeşimin emaneti lan o.. Namusum o lan benim!*";
        r_text[17] = "*Demet yetmedi, Simayı da mı sıraya koydun lan*";
        r_text[18] = "*Sana sırtımı döndüm lan ben! Düşmanım yapmadı senin yaptığını şerefsiz*!..";
        r_text[19] = "*Tırnaksız.*";
        r_text[20] = "*Maraba.*";
        r_text[21] = "*Caz yapma skerim belanı*";
        r_text[22] = "*Amk zıbzıbı*";
        r_text[23] = "*Keçii*";
        r_text[24] = "*Aliiğğğ*";
        r_text[25] = "*Te Allahım ya*";
        r_text[26] = "*Panda panda*";
        r_text[27] = "*Sırıtma lan*";
        r_text[28] = "*Ne yaylana yaylana konuşuyon yarram*";
        r_text[29] = "*Lan Farat*";
        r_text[30] = "*Benim için önemli lan benim için önemli!*";
        r_text[31] = "*Aleykümselaaaam aleykümselam*";
        r_text[32] = "*Olum soğuk lan burası*";
        r_text[33] = "*Al o parayı dür bük, ananın amına sok*";
        r_text[34] = "*Lan Manyağaam!*";
        r_text[35] = "*Ferad ananı siktim ferad*";
        r_text[36] = "*Bak güney, bak tırnaksız. seni daha taze dövdüm. senin ağzını burnunu kırarım laflarına dikkat et*";
        r_text[37] = "*Çok mutluyum. çünkü seni tamamen çıkardım attım aklımdan. rüyalarımdan bile çıkardım.*";
        r_text[38] = "*Ya ananı avradını sikiyim burdayım, görmüyon mu?*";
        r_text[39] = "*Beni dinle bak, benim belki ağzım bozuk olabilir ama içim tertemiz!*";
   
        var i = Math.floor(40*Math.random())

        await message.client.sendMessage(message.jid,`${r_text[i]}`, MessageType.text);

    }));

    Asena.addCommand({pattern: 'kardes$', fromMe: true, desc: kar}, (async (message, match) => {    

        var r_text = new Array ();

        r_text[0] = "*Ulan milletin babası sabahın köründe kalkar 4 rekât namaz… Hadi bizimkisi sünneti kılmasın 2 rekât namaz eda eder. Bizimkisi kim bilir neyin peşinde abi.*";
        r_text[1] = "*Bir senin gülümsemen, bir de boş metrobüs koltuğu.*";
        r_text[2] = "*Bu neymiş bee allah belanızı versin! bu ne olum sen manyak mısın sen bunları nasıl yedin petito sen tesisatçılığı bırak git game of thrones a ejderha yazıl metin!*";
        r_text[3] = "*Sen zaten faydalı birşey olsaydın ben seni vücudumdan atmazdım.*";
        r_text[4] = "*Eda seni ilk gördüm dedim ki; ulan ne karılar var beee!*";
        r_text[5] = "*Aaa! bu benim canım, ciğerim, kirvem metin değil mi ya o?*";
        r_text[6] = "*Allah belanı versin. Senin tipini sikeyim ben geldi yine orrspuu çocuğuu.*";
        r_text[7] = "*Eğer böyle fikirlerin varsa ve paran yoksa deli diyorlar; paran varsa girişimci oluyorsun. bir de böyle düşün.*";
        r_text[8] = "*Amca senin ben *mına koyiyim, elim ayağım birbirine dolaştı, çalsana kapıyı!*";
        r_text[9] = "*Sana oksijen veren ağacın yaprağını sikeyim*";
        r_text[10] = "*Sana kuvvet uygulayan yerin çekimini sikeyim*";
        r_text[11] = "*Ne kadar teklif etmişler? Koy amına sat gitsin. Sat, sat, sat, sat, sat koy amına!*";
        r_text[12] = "*Dalağını sikerim senin ha!*";
        r_text[13] = "*Off, seveydi iyiydi yaa!*";
        r_text[14] = "*Bak bak, benimle konuşurken yüzüme bakın azcık ya";
        r_text[15] = "*Ölünüzü yıkayan imam putperest olur yeminle*";
        r_text[16] = "*No Woman, No Cry; Yani kadınım söyle hiç mutlu oldun mu, bu deli yiğidoyu unuttun mu?*";
        r_text[17] = "*Ulan Sasha Greye döndük ağzımızda bi sex topu eksik*";
        r_text[18] = "*Abicim gözünün çapağını yiyeyim, 8 tane kardeşim yurtdışında okutuyorum*...";
        r_text[19] = "*Benim Danimarka prensesi ile bizzat oturup kaşarlı dürüm gömmüşlüğüm var*.";
        r_text[20] = "*Herifin geçmişi bir ergenin internet geçmişinden bile kirli. History’i sil seçeneğine tıklıyorum bilgisayar kasılıyor.*";
        r_text[21] = "*Oha adam ışınlanmayı buldu.*";
        r_text[22] = "*Ben ilk defa dansöz görücem, bu para takma olayını bana bir anlatsanız*..";
        r_text[23] = "*Senin gibi abim olsa genlerime küserim, anama babama hakaret davası açarım. Çık git lan burdan çık git!*";
        r_text[24] = "*Her zaman senin de dediğin gibi, “happy birthday to you, gansta.” Yani “sana gelmediğim gün, öldüğüm gündür gülüm.*";
        r_text[25] = "*İstiyorum amına koyayım sanane!*";
        r_text[26] = "*benim aylık gelirim tamı tamına 100 lira. Giderlerim ise sadece 98 lira 78 kuruş. Benim bu hayatta kaybedecek hiçbir şeyim yok. Beni bu hayata bağlayan bişey de yok.*";

        var i = Math.floor(27*Math.random())

        await message.client.sendMessage(message.jid,`${r_text[i]}`, MessageType.text);

    }));

    Asena.addCommand({pattern: 'doktor$', fromMe: true, desc: dok}, (async (message, match) => {    

        var r_text = new Array ();
    
        r_text[0] = "Bir tek sen güldün ne güzel güldün...";
        r_text[1] = "Bana sarılamasan da ellerimi tutamasan da gözlerimin içine bakamasan da, varım ben.";
        r_text[2] = "Hayat bazı kararsızlıklar için çok kısa.";
        r_text[3] = "Bi kere kaybettim abimi ,bi daha mı kaybedecem,yazık  değil mi bana?";
        r_text[4] = "Bazı insanlar bu dünyaya şifa olmak için gelir.";
        r_text[5] = "Dur, koşma koşma dur. Koş lan.";
        r_text[6] = "Sen benim hayatımda tanıdığım en yaratıcı, en akıllı adamsın";
        r_text[7] = "Başkalarının kalbini anlıyorum ama kendi kalbime bir çare bulamıyorum.";
        r_text[8] = "Bir gittim hoop öptü ben artık kimseye dokunamam";
        r_text[9] = "Sevmek dokunmakmıdır?";
        r_text[10] = "Tutardım bana dokunan eli. Sımsıkı tutardım. Bırakmazdım";
        r_text[11] = "Korksak da ağlasak da kendi ayaklarımız üzerinde duracağız düşeceğiz ama kalkacağız büyüyeceğiz...";
        r_text[12] = "Beraber alışalım mı?";
        r_text[13] = "Olan oldu hiçbir şeyi değiştiremem ki";
        r_text[14] = "Çok etkili bi konuşma yaptım galiba";
        r_text[15] = "Aynı, kar yağdığında zıplayan köpek yavrusu gibi. Siz onun mutluluktan zıpladığını sanırsınız ama o ayakları üşüdüğü için zıplar...";
        r_text[16] = "İnsanlar hayallerine tutunmalı.";
        r_text[17] = "Göz bebeklerim büyüyor. Avuçlarım terli. Eyvah!!!";
        r_text[18] = "Müthiş!";
        r_text[19] = "Çocuk!";  
        r_text[20] = "Sen beni mutlu edicek bir şey yaptın. Ben seni mutlu edicek bir şey yaptım. Şimdi sıra sende";
        r_text[21] = "Birini çok sevince, öldü diye unutamazsın onu.";
        r_text[22] = "Bana napmış olursan ol ben senin canını acıtamam.";
        r_text[23] = "İkinci bir şans. Ne kadar kullanıyorsunuz bu lafı.. Herkes ikinci bir şansın peşinde ama kimse birinciyi düzeltmeye çalışmıyor."; 
        r_text[24] = "Söyle bakalım ne yapabilirim senin hayatını kolaylaştırmak için?";
        r_text[25] = "Eğer istersen her şeyi başarabilirsin!";
        r_text[26] = "İnsanları dinle ama imkansıza da inan.";
        r_text[27] = "Yaşamımız boyunca 95 litre gözyaşı dökeriz, daha çok var ağlayabilirsin";
    
        var i = Math.floor(28*Math.random())

        await message.client.sendMessage(message.jid,`*${r_text[i]}*`, MessageType.text);

    }));

    Asena.addCommand({pattern: 'got$', fromMe: true, desc: GOT}, (async (message, match) => {    

        var r_text = new Array ();
    
        r_text[0] = "Güçlüler, her zaman güçsüzü avlamıştır. En başından bu şekilde güçlü olmuşlardır.";
        r_text[1] = "Bir daha bana kız kardeşim dersen seni uykunda boğdurturum.";
        r_text[2] = "Sana bir tavsiye vereyim, piç. Ne olduğunu asla unutma. Dünyanın geri kalanı unutmayacak. Onu zırh gibi giy, böylece seni incitmek için kullanamasınlar.";
        r_text[3] = "Benim işim bu. İçerim ve bir şeyler bilirim.";
        r_text[4] = "Bir aslan, bir koyunun düşünceleriyle kendini meşgul etmez.";
        r_text[5] = "Güç, insanlar nerede olduğuna inanıyorsa orada bulunur. Bu bir aldatmaca. Duvardaki bir gölge. Ve küçücük bir adam, kocaman bir gölge yaratır.";
        r_text[6] = "Bana bir daha elini kaldırdığın an, bu ellerini son görüşün olur.";
        r_text[7] = "Kaos bir çukur değil. Kaos bir merdiven. Tırmanmaya çalışan çoğu başarısız olur ve bir daha deneme fırsatı olmaz. Düşüş onları yıkar. Kimisine tırmanma fırsatı verilir; onlar da ya gerçeğe ya tanrılara ya da sevgiye tutunur. Yalnızca merdiven gerçektir. Ortada olan tek şey tırmanıştır.";
        r_text[8] = "Tahtların oyununu oynadığında, ya kazanırsın ya da ölürsün.";
        r_text[9] = "Baratheon Hanesinden Renlynin adına, isminin birincisi, Andalların ve İlk İnsanların gerçek kralı, Yedi Krallık Lordu ve ülkenin koruyucusu, ben, Brienne of Tarth, seni ölüme mahkum ediyorum.";
        r_text[10] = "Bunun mutlu sona ulaşacağını düşünüyorsan dikkatini yeteri kadar vermemişsin demektir.";
        r_text[11] = "Nasıl bir kılıcın bileme taşına ihtiyacı varsa bir aklın da kitaplara ihtiyacı var. Bu yüzden bu kadar çok okuyorum.";
        r_text[12] = "Kış Geliyoor";
        r_text[13] = "Aşk için yaptığım şeyler...";
        r_text[14] = "Gece karanlık ve dehşetle dolu!";
        r_text[15] = "Yalnızca bir tanrı var ve adı Ölüm. Ölüme tek bir şey söyleyebiliriz, o da Bugün değil.";
        r_text[16] = "İyi sıçmalar";
        r_text[17] = "Fuck The King";
        r_text[18] = "Kuzey Unutmaz!";
     
        var i = Math.floor(19*Math.random())

        await message.client.sendMessage(message.jid,`*${r_text[i]}*`, MessageType.text);

    }));

    Asena.addCommand({pattern: 'cod$', fromMe: true, desc: COD}, (async (message, match) => {    

        var r_text = new Array ();
    
        r_text[0] = "Whoever said the pen is mightier than the sword obviously never encountered automatic weapons.";
        r_text[1] = "In war, Truth is the first casaulty!";
        r_text[2] = "When the pin is pulled, Mr Grenade is not our friend.";
        r_text[3] = "If the enemy is in range, So are you.";
        r_text[4] = "If Your attack is going too well, you are walking into anambush.";
        r_text[5] = "All wars are civil wars, because all men are brothers...";
        r_text[6] = "Nobody makes the first jump";
        r_text[7] = "Bravo Six, Going Dark";
        r_text[8] = "Never in the field of human conflict was so much owed by so many to so few.";
        r_text[9] = "We didnt come here to lose!";
        r_text[10] = "Good job team!";
        r_text[11] = "We’ve taken the lead!";
        r_text[12] = "Were in danger of losing this one!";
    
        var i = Math.floor(13*Math.random())

        await message.client.sendMessage(message.jid,`*${r_text[i]}*`, MessageType.text);

    }));

    Asena.addCommand({pattern: 'zula$', fromMe: true, desc: ZUL}, (async (message, match) => {    

        var r_text = new Array ();
    
        r_text[0] = "Kasap!";
        r_text[1] = "Seri Katil!";
        r_text[2] = "Kelle Avcısı!";
        r_text[3] = "İntikam!";
        r_text[4] = "Aranıyorsun!";
        r_text[5] = "Tam Kafadan!";
        r_text[6] = "Hadi hadi hadi!";
        r_text[7] = "Zula Kazandı!";
        r_text[8] = "Gladyo Kazandı!";
        r_text[9] = "İki Kişi!";
        r_text[10] = "Üç Kişi!";
        r_text[11] = "Keskin Nişancı!";
        r_text[12] = "Bomba İmha Edildi!";
        r_text[13] = "Güzel Atış!";
        r_text[14] = "Bomba Kuruldu!";
        r_text[15] = "Lider Katili!";
        r_text[16] = "Son Saniye!";
        r_text[17] = "Tek kişi kaldı!";
        r_text[18] = "Hazırlan!";
        r_text[19] = "bombaa!";
    
        var i = Math.floor(20*Math.random())

        await message.client.sendMessage(message.jid,`*${r_text[i]}*`, MessageType.text);

    }));

    Asena.addCommand({pattern: 'ramiz$', fromMe: true, desc: RAM}, (async (message, match) => {    

        var r_text = new Array ();
    
        r_text[0] = "Bazı insanları kırmak gerekir yeğen, aslında kim olduklarını görmek için...";
        r_text[1] = "Acı çekmiş hiç kimse, artık eskisi gibi değildir.";
        r_text[2] = "Bir insanı yalanlarla kazanmak yerine, doğrularla kaybetmeyi tercih ederim.";
        r_text[3] = "Ağlaya ağlaya geldiğin dünyada, güle oynaya yaşayacağını mı sandın yeğen?";
        r_text[4] = "Bazen sırf hayatımızda kalmalarını istediğimiz için insanları affedersiniz.";
        r_text[5] = "Ben senin için boşa kürek çektiğimi, sen bir başka bir gemiye bindiğinde de anladım.";
        r_text[6] = "Oyunun sonuna geldiğinde, çoktan tükenmiştir gidecek olduğun yerlerin.";
        r_text[7] = "Öldürmek için gelen öldürmeden dönebilir ama ölmek için gelen... Ölmeden dönmez.";
        r_text[8] = "Yaptıkları ile küçülenler, laflarıyla büyüdüklerini sanmasınlar.";
        r_text[9] = "Seni önceden saçma sapan sevmişler Selma benimkisi ağır geldi tabi...";
        r_text[10] = "Sözler verilir sözler unutulur ama gün gelir ihanet eden sadakat ister.";
        r_text[11] = "Ara sıra kenara çekilip seyretmek lazım yeğen… Bakmak lazım kimde ne kadarız ve kim bizde ne kadar...";
        r_text[12] = "Bir insan ne kadar merhametliyse o kadar kazık yer yeğen.";
        r_text[13] = "Daha önce acı çekmiş biriyle birlikte olun. Çünkü onlar mutluluğun değerini daha iyi bilirler.";
        r_text[14] = "Elinden bir şey gelmeyince kabullenmek kolaydır.";
        r_text[15] = "Kim kazanmışki ben kazanacaktım seni bu şehri.";
        r_text[16] = "Bir hata, gözden kaçan bir söz; her şeyi kaybetmektir.";
        r_text[17] = "Delikanlı adamın silahı yüreğidir,oda tutukluk yapmaz..";
        r_text[18] = "Kiminle güldüğünü belki unutabilirsin,ama kiminle ağladığını asla!";
        r_text[19] = "Sadakat sır saklamak mıdır? Sessiz kalmak mıdır? Kıyametin kopacağını bile bile.";
        r_text[20] = "Kaygılanma çocuk, herkes ölür! Kimi toprağa, kimi yüreğe gömülür.";
        r_text[21] = "Herkesin bir geçmişi vardır, bir de geçmemişi.";
        r_text[22] = "Seni ölüme götürse de, doğrudan asla şaşmayacaksın.";
        r_text[23] = "Portakalı soymadan içinin iyi olup olmadığını anlayamazsın.";
        r_text[24] = "Bazen sevdiğin insanları korumanın tek yolu onlardan uzak durmaktır...";
        r_text[25] = "Gerçek niyetini kimse bilmeyecek.Kaderin sırrındır kaderini kimseyle paylaşmayacaksın...";
        r_text[26] = "Artık kaybedecek hiçbir şeyinin kalmaması, özgürlük olsa gerek.";
        r_text[27] = "Uykun gelmiyor diye gözlerini suçlama, Belkide o beklediğin uyku değildir.";
        r_text[28] = "Dön bak arkana yeğen. Gitmez” dediğin kaç kişi yanında?";
        r_text[29] = "Sen ağaç baltaya ne demiş bilirmisin kardeş? Ben senin beni kestiğine değil, sapının benden olduğuna üzülüyorum!";
   
        var i = Math.floor(30*Math.random())

        await message.client.sendMessage(message.jid,`*${r_text[i]}*`, MessageType.text);

    }));

    Asena.addCommand({pattern: 'no1$', fromMe: true, desc: NO}, (async (message, match) => {    

        var r_text = new Array ();
    
        r_text[0] = "Sokaklar tekin değil gezdim elim cebimde, rehberim rap içindeyim çemberin bir şekilde.";
        r_text[1] = "Susuzluğumu alkol dindirebilir.";
        r_text[2] = "Pes etmedim fakat herşey eskisinden farklı.";
        r_text[3] = "Mutlu gibi davranırım onun yüzü gülsün..";
        r_text[4] = "Hiçbi melek ölmez ama sen bi kere dirilmedin.";
        r_text[5] = "Çok umutlu görünmeyi inan çok unuttum.";
        r_text[6] = "Hangi tepeden bakarsan bak değişmez manzara.";
        r_text[7] = "Sikik düzenin içinde üzülmeye doyamadım.";
        r_text[8] = "Sesin kesilirse gözlerin anlatır mı herşeyi?";
        r_text[9] = "Hayatım kumar bayım, çok fazla zarardayım..";
        r_text[10] = "Kimseye anlatamadım derdimi.";
        r_text[11] = "Hiç ışık yok farkındayım...";
        r_text[12] = "Sikik hesaplar peşinde bütün bildiklerim.";
        r_text[13] = "Dinle sakın düşme dostum ışıkların peşine.";
        r_text[14] = "Kıyasla, bak aynaya kim daha çok hasta.";
        r_text[15] = "Yanlışım tamamda neden tek doğrunuz buydu?";
        r_text[16] = "Neler gerekliydi biraz gülümsemek için?";
        r_text[17] = "Sevdiğim her kadın öldü rakı masasında.";
        r_text[18] = "Sönüp giden tebessümü esrarla mı dirilttin?";
        r_text[19] = "Umutlarımı söndürüp ışıkları yaktım.";
        r_text[20] = "Dilenmeyi reddeden bi tinerciden dahası..";
        r_text[21] = "Masum bu ruhumda bıraktığın izler..";
        r_text[22] = "Biz öldük ama ben yaşıyorum.";
        r_text[23] = "Unutursun sevdiğine sarılmayı dayı.";
        r_text[24] = "Annem kafamda kırıcak elimdeki şişeyi.";
        r_text[25] = "Biz bu gece uyumadık gün size günaydı.";
        r_text[26] = "Ölmek için yaşamaktan daha çok çaba sarfettim.";
        r_text[27] = "Burda tramvay yok gençliğim travma.";
        r_text[28] = "Sonra öl ve hep rahat kal.";
        r_text[29] = "Herşey yolunda değil, sadece sen yolundasın.";
    
        var i = Math.floor(30*Math.random())

        await message.client.sendMessage(message.jid,`*${r_text[i]}*`, MessageType.text);

    }));

    Asena.addCommand({pattern: 'lia$', fromMe: true, desc: LİA}, (async (message, match) => {    

        var r_text = new Array ();
    
        r_text[0] = "Hiçkimsemiz yok aden.";
        r_text[1] = "Tanrım bu sürmeli sonsuza dek.";
        r_text[2] = "Değilim iyimser, olamam iyi de.";
        r_text[3] = "Çöküyor üzerime yine geceler.";
        r_text[4] = "Üzgünüm anne erken eve dönemem.";
        r_text[5] = "Çok uzağım evimden.";
        r_text[6] = "Hep benden bahseder bi numara dediklerin.";
        r_text[7] = "Alçaktan geliyorum bunu bilmelisiniz.";
        r_text[8] = "Dostlarım yanımdayken sınayın beni.";
        r_text[9] = "Baba bak yapıyorum senin gibi kariyer.";
        r_text[10] = "Diziyorum paraları sikik şehir labirent.";
        r_text[11] = "Merhaba orospu çocukları ölümsüzüm ben.";
        r_text[12] = "Beni bloklayamaz havalı kadınlar.";
        r_text[13] = "Uçuyoruz biz hala yakalayan yok.";
        r_text[14] = "Beni alt etmeye çalışma çünkü bi bok değilsin.";
        r_text[15] = "Eziklerle takılmam bi mücevher gibiyim.";
        r_text[16] = "Artık edemiyorum gecene eşlik.";
        r_text[16] = "Birileri geldi ve değiştin!";
        r_text[17] = "Bilmiyorum tüm gece ne içtim";
        r_text[18] = "Ben bi tek kendime yenildim.";
        r_text[19] = "Sen olduğun gibi değilsin bak.";
        r_text[20] = "Dostlarım oldukları gibi kalmadılar.";
        r_text[21] = "Söylesene çalışıyosun kim olmaya?";
        r_text[22] = "Bu sen değilsin inan!";
        r_text[23] = "Genç ölebilirim bak.";
        r_text[24] = "Kızım tut çekiyor aşk.";
        r_text[25] = "Aklımı kaybedemem bida.";
        r_text[26] = "Bi kez kendine dürüst ol mesela!";
        r_text[27] = "Git yalnız kalplerin içinde yaşa!";
        r_text[28] = "Hiç kimse sana ben gibi bakmaz..";
        r_text[29] = "Yıldızlar bizim için yağıyor düşmekten korkma.";
        r_text[30] = "Masal anlatma bana!";
        r_text[31] = "Heartbreaker";
        r_text[32] = "İhtiyacım olan bu değil..";
        r_text[33] = "Seni tanıyamıyorum hiç.";
        r_text[34] = "Önceden bi kalbe sahiptin.";
        r_text[35] = "Bir süre daha kal inan bana değilim kendimde.";
        r_text[36] = "Beraber başarabiliriz!";
        r_text[37] = "Bu kez kazanıyoruz tut elimden.";
        r_text[38] = "Bi an önce son hamleni yap.";
        r_text[39] = "İzin veriyorum oyun oynamana.";
        r_text[40] = "Kaygı dolu adamlara git şovunu yap!";
        r_text[41] = "Varmı içinde kalp?";
        r_text[42] = "Kızım başaramıcaksın vurulmayla ölmem!";
        r_text[43] = "Sen gidersen eğer hikayemiz yarım kalır.";
        r_text[44] = "Kaçamam bi sürü dert!";
        r_text[45] = "Bi kazananı yoksa niye savaşıyoruz?";
    
        var i = Math.floor(46*Math.random())

        await message.client.sendMessage(message.jid,`*${r_text[i]}*`, MessageType.text);

    }));

    Asena.addCommand({pattern: 'recep$', fromMe: true, desc: REC}, (async (message, match) => {    

        var r_text = new Array ();
    
        r_text[0] = "Ekinler baş vermeden kör buzağı topallamazmış.";
        r_text[1] = "Hocam sana gafam girsin.";
        r_text[2] = "Hepimiz kalorilerimizi yakalım, göbeklerden kurtulalım.";
        r_text[3] = "Ne bahıyon?";
        r_text[4] = "en suya düşsen hiç batmazsın biliyo musun. Neden, çünkü senin tipin kayık.";
        r_text[5] = "Bu ne saçma hayat, bu ne serkeş hayat, bu ne dingil hayat ya? Bu ne kopuk hayat, bu ne manyak yaşam tarzı ya, bu ne bohemi ya?";
        r_text[6] = "Gonuşma lan!";
        r_text[7] = "Kadının yaşı, erkeğin maaşı sorulmaz koçuum. Biraz yol yordam öğren dingil!";
        r_text[8] = "Sende sinsilik var yanıma 5 metreden fazla yakalaşma!";
        r_text[9] = "Senin içine bi şey kaçmış yavrum, ortasında i harfi var.";
        r_text[10] = "Aç şu camı mamı, bu ne kokuyo, apuş arası kokuyo resmen ya.";
        r_text[11] = "Nedir senin derdin arkadaşım? Kafan mı iyi anlamadım ki!";
        r_text[12] = "Agrasifim, kompleksliyim!";
        r_text[13] = "Uyudum sandın değil mi buhoo buhoo..";
        r_text[14] = "Kan görüyorum hocam vahşet görüyorum şakak kemiğinden girmiş levye görüyorum hocam, levye hocam adamın şakak kemiğinden girmiş hocam.";
        r_text[15] = "Benim canım yanmaz gardaşşş..";
        r_text[16] = "Bundan sonra bu kafilenin başkanı benim.";
        r_text[17] = "Bu internet aleminde çoh garı gız var diyolar doğru mu?";
        r_text[18] = "Laf sokarım derinden aklın oynar yerinden.";
        r_text[19] = "Lan ikiz dingiller, o dilini gopartırım senin.";
        r_text[20] = "Problem nedir gardaş? Hıı Takaşi Hiroşi Mahat hı. Nedir la sizin derdiniz geldiniz burda artislik mi yapıyonguz?";
        r_text[22] = "Acı macı bize işler mi bacı ya?";
    
        var i = Math.floor(23*Math.random())

        await message.client.sendMessage(message.jid,`*${r_text[i]}*`, MessageType.text);

    }));

    Asena.addCommand({pattern: 'sifir1$', fromMe: true, desc: SİF}, (async (message, match) => {    

        var r_text = new Array ();
    
        r_text[0] = "Yaptıklarm icin pişman deyilim haa aklım hala yapmadıklarımda!";
        r_text[1] = "Hodri meydan biloocan.";
        r_text[2] = "Niye sıktın lan çocuğun bacağına icab eder mi Özgür?";
        r_text[3] = "Siktir git! Bu saatten sonra tekerlekli sandalyeyle gez.";
        r_text[4] = "Ne bakıyon lan gevşek!";
        r_text[5] = "Değişirse kahrolim ya, onlar da bizim gibi etten kemikten deel mi?";
        r_text[6] = "Öleceğiz diye gülmeyek mi?";
        r_text[7] = "Abilerin konuşurken lafa girme, tamam?";
        r_text[8] = "İhanet eden sadakat beklemesin bab ba.";
        r_text[9] = "Yapılan her kahpeliğe bir mermi borcumuz olsun.";
        r_text[10] = "Mutsuz insanları ayakta tutan tek şey hayalleridir.";
        r_text[11] = "Bah hele lan yavşağa orjin rayban takıyor.";
        r_text[10] = "Sevdikten sonra dili, dini ne fark eder ana.";
        r_text[13] = "Ya akar kanımız kaldırım taşlarına ya da teneşir paklar artık sizi.";
        r_text[14] = "Cio ölme ha!";
        r_text[15] = "Selamun aleyküm var mı bi şeyler?";
        r_text[16] = "Az dan Az Gider Çoktan Çok Gider!";
        r_text[17] = "Gidere gider değil alayına gider.";
        r_text[18] = "Lan ben doğma büyüme Adanalıyım, ne demek soğuk duruyorsun!";
        r_text[19] = "Senin yaptığın atar, benim hayatıma renk katar be güzelim!";
        r_text[20] = "Bu aşkı ikiye bölersek, sana eyvah düşer, bana eyvallah!";
        r_text[21] = "Biz ne ateşler gördük suyu görünce korkan, rüzgarı görünce cesaret alan, her ikisi de gidince kendi kendine sönen!";
        r_text[22] = "Sağır olan tek organ kulaklar değildir. Bilirim kulaktan geçen onca söz kalbe geçmez kimi zaman!";
        r_text[23] = "Benim sürdüğüm hayatın geri vitesi yok.";
        r_text[24] = "Farkımız efendi olmak, delikanlı olmak farzımız.";
        r_text[25] = "Her ne kadar kabadayılıkta gözüm olmasa da, dalımı kıranın ağacını kökten sökmesini iyi bilirim.";
        r_text[26] = "Bana yapacağın gider en fazla hoşuma gider.";
        r_text[27] = "Suskunluğumu hаfife аlmа konuşursаm аğır gelir kаldırаmаzsın.";
    
        var i = Math.floor(28*Math.random())

        await message.client.sendMessage(message.jid,`*${r_text[i]}*`, MessageType.text);

    }));

    Asena.addCommand({pattern: 'genişaile$', fromMe: true, desc: GEN}, (async (message, match) => {    

        var r_text = new Array ();
    
        r_text[0] = "Allah’ın var ettiği kulu sen nasıl yok yazarsın hocaa!";
        r_text[1] = "Başınız sağ olsun, ölüm işte. Geldi mi direkt öldürüyor!";
        r_text[2] = "Vay arkadaş! Bizdeki kader Çin Malı mıdır? Ben anlamadım ki!";
        r_text[3] = "Giyinikken ayrı çekiciyim, çıplakken imdat çekiciyim.";
        r_text[4] = "Cuma namazını çok kalabalık diye pazar günü kılan Ulvi.";
        r_text[5] = "Yağmurlu havada bahçe sulayan Ulvi";
        r_text[6] = "Adam gibi çayını iç sonra ortaokulu 2. sınıftan terk ettiğin gibi terket burayı.";
        r_text[7] = "Sana şimdi çok pis dalarım amma aramızda müthiş bi aşk doğar diye korkuyorum.";
        r_text[8] = "Sana benim gözümle bakıcak adamın aklını kırarım lan!";
    
        var i = Math.floor(9*Math.random())

        await message.client.sendMessage(message.jid,`*${r_text[i]}*`, MessageType.text);

    }));
    Asena.addCommand({pattern: 'lol$', fromMe: true, desc: LOL}, (async (message, match) => {    

        var r_text = new Array ();
    
        r_text[0] = "_Bir rakip katledildi!_";
        r_text[1] = "_Takımından biri katledildi..._";
        r_text[2] = "İKİDE İKİ!";
        r_text[3] = "Rakip ikiledi !";
        r_text[4] = "ÜÇTE ÜÇÇ !!!";
        r_text[5] = "_Rakip üçledi... 😔_";
        r_text[6] = "_💥💢DÖRRTTTE DÖÖRTT !!!😱🔥_";
        r_text[7] = "_Rakip DÖRTLEDİ !_";
        r_text[8] = "🔥🔥💨 _B E Ş T E BEEEEŞŞŞŞŞ_ 💥👆🏻🌪️⚡";
        r_text[9] = "_...katliam_";
        r_text[10] = " _Minyonların harekete geçmesine 30 saniye... 🦔🐣🐥_";
        r_text[11] = "_☠️🔮😈RUUUHUN BENİM OLUUCAAAAK :) 😈🔮☠️_";
    
        var i = Math.floor(12*Math.random())

        await message.client.sendMessage(message.jid,`*${r_text[i]}*`, MessageType.text);

    }));

}
